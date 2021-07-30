import React from "react";
import { VStack, IconButton, Spacer, Center, Avatar } from "@chakra-ui/react";
import { FaHome, FaCog, FaChartLine } from "react-icons/fa";

export default function SidebarNav() {
  return (
    <VStack
      minH="100vh"
      h="100%"
      bg="purple.600"
      p="1rem 1.5rem"
      spacing="2rem"
      position="fixed"
      left="0"
    >
      <Center h="4rem">icon</Center>
      <IconButton
        size="lg"
        bg="whiteAlpha.100"
        _hover={{ background: "whiteAlpha.400" }}
        color="white"
        icon={<FaHome fontSize="1.5rem" />}
      />
      <IconButton
        bg="whiteAlpha.100"
        _hover={{ background: "whiteAlpha.400" }}
        size="lg"
        color="white"
        icon={<FaChartLine fontSize="1.5rem" />}
      />
      <IconButton
        bg="whiteAlpha.100"
        _hover={{ background: "whiteAlpha.400" }}
        size="lg"
        color="white"
        icon={<FaCog fontSize="1.5rem" />}
      />
      <Spacer />
      <Avatar src="https://images.unsplash.com/photo-1627531732547-e16087354233?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
    </VStack>
  );
}
