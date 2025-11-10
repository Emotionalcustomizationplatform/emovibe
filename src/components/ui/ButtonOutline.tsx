import { Button, ButtonProps } from "@chakra-ui/react";

export default function ButtonOutline(props: ButtonProps) {
  return <Button variant="outline" colorScheme="teal" borderRadius="md" size="md" {...props} />;
}
