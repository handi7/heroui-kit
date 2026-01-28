import { Checkbox as HeroCheckbox, type CheckboxProps } from "@heroui/react";
import { cn } from "@heroui/theme";

function Checkbox(props: CheckboxProps) {
  return (
    <HeroCheckbox
      {...props}
      classNames={{
        ...props.classNames,
        label: cn("text-sm font-medium", props.classNames?.label),
      }}
    >
      {props.children}
    </HeroCheckbox>
  );
}

export default Checkbox;
