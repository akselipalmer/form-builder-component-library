import { field } from "types";

type DisplayItemsProps = {
  items: field[];
};

export default function DisplayItems({ items }: DisplayItemsProps) {
  return (
    <div className="flex flex-col items-center">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <p className="text-lg">{item.name}</p>
          <p className="text-lg text-gray-500">{item.type}</p>
        </div>
      ))}
    </div>
  );
}
