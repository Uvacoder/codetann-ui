import React from "react";
import { VStack } from "@chakra-ui/layout";
// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
function App() {
  return (
    <VStack maxW="100vw" width="100%" minH="100vh">
      <Home />
    </VStack>
  );
}

export default App;
