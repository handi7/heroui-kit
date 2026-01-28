import { NumberInput, type NumberInputProps } from "@heroui/react";

function InputNumber(props: NumberInputProps) {
  return <NumberInput variant="bordered" labelPlacement="outside" placeholder="0" {...props} />;
}

export default InputNumber;
