import { Input } from "@/components/ui/input";
import { SALARY_INPUT_REGEX, SET_SALARY_CALCULATOR_INPUT } from "@/constants";
import { SalaryCalculatorContext } from "@/providers/SalaryContextProvider";
import { useContext } from "react";

export const SalaryInput = () => {
  const {
    salaryDispatch,
    state: { salaryInput },
  } = useContext(SalaryCalculatorContext);

  const handleFocus = () => {
    if (salaryInput === "0") {
      salaryDispatch({
        type: SET_SALARY_CALCULATOR_INPUT,
        payload: { salaryInput: "" },
      });
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;

    if (!SALARY_INPUT_REGEX.test(input)) {
      return; // Ignore invalid input
    }

    salaryDispatch({
      type: SET_SALARY_CALCULATOR_INPUT,
      payload: { salaryInput: input },
    });
  };
  return (
    <div className="flex items-center gap-1">
      <Input
        value={salaryInput}
        onChange={handleChange}
        onFocus={handleFocus}
        className="w-32"
      />
      <span className="text-gray-700">€</span>
    </div>
  );
};
