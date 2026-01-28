import {
  Autocomplete as HeroAutocomplete,
  AutocompleteItem,
  type AutocompleteItemProps,
  type AutocompleteProps as HeroAutocompleteProps,
  cn,
} from "@heroui/react";

export interface AutocompleteOptionItem {
  value: string;
  label: string;
  props?: AutocompleteItemProps;
}

interface AutocompleteProps extends Omit<
  HeroAutocompleteProps<AutocompleteOptionItem>,
  "children"
> {
  options?: AutocompleteOptionItem[];
}

function Autocomplete({ options = [], ...props }: AutocompleteProps) {
  return (
    <HeroAutocomplete
      variant="bordered"
      labelPlacement="outside"
      placeholder="Type to search"
      validationBehavior="aria"
      items={options}
      {...props}
      classNames={{
        ...props.classNames,
        popoverContent: cn("rounded-md", props.classNames?.popoverContent),
      }}
    >
      {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
    </HeroAutocomplete>
  );
}

export default Autocomplete;
