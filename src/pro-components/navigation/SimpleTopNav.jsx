import React from "react";
import { HStack, IconButton, Button, Spacer, Heading } from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";

export default function SimpleTopNav() {
  return (
    <HStack w="100%">
      <HStack spacing="1rem">
        <IconButton
          color="purple.600"
          fontSize="1.5rem"
          icon={<FaHamburger />}
        />
        <Heading size="xl">Dine</Heading>
      </HStack>

      <Spacer />
      <HStack spacing="1rem">
        <Button colorScheme="purple">Sign up</Button>
        <Button variant="outline" colorScheme="purple">
          Login
        </Button>
      </HStack>
    </HStack>
  );
}
