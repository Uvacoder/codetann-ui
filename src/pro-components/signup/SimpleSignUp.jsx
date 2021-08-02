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

export default function SimpleSignUp() {
  const history = useHistory();
  const handleSignup = () => history.push("/dashboard");
  const handleLogin = () => history.push("/login");

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
        <Heading textAlign="center">Sign up for a free account</Heading>
        <HStack spacing=".4rem">
          <Text>already have an account?</Text>
          <Text cursor="pointer" color="purple.600" onClick={handleLogin}>
            Login
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
        <Text>Create an account</Text>
        <VStack w="100%">
          <Button w="100%">
            <FaFacebook color="#1877f2" style={{ marginRight: "1rem" }} />
            Continue with Facebook
          </Button>
          <Button w="100%">
            <FaGoogle color="#ea4335" style={{ marginRight: "1rem" }} />{" "}
            Continue with Google
          </Button>
          <Button w="100%">
            <FaTwitter color="#1da1f2" style={{ marginRight: "1rem" }} />{" "}
            Continue with Twitter
          </Button>
          {/* <IconButton color="#1877f2" icon={<FaFacebook />} />
          <IconButton color="#ea4335" icon={<FaGoogle />} />
          <IconButton color="#1da1f2" icon={<FaTwitter />} /> */}
        </VStack>
        <Text>or continue with email</Text>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>

        <Button onClick={handleSignup} w="100%" colorScheme="purple">
          Continue
        </Button>
      </VStack>
    </VStack>
  );
}
