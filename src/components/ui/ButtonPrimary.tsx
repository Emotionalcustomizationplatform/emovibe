import { Button, ButtonProps } from "@chakra-ui/react";

export default function ButtonPrimary(props: ButtonProps) {
  return <Button colorScheme="teal" borderRadius="md" size="md" {...props} />;
}
