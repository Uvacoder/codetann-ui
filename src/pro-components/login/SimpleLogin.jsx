import React from "react";
import { Link, useHistory } from "react-router-dom";
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
import { FaHamburger, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";

export default function SimpleLogin() {
  const history = useHistory();
  const handleLogin = () => history.push("/dashboard");
  const handleSignup = () => history.push("/signup");

  return (
    <VStack spacing="3rem" w="100%" maxW="lg">
      {/* Info Section */}
      <HStack spacing="1rem">
        <IconButton
          color="purple.600"
          fontSize="1.5rem"
          icon={<FaHamburger />}
        />
        <Heading size="xl">Food</Heading>
      </HStack>
      <VStack>
        <Heading>Login to your account</Heading>
        <HStack spacing=".4rem">
          <Text>or</Text>
          <Text color="purple.600" cursor="pointer" onClick={handleSignup}>
            create an account
          </Text>
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
          <FormLabel>Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Button onClick={handleLogin} w="100%" colorScheme="purple">
          Sign In
        </Button>
        <HStack w="100%" spacing="2rem" justify="center">
          <Text fontWeight="500" color={"blackAlpha.700"}>
            or continue with
          </Text>
        </HStack>
        <HStack>
          <IconButton color="#1877f2" icon={<FaFacebook />} />
          <IconButton color="#ea4335" icon={<FaGoogle />} />
          <IconButton color="#1da1f2" icon={<FaTwitter />} />
        </HStack>
      </VStack>
    </VStack>
  );
}
