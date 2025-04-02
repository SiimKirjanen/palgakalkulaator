import {
  SET_EMPLOYEE_UNEMPLOYMENT_INSURANCE,
  SET_EMPLOYER_UNEMPLOYMENT_INSURANCE,
  SET_PENSION_PILLAR,
  SET_SALARY_CALCULATOR_INPUT,
  SET_SALARY_CALCULATOR_INPUT_TYPE,
} from "@/constants";
import {
  Action,
  SalaryCalculatorState,
} from "@/providers/SalaryContextProvider";

const reducer = (
  state: SalaryCalculatorState,
  action: Action
): SalaryCalculatorState => {
  switch (action.type) {
    case SET_SALARY_CALCULATOR_INPUT: {
      return {
        ...state,
        salaryInput: action.payload.salaryInput,
      };
    }
    case SET_SALARY_CALCULATOR_INPUT_TYPE: {
      return {
        ...state,
        salaryInputType: action.payload.salaryInputType,
      };
    }
    case SET_PENSION_PILLAR: {
      return {
        ...state,
        pensionPillar: action.payload.pensionPillar,
      };
    }
    case SET_EMPLOYER_UNEMPLOYMENT_INSURANCE: {
      return {
        ...state,
        employerUnemploymentInsurance: action.payload.selected,
      };
    }
    case SET_EMPLOYEE_UNEMPLOYMENT_INSURANCE: {
      return {
        ...state,
        employeeUnemploymentInsurance: action.payload.selected,
      };
    }
    default:
      return state;
  }
};

export { reducer };
