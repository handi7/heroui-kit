import { type TextAreaProps } from "@heroui/react";
import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";
import Textarea from "./Textarea";

export type TextareaWithRHFControlProps<T extends FieldValues> = TextAreaProps & {
  control: Control<T>;
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
};

function TextareaWithRHFControl<T extends FieldValues>(props: TextareaWithRHFControlProps<T>) {
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
        <Textarea
          {...field}
          {...rest}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}

export default TextareaWithRHFControl;
