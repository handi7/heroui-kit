import { Input, type InputProps, cn } from "@heroui/react";

function InputText(props: InputProps) {
  return (
    <Input
      variant="bordered"
      radius="sm"
      labelPlacement="outside"
      placeholder="Type here"
      validationBehavior="aria"
      {...props}
      classNames={{
        ...props.classNames,
        inputWrapper: cn("bg-white dark:bg-default", [props.classNames?.inputWrapper]),
      }}
    />
  );
}

export default InputText;
