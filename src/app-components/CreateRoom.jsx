import React from "react";
import {
  VStack,
  Heading,
  Text,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

export default function CreateRoom() {
  return (
    <VStack>
      {/* Info Section */}
      <VStack>
        <Heading>Find food with ease</Heading>
        <Text>
          Enter parameters to filter local restaurants, create the room, then
          invite friends to play with the code provided.
        </Text>
      </VStack>

      {/* Input Section */}
      <form>
        <VStack>
          <FormControl id="zip">
            <FormLabel>Zip Code</FormLabel>
            <Input type="number" />
          </FormControl>
        </VStack>
      </form>
    </VStack>
  );
}
