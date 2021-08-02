import React, { useState } from "react";
import BasicTabs from "../pro-components/tabs/BasicTabs";

export default function Start() {
  const [activeTab, setActiveTab] = useState("create");
  return (
    <div>
      <BasicTabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
