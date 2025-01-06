import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusCircleIcon } from "lucide-react";

const FormSchema = z.object({
  type: z.string().nonempty(),
});

type AddInputBarProps = {
  setItems: React.Dispatch<
    React.SetStateAction<
      {
        type: string;
      }[]
    >
  >;
};

export default function AddInputBar({ setItems }: AddInputBarProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    return setItems((items) => [...items, data]);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-2 px-3 py-2 rounded-full shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="rounded-full min-w-32">
                    <SelectValue placeholder="Input Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                </SelectContent>
              </Select>
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
