"use client";

import { CalculatorControls } from "./components/CalculatorControls/CalculatorControls";
import { CalculatorResults } from "./components/CalculatorResults/CalculatorResults";

export const SalaryCalculator = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Palgakalkulaator</h1>
      <CalculatorControls />
      <CalculatorResults />
    </div>
  );
};
