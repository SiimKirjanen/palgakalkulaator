import { SET_CALCULATOR_SALARY } from "@/constants";
import {
  Action,
  SalaryCalculatorState,
} from "@/providers/SalaryContextProvider";

const reducer = (
  state: SalaryCalculatorState,
  action: Action
): SalaryCalculatorState => {
  switch (action.type) {
    case SET_CALCULATOR_SALARY: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export { reducer };
