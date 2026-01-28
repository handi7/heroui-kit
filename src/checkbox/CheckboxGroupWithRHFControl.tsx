import { type CheckboxGroupProps } from "@heroui/react";
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";
import type { CheckboxGroupOption } from "./CheckboxGroup";
import CheckboxGroup from "./CheckboxGroup";

export interface CheckboxGroupWithRHFControlProps<
  T extends FieldValues,
> extends CheckboxGroupProps {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  options: CheckboxGroupOption[];
}

function CheckboxGroupWithRHFControl<T extends FieldValues>(
  props: CheckboxGroupWithRHFControlProps<T>,
) {
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
      render={({ field, fieldState }) => {
        return (
          <CheckboxGroup
            {...rest}
            {...field}
            isInvalid={fieldState.invalid}
            errorMessage={fieldState.error?.message}
          />
        );
      }}
    />
  );
}

export default CheckboxGroupWithRHFControl;
