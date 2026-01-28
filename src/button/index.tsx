import { Button as HeroButton, type ButtonProps } from "@heroui/react";

function Button({ children, ...props }: ButtonProps) {
  return (
    <HeroButton type="button" color="primary" {...props}>
      {children}
    </HeroButton>
  );
}

export default Button;
