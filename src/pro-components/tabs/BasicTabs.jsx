import React from "react";
import { Button, HStack } from "@chakra-ui/react";

export default function BasicTabs({ activeTab, setActiveTab }) {
  const handleActiveTab = (e) => setActiveTab(e.target.id);

  return (
    <HStack spacing="0" shadow="md" borderRadius=".5rem">
      <Button
        id="create"
        _focus={{ outline: "none" }}
        _hover={{ opacity: ".8" }}
        onClick={handleActiveTab}
        borderRight="1px solid"
        borderRightColor="blackAlpha.200"
        borderRadius=".5rem 0 0 .5rem"
        borderBottom={activeTab === "create" ? "2px solid" : "none"}
        borderBottomColor={activeTab === "create" ? "purple.500" : "none"}
        bg={activeTab === "create" ? "white" : "blackAlpha.100"}
      >
        Create room
      </Button>
      <Button
        id="join"
        _hover={{ opacity: ".8" }}
        _focus={{ outline: "none" }}
        onClick={handleActiveTab}
        borderBottom={activeTab === "join" ? "2px solid" : "none"}
        borderBottomColor={activeTab === "join" ? "purple.500" : "none"}
        bg={activeTab === "join" ? "white" : "blackAlpha.50"}
        borderRadius="0 .5rem .5rem 0"
      >
        Join friends
      </Button>
    </HStack>
  );
}
