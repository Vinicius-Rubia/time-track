import React from "react";
import { ModeToggle } from "./mode-toggle";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between mb-2.5 h-10 px-7">
      <h1 className="font-semibold text-2xl text-white">Olá, André</h1>
      <ModeToggle />
    </div>
  );
};
