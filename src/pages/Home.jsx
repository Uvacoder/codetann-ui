import React from "react";
import { VStack } from "@chakra-ui/layout";
// components
import CtaSimpleJustified from "../pro-components/cta/CtaSimpleJustified";
import HeroCentered from "../pro-components/hero/HeroCentered";
import SimpleTopNav from "../pro-components/navigation/SimpleTopNav";
import SimpleThreeColumn from "../pro-components/features/SimpleThreeColumn";

function Home() {
  return (
    <VStack
      maxW="100vw"
      width="100%"
      minH="100vh"
      p={["2rem 1rem", "2rem 1rem", "2rem 2rem", "2rem 4rem", "2rem 4rem"]}
      spacing="5rem"
    >
      <SimpleTopNav />
      <HeroCentered />
      <SimpleThreeColumn />
      <CtaSimpleJustified />
    </VStack>
  );
}

export default Home;
