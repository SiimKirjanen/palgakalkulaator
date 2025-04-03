"use client";

import React, { createContext, ReactNode, useReducer } from "react";
import {
  SET_EMPLOYEE_UNEMPLOYMENT_INSURANCE,
  SET_EMPLOYER_UNEMPLOYMENT_INSURANCE,
  SET_PENSION_PILLAR,
  SET_SALARY_CALCULATOR_INPUT,
  SET_SALARY_CALCULATOR_INPUT_TYPE,
} from "@/constants";
import { reducer } from "@/reducers/salary-calculator-reducer";
import { SalaryType } from "@/types/salary";

type SalaryCalculatorState = {
  salaryInput: string;
  salaryInputType: SalaryType;
  pensionPillar: number;
  employerUnemploymentInsurance: number;
  employeeUnemploymentInsurance: number;
};

const initialSalaryState: SalaryCalculatorState = {
  salaryInput: "0",
  salaryInputType: SalaryType.GROSS,
  pensionPillar: 0,
  employerUnemploymentInsurance: 0,
  employeeUnemploymentInsurance: 0,
};

type Action =
  | {
      type: typeof SET_SALARY_CALCULATOR_INPUT;
      payload: { salaryInput: string };
    }
  | {
      type: typeof SET_SALARY_CALCULATOR_INPUT_TYPE;
      payload: { salaryInputType: SalaryType };
    }
  | {
      type: typeof SET_PENSION_PILLAR;
      payload: { pensionPillar: number };
    }
  | {
      type: typeof SET_EMPLOYER_UNEMPLOYMENT_INSURANCE;
      payload: { selected: number };
    }
  | {
      type: typeof SET_EMPLOYEE_UNEMPLOYMENT_INSURANCE;
      payload: { selected: number };
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
