"use client";

import { SET_CALCULATOR_SALARY } from "@/constants";
import { reducer } from "@/reducers/salary-calculator-reducer";
import React, { createContext, ReactNode, useReducer } from "react";

type SalaryCalculatorState = {
  siteURL: string;
};

const initialSalaryState: SalaryCalculatorState = {
  siteURL: "",
};

type Action = {
  type: typeof SET_CALCULATOR_SALARY;
  payload: { siteURL: string };
};

type Dispatch = (action: Action) => void;

type SalaryCalculatorContextType = {
  state: SalaryCalculatorState;
  salaryDispatch: Dispatch;
};

const SalaryCalculatorContext = createContext<SalaryCalculatorContextType>({
  state: initialSalaryState,
  salaryDispatch: () => {},
});

export const SalaryCalculatorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, salaryDispatch] = useReducer(reducer, initialSalaryState);

  return (
    <SalaryCalculatorContext.Provider value={{ state, salaryDispatch }}>
      {children}
    </SalaryCalculatorContext.Provider>
  );
};

export {
  SalaryCalculatorContext,
  type SalaryCalculatorState,
  type Action,
  type Dispatch,
};
