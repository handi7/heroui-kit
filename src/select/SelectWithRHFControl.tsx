import { type SelectProps } from "@heroui/react";
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";
import type { SelectOption } from "./Select";
import Select from "./Select";

export type SelectWithRHFControlProps<T extends FieldValues> = Omit<SelectProps, "children"> & {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  options: SelectOption[];
};

function SelectWithRHFControl<T extends FieldValues>(props: SelectWithRHFControlProps<T>) {
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
        <Select
          {...field}
          {...rest}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}

export default SelectWithRHFControl;
