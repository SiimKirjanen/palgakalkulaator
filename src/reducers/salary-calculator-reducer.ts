import {
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
    default:
      return state;
  }
};

export { reducer };
