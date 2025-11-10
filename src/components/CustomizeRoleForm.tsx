import { Box, VStack, Input, Select, Button, Textarea } from "@chakra-ui/react";
import { useState } from "react";

export default function CustomizeRoleForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [personality, setPersonality] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = () => {
    alert(`AI Role Created!\nName: ${name}\nGender: ${gender}\nPersonality: ${personality}`);
    // 在这里可以调用 API 存储定制信息
  };

  return (
    <Box maxW="600px" mx="auto" py={12} px={6} borderRadius="md" bg="gray.50">
      <VStack spacing={4}>
        <Input placeholder="Role Name" value={name} onChange={e => setName(e.target.value)} />
        <Select placeholder="Select Gender" value={gender} onChange={e => setGender(e.target.value)}>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="nonbinary">Non-binary</option>
        </Select>
        <Input placeholder="Personality Traits" value={personality} onChange={e => setPersonality(e.target.value)} />
        <Textarea placeholder="Special Instructions / Requests" value={instructions} onChange={e => setInstructions(e.target.value)} />
        <Button colorScheme="teal" onClick={handleSubmit}>Create Role</Button>
      </VStack>
    </Box>
  );
}
