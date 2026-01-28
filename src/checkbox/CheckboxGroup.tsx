import {
  CheckboxGroup as HeroCheckboxGroup,
  type CheckboxGroupProps,
  type CheckboxProps,
} from "@heroui/react";
import { cn } from "@heroui/theme";
import Checkbox from "./Checkbox";

export interface CheckboxGroupOption {
  value: any;
  label: string;
  props?: CheckboxProps;
}

interface Props extends Omit<CheckboxGroupProps, "children"> {
  options: CheckboxGroupOption[];
}

function CheckboxGroup({ options, ...props }: Props) {
  return (
    <HeroCheckboxGroup
      {...props}
      classNames={{
        ...props.classNames,
        label: cn(
          "text-sm text-foreground font-medium",
          { "text-danger": props.isInvalid },
          props.classNames?.label,
        ),
      }}
    >
      {options.map((option) => (
        <Checkbox key={option.value} value={option.value} {...option.props}>
          {option.label}
        </Checkbox>
      ))}
    </HeroCheckboxGroup>
  );
}

export default CheckboxGroup;
