import {
  type Control,
  Controller,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from "react-hook-form";
import type { AutocompleteOptionItem } from "./Autocomplete";
import Autocomplete from "./Autocomplete";
import type { AutocompleteProps } from "@heroui/react";

export type AutocompleteWithRHFControlProps<T extends FieldValues> =
  AutocompleteProps<AutocompleteOptionItem> & {
    control: Control<T>;
    name: Path<T>;
    rules?: RegisterOptions<T, Path<T>>;
    options?: AutocompleteOptionItem[];
  };

function AutocompleteWithRHFControl<T extends FieldValues>(
  props: AutocompleteWithRHFControlProps<T>,
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
        <Autocomplete
          {...field}
          {...rest}
          onSelectionChange={onChange}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
}

export default AutocompleteWithRHFControl;
