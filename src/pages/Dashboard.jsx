import React from "react";
import { VStack, useBreakpointValue } from "@chakra-ui/react";
// components
import MobileNav from "../pro-components/navigation/MobileNav";
import DesktopNav from "../pro-components/navigation/DesktopNav";
import Start from "./Start";

function Dashboard() {
  const Nav = useBreakpointValue({ base: <MobileNav />, md: <DesktopNav /> });
  return (
    <VStack
      maxW="100vw"
      width="100%"
      minH="100vh"
      align="center"
      justify="flex-start"
      bg="gray.50"
      spacing="6rem"
      p={["1rem 1rem", "2rem 1rem", "2rem 2rem", "2rem 4rem", "2rem 4rem"]}
    >
      {Nav}
      <Start />
    </VStack>
  );
}

export default Dashboard;
