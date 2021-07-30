import React from "react";
import { VStack } from "@chakra-ui/layout";
// components

import SimpleLogin from "../pro-components/login/SimpleLogin";

function Login() {
  return (
    <VStack
      maxW="100vw"
      width="100%"
      minH="100vh"
      align="center"
      justify="center"
      bg="gray.50"
      p={["2rem 1rem", "2rem 1rem", "2rem 2rem", "2rem 6rem", "2rem 8rem"]}
    >
      <SimpleLogin />
    </VStack>
  );
}

export default Login;
