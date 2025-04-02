"use client";

import { CalculatorControls } from "./components/CalculatorControls/CalculatorControls";
import { CalculatorResults } from "./components/CalculatorResults/CalculatorResults";

export const SalaryCalculator = () => {
  return (
    <div>
      <CalculatorControls />
      <CalculatorResults />
    </div>
  );
};
