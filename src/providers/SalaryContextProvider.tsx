"use client";

import {
  SET_EMPLOYEE_UNEMPLOYMENT_INSURANCE,
  SET_EMPLOYER_UNEMPLOYMENT_INSURANCE,
  SET_PENSION_PILLAR,
  SET_SALARY_CALCULATOR_INPUT,
  SET_SALARY_CALCULATOR_INPUT_TYPE,
} from "@/constants";
import { reducer } from "@/reducers/salary-calculator-reducer";
import { pensionPillarType, SalaryType } from "@/types/salary";
import React, { createContext, ReactNode, useReducer } from "react";

type SalaryCalculatorState = {
  salaryInput: string;
  salaryInputType: SalaryType;
  pensionPillar: string;
  employerUnemploymentInsurance: boolean;
  employeeUnemploymentInsurance: boolean;
};

const initialSalaryState: SalaryCalculatorState = {
  salaryInput: "0",
  salaryInputType: SalaryType.GROSS,
  pensionPillar: pensionPillarType.NO_PILLAR,
  employerUnemploymentInsurance: true,
  employeeUnemploymentInsurance: true,
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
      payload: { pensionPillar: pensionPillarType };
    }
  | {
      type: typeof SET_EMPLOYER_UNEMPLOYMENT_INSURANCE;
      payload: { selected: boolean };
    }
  | {
      type: typeof SET_EMPLOYEE_UNEMPLOYMENT_INSURANCE;
      payload: { selected: boolean };
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
