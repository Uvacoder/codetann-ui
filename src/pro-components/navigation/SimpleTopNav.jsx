import React from "react";
import { Link, useHistory } from "react-router-dom";
import { HStack, IconButton, Button, Spacer, Heading } from "@chakra-ui/react";
import { FaHamburger } from "react-icons/fa";

export default function SimpleTopNav() {
  const history = useHistory();
  const handleLogin = () => history.push("/login");
  return (
    <HStack w="100%">
      <HStack spacing="1rem">
        <IconButton
          color="purple.600"
          fontSize="1.5rem"
          icon={<FaHamburger />}
        />
        <Heading size="xl">Food</Heading>
      </HStack>

      <Spacer />
      <HStack spacing="1rem">
        <Button colorScheme="purple">Sign up</Button>
        <Button onClick={handleLogin} variant="outline" colorScheme="purple">
          Login
        </Button>
      </HStack>
    </HStack>
  );
}
