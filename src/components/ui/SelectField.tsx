import { FormControl, FormLabel, Select, SelectProps } from "@chakra-ui/react";

interface SelectFieldProps extends SelectProps {
  label?: string;
}

export default function SelectField({ label, ...props }: SelectFieldProps) {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <Select borderRadius="md" {...props} />
    </FormControl>
  );
}
