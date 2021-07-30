import React from "react";
import {
  Stack,
  Box,
  Button,
  Heading,
  VStack,
  useColorModeValue,
  Text,
  Center,
  Spacer,
} from "@chakra-ui/react";

export default function CtaCentered() {
  // colors
  const direction = ["column", "column", "column", "row"];

  return (
    <Stack
      w="100%"
      spacing="1rem"
      direction={"column"}
      bg="blue.500"
      p="4rem 0"
      borderRadius="md"
    >
      <Stack w="100%" align="center">
        <Heading color="white" textAlign="center">
          Ready to dive in?
        </Heading>
        <Heading color="white" textAlign="center">
          Start your free trial today.
        </Heading>
      </Stack>
      <Spacer />
      <VStack spacing="2rem">
        <Text textAlign="center" maxW="lg" color="white" opacity=".6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          doloribus nobis quibusdam? Odit unde placeat incidunt laudantium
          obcaecati quisquam optio.
        </Text>
        <Button fontSize="md" size="lg">
          Sign Up Today
        </Button>
      </VStack>
    </Stack>
  );
}
