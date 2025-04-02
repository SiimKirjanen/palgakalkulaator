"use client";

import {
  SET_SALARY_CALCULATOR_INPUT,
  SET_SALARY_CALCULATOR_INPUT_TYPE,
} from "@/constants";
import { reducer } from "@/reducers/salary-calculator-reducer";
import { SalaryType } from "@/types/salary";
import React, { createContext, ReactNode, useReducer } from "react";

type SalaryCalculatorState = {
  salaryInput: string;
  salaryInputType: SalaryType;
};

const initialSalaryState: SalaryCalculatorState = {
  salaryInput: "0",
  salaryInputType: SalaryType.GROSS,
};

type Action =
  | {
      type: typeof SET_SALARY_CALCULATOR_INPUT;
      payload: { salaryInput: string };
    }
  | {
      type: typeof SET_SALARY_CALCULATOR_INPUT_TYPE;
      payload: { salaryInputType: SalaryType };
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
