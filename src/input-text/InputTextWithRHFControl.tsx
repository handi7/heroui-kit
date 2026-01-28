import type { InputProps } from "@heroui/react";
import {
  Controller,
  type Control,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";
import InputText from "./InputText";

export type InputTextWithRHFControlProps<T extends FieldValues> = InputProps & {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
};

function InputTextWithRHFControl<T extends FieldValues>(props: InputTextWithRHFControlProps<T>) {
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
        <InputText
          {...field}
          {...rest}
          value={field.value ?? ""}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}

export default InputTextWithRHFControl;
