import { ControllerRenderProps } from "react-hook-form";
import { Input } from "./ui/input";
import { fieldTypes } from "types";

type DisplayInputProps = {
  field: ControllerRenderProps<
    {
      [x: string]: string | number;
    },
    string
  >;
  type: fieldTypes;
};

export default function DisplayInput({ field, type }: DisplayInputProps) {
  return <Input {...field} type={type} defaultValue={field.value} />;
}
