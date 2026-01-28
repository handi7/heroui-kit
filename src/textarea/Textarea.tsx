import { type TextAreaProps, Textarea as HeroTextarea } from "@heroui/react";

function Textarea(props: TextAreaProps) {
  return (
    <HeroTextarea
      variant="bordered"
      labelPlacement="outside"
      placeholder="Type here"
      validationBehavior="aria"
      {...props}
    />
  );
}

export default Textarea;
