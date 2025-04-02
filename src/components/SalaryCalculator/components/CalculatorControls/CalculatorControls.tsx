import { useContext } from "react";
import { SalaryCalculatorContext } from "@/providers/SalaryContextProvider";
import { SalaryType } from "@/types/salary";
import {
  SALARY_INPUT_REGEX,
  SET_SALARY_CALCULATOR_INPUT,
  SET_SALARY_CALCULATOR_INPUT_TYPE,
} from "@/constants";
import { SalaryTypeCheckbox } from "../SalaryTypeCheckbox/SalaryTypeCheckBox";
import { SalaryInput } from "../SalaryInput/SalaryInput";

export const CalculatorControls = () => {
  const {
    state: { salaryInputType, salaryInput },
    salaryDispatch,
  } = useContext(SalaryCalculatorContext);

  const handleSalaryTypeChange = (type: SalaryType) => {
    salaryDispatch({
      type: SET_SALARY_CALCULATOR_INPUT_TYPE,
      payload: { salaryInputType: type },
    });
  };

  const handleSalaryInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (!SALARY_INPUT_REGEX.test(value)) {
      return; // Ignore invalid input
    }

    salaryDispatch({
      type: SET_SALARY_CALCULATOR_INPUT,
      payload: { salaryInput: value },
    });
  };

  return (
    <div className="flex gap-4">
      <SalaryTypeCheckbox
        label="Employer Cost"
        salaryType={SalaryType.EMPLOYERCOST}
        currentType={salaryInputType}
        onChange={handleSalaryTypeChange}
      />
      <SalaryTypeCheckbox
        label="Gross"
        salaryType={SalaryType.GROSS}
        currentType={salaryInputType}
        onChange={handleSalaryTypeChange}
      />
      <SalaryTypeCheckbox
        label="Net"
        salaryType={SalaryType.NET}
        currentType={salaryInputType}
        onChange={handleSalaryTypeChange}
      />
      <SalaryInput
        salaryInput={salaryInput}
        handleSalaryInputChange={handleSalaryInputChange}
      />
    </div>
  );
};
