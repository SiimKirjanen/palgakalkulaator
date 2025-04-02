import React, { useContext } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { SalaryCalculatorContext } from "@/providers/SalaryContextProvider";

export const CalculatorControls = () => {
  const { state } = useContext(SalaryCalculatorContext);

  return (
    <div className="flex gap-4">
      <Checkbox />
      <Checkbox />
      <Checkbox />
      <Input />
    </div>
  );
};
