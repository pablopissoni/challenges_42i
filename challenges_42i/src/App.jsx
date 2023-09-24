import React from "react";
import { NonConstructibleChange } from "./components/NonConstructibleChange";
import { SmallestDiference } from "./components/SmallestDiference";

export const App = () => {
  return (
    <div className="bg-gray-600 h-screen flex">
      <NonConstructibleChange/>
      <SmallestDiference/>
    </div>
  );
};
