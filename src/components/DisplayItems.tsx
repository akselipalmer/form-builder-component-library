import { zodResolver } from "@hookform/resolvers/zod";
import { GripVertical } from "lucide-react";
import { useForm } from "react-hook-form";
import { field, fieldTypes } from "types";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

type DisplayItemsProps = {
  items: field[];
};

const getInputType = (zod: typeof z, type: fieldTypes) => {
  switch (type) {
    case "text":
      return zod.string();
    case "number":
      return zod.number();
    default:
      throw new Error(`Unknown type: ${type}`);
  }
};

const getInputDefaultValue = (type: fieldTypes) => {
  switch (type) {
    case "text":
      return "";
    case "number":
      return 0;
    default:
      throw new Error(`Unknown type: ${type}`);
  }
};

export default function DisplayItems({ items }: DisplayItemsProps) {
  const formSchema = z.object(
    items.reduce((acc, item) => {
      acc[item.name] = getInputType(z, item.type); // Adjust the schema type as needed
      return acc;
    }, {} as Record<string, z.ZodTypeAny>)
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: items.reduce((acc, item) => {
      acc[item.name] = getInputDefaultValue(item.type); // Adjust the default value as needed
      return acc;
    }, {} as Record<string, string | number>),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full max-w-3xl"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-2 p-2 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 w-full"
          >
            <GripVertical />
            <FormField
              control={form.control}
              name={item.name}
              render={({ field }) => {
                console.log(field.value);
                return (
                  <FormItem>
                    <FormLabel>{item.name}</FormLabel>
                    <FormControl>
                      <Input {...field} type={item.type} />
                    </FormControl>
                    <FormDescription>
                      Field description goes here
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
