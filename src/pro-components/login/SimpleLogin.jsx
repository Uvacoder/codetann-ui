import React from "react";
import {
  HStack,
  IconButton,
  Button,
  Spacer,
  Divider,
  Heading,
  VStack,
  Text,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";

export default function SimpleLogin() {
  return (
    <VStack spacing="3rem" w="100%" maxW="lg">
      {/* Info Section */}
      <HStack spacing="1rem">
        <IconButton
          color="purple.600"
          fontSize="1.5rem"
          icon={<FaHamburger />}
        />
        <Heading size="xl">Dine</Heading>
      </HStack>
      <VStack>
        <Heading>Login to your account</Heading>
        <HStack>
          <Text>Or</Text>
          <Text color="purple.600">create an account</Text>
        </HStack>
      </VStack>

      {/* Form Section */}
      <VStack
        w="100%"
        bg="white"
        spacing="2rem"
        p="2rem"
        shadow="md"
        borderRadius=".5rem"
      >
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Email</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button w="100%" colorScheme="purple">
          Sign In
        </Button>
        <HStack w="100%" spacing="2rem" justify="center">
          <Text fontWeight="500" color={"blackAlpha.700"}>
            or continue with
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
