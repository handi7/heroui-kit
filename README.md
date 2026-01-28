# @byhandi/heroui-kit

Opinionated HeroUI components with built-in React Hook Form integration.

## Introduction

This library provides a collection of customized components built on top of [HeroUI](https://heroui.com). It focuses on providing consistent styling (e.g., `bordered` variant, `sm` radius) and seamless integration with `react-hook-form` via dedicated control wrappers.

## Installation

```bash
npm install @byhandi/heroui-kit
```

### Peer Dependencies

Ensure you have the following peer dependencies installed in your project:

- `react` >= 18
- `react-dom` >= 18
- `@heroui/react` >= 2.8
- `framer-motion` >= 11
- `react-hook-form` >= 7
- `@hookform/resolvers` >= 3

## Components

### Button

A customized wrapper around HeroUI's `Button` component.

**Default Props:**

- `color`: "primary"
- `type`: "button"

**Usage:**

```tsx
import { Button } from "@byhandi/heroui-kit";

function App() {
  return <Button onPress={() => console.log("Clicked")}>Click Me</Button>;
}
```

### InputText

A styled wrapper around HeroUI's `Input` component.

**Default Props:**

- `variant`: "bordered"
- `radius`: "sm"
- `labelPlacement`: "outside"
- Background: White (Light Mode) / Default (Dark Mode)

**Usage:**

```tsx
import { InputText } from "@byhandi/heroui-kit";

function App() {
  return <InputText label="Username" placeholder="Enter your username" />;
}
```

### InputTextWithRHFControl

**Usage:**

```tsx
import { useForm } from "react-hook-form";
import { InputTextWithRHFControl } from "@byhandi/heroui-kit";

interface FormValues {
  username: string;
}

function App() {
  const { control, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputTextWithRHFControl control={control} name="username" label="Username" isRequired />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### InputNumber

A styled wrapper around HeroUI's `NumberInput`.

**Default Props:**

- `variant`: "bordered"
- `labelPlacement`: "outside"

**Usage:**

```tsx
import { InputNumber } from "@byhandi/heroui-kit";

function App() {
  return <InputNumber label="Age" />;
}
```

### InputNumberWithRHFControl

Wrapper for `InputNumber` with React Hook Form integration.

**Usage:**

```tsx
<InputNumberWithRHFControl control={control} name="age" label="Age" />
```

### Textarea

A styled wrapper around HeroUI's `Textarea`.

**Default Props:**

- `variant`: "bordered"
- `labelPlacement`: "outside"

**Usage:**

```tsx
import { Textarea } from "@byhandi/heroui-kit";

function App() {
  return <Textarea label="Description" />;
}
```

### TextareaWithRHFControl

Wrapper for `Textarea` with React Hook Form integration.

**Usage:**

```tsx
<TextareaWithRHFControl control={control} name="description" label="Description" />
```

### Select

A styled wrapper around HeroUI's `Select`.

**Default Props:**

- `variant`: "bordered"
- `labelPlacement`: "outside"

**Usage:**

```tsx
import { Select } from "@byhandi/heroui-kit";

const options = [{ value: "1", label: "Option 1" }];

function App() {
  return <Select label="Choose" options={options} />;
}
```

### SelectWithRHFControl

Wrapper for `Select` with React Hook Form integration.

**Usage:**

```tsx
<SelectWithRHFControl control={control} name="choice" label="Choose" options={options} />
```

### Autocomplete

A styled wrapper around HeroUI's `Autocomplete`.

**Default Props:**

- `variant`: "bordered"
- `labelPlacement`: "outside"

**Usage:**

```tsx
import { Autocomplete } from "@byhandi/heroui-kit";

const options = [{ value: "1", label: "Option 1" }];

function App() {
  return <Autocomplete label="Search" options={options} />;
}
```

### AutocompleteWithRHFControl

Wrapper for `Autocomplete` with React Hook Form integration.

**Usage:**

```tsx
<AutocompleteWithRHFControl control={control} name="search" label="Search" options={options} />
```

### Checkbox

A styled wrapper around HeroUI's `Checkbox`.

**Usage:**

```tsx
import { Checkbox } from "@byhandi/heroui-kit";

function App() {
  return <Checkbox>Accept terms</Checkbox>;
}
```

### CheckboxWithRHFControl

Wrapper for `Checkbox` with React Hook Form integration.

**Usage:**

```tsx
<CheckboxWithRHFControl control={control} name="terms">
  Accept terms
</CheckboxWithRHFControl>
```

### CheckboxGroup

A styled wrapper around HeroUI's `CheckboxGroup`.

**Usage:**

```tsx
import { CheckboxGroup } from "@byhandi/heroui-kit";

const options = [{ value: "1", label: "Option 1" }];

function App() {
  return <CheckboxGroup label="Options" options={options} />;
}
```

### CheckboxGroupWithRHFControl

Wrapper for `CheckboxGroup` with React Hook Form integration.

**Usage:**

```tsx
<CheckboxGroupWithRHFControl control={control} name="options" label="Options" options={options} />
```

## Development

This project uses Vite for development and bundling.

### Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the library for production (outputs to `dist`).
- **`npm run lint`**: Run ESLint.
- **`npm run preview`**: Preview the production build.

## License

MIT
