import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircleIcon } from "lucide-react";
import { field } from "types";
import { Input } from "./ui/input";

const FormSchema = z.object({
  type: z.string().nonempty(),
  name: z.string().nonempty(),
});

type AddInputBarProps = {
  setItems: React.Dispatch<React.SetStateAction<field[]>>;
};

export default function AddInputBar({ setItems }: AddInputBarProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      type: "text",
      name: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    form.reset();
    return setItems((items) => [...items, data as field]);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 px-3 py-2 rounded-full shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Name" {...field} className="rounded-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="rounded-full min-w-32">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="rounded-full">
          Add <PlusCircleIcon />
        </Button>
      </form>
    </Form>
  );
}
