import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";

interface InputFieldProps extends InputProps {
  label?: string;
}

export default function InputField({ label, ...props }: InputFieldProps) {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Input borderRadius="md" {...props} />
    </FormControl>
  );
}
