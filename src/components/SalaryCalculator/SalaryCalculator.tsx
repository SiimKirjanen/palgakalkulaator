"use client";

import { AISuggestion } from "./components/AISuggestion/AISuggestion";
import { CalculatorControls } from "./components/CalculatorControls/CalculatorControls";
import { CalculatorResults } from "./components/CalculatorResults/CalculatorResults";

export const SalaryCalculator = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mb-6">
        Palgakalkulaator
      </h1>
      <CalculatorControls />
      <CalculatorResults />
      <AISuggestion />
    </div>
  );
};
