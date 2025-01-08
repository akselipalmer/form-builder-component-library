import { GripVertical } from "lucide-react";
import { field, fieldTypes } from "types";
import { z } from "zod";

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

export default function DisplayItems({ items }: DisplayItemsProps) {
  const formSchema = z.object(
    items.reduce((acc, item) => {
      acc[item.name] = getInputType(z, item.type); // Adjust the schema type as needed
      return acc;
    }, {} as Record<string, z.ZodTypeAny>)
  );
  console.log(formSchema);
  return (
    <div className="flex flex-col gap-2 mt-5 w-full max-w-md">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-2 p-2 rounded-xl shadow-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 w-full"
        >
          <GripVertical />
          <p className="text-lg">{item.name}:</p>
          <p className="text-lg text-gray-500">{item.type}</p>
        </div>
      ))}
    </div>
  );
}
