# @han/heroui-kit

Opinionated HeroUI components with built-in React Hook Form integration.

## Introduction

This library provides a collection of customized components built on top of [HeroUI](https://heroui.com). It focuses on providing consistent styling (e.g., `bordered` variant, `sm` radius) and seamless integration with `react-hook-form` via dedicated control wrappers.

## Installation

```bash
npm install @han/heroui-kit
```

### Peer Dependencies

Ensure you have the following peer dependencies installed in your project:

- `react` >= 19
- `react-dom` >= 19
- `@heroui/react` >= 2.8
- `framer-motion` >= 11
- `react-hook-form` >= 7

## Components

### InputText

A styled wrapper around HeroUI's `Input` component.

**Default Props:**

- `variant`: "bordered"
- `radius`: "sm"
- `labelPlacement`: "outside"
- Background: White (Light Mode) / Default (Dark Mode)

**Usage:**

```tsx
import { InputText } from "@han/heroui-kit";

function App() {
  return <InputText label="Username" placeholder="Enter your username" />;
}
```

### InputTextWithRHFControl

A wrapper component that integrates `InputText` with `react-hook-form`'s `Controller`. It automatically handles:

- State management via `control`
- Error states (`isInvalid`)
- Error messages (`errorMessage`)
- Required validation (if `isRequired` prop is true)

**Usage:**

```tsx
import { useForm } from "react-hook-form";
import { InputTextWithRHFControl } from "@han/heroui-kit";

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

## Development

This project uses Vite for development and bundling.

### Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the library for production (outputs to `dist`).
- **`npm run lint`**: Run ESLint.
- **`npm run preview`**: Preview the production build.

## License

MIT
