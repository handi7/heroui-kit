import { type CheckboxProps } from "@heroui/react";
import { type ReactNode } from "react";
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";
import Checkbox from "./Checkbox";
import type { CheckboxGroupOption } from "./CheckboxGroup";

export type CheckboxWithControlProps<T extends FieldValues> = CheckboxProps & {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  children?: ReactNode;
  options?: CheckboxGroupOption[];
};

function CheckboxWithRHFControl<T extends FieldValues>(props: CheckboxWithControlProps<T>) {
  const { control, name, rules = {}, ...rest } = props;

  const mergedRules = {
    ...rules,
    ...(rest.isRequired && !rules?.required ? { required: "This field is required" } : {}),
  };

  return (
    <Controller
      control={control}
      name={name}
      rules={mergedRules}
      render={({ field, fieldState }) => (
        <Checkbox {...field} {...rest} isInvalid={fieldState.invalid}>
          {props.children}
        </Checkbox>
      )}
    />
  );
}

export default CheckboxWithRHFControl;
