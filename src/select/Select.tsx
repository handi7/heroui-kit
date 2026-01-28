import {
  Select as HeroSelect,
  SelectItem,
  type SelectItemProps,
  type SelectProps,
  cn,
} from "@heroui/react";

export interface SelectOption {
  value: string;
  label: string;
  props?: SelectItemProps;
}

interface Props extends Omit<SelectProps, "children"> {
  options: SelectOption[];
}

function Select({ options, ...props }: Props) {
  return (
    <HeroSelect
      variant="bordered"
      labelPlacement="outside"
      placeholder="Select one of the options"
      {...props}
      classNames={{
        ...props.classNames,
        popoverContent: cn("rounded-md", props.classNames?.popoverContent),
      }}
    >
      {options.map((item) => (
        <SelectItem key={item.value}>{item.label}</SelectItem>
      ))}
    </HeroSelect>
  );
}

export default Select;
