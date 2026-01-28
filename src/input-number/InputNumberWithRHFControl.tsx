import type { NumberInputProps } from "@heroui/react";
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";
import InputNumber from "./InputNumber";

export type InputNumberWithRHFControlProps<T extends FieldValues> = NumberInputProps & {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
};

function InputNumberWithRHFControl<T extends FieldValues>(
  props: InputNumberWithRHFControlProps<T>,
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
      render={({ field: { onChange, ...field }, fieldState }) => (
        <InputNumber
          {...field}
          {...rest}
          onValueChange={(value) => onChange(value)}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}

export default InputNumberWithRHFControl;
