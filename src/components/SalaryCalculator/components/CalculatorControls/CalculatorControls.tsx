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

  const handleSalaryInputChange = (input: string) => {
    if (!SALARY_INPUT_REGEX.test(input)) {
      return; // Ignore invalid input
    }

    salaryDispatch({
      type: SET_SALARY_CALCULATOR_INPUT,
      payload: { salaryInput: input },
    });
  };

  return (
    <div className="flex gap-4 justify-center">
      <SalaryTypeCheckbox
        label="Tööandja kulu"
        salaryType={SalaryType.EMPLOYERCOST}
        currentType={salaryInputType}
        onChange={handleSalaryTypeChange}
      />
      <SalaryTypeCheckbox
        label="Brutopalk"
        salaryType={SalaryType.GROSS}
        currentType={salaryInputType}
        onChange={handleSalaryTypeChange}
      />
      <SalaryTypeCheckbox
        label="Netopalk"
        salaryType={SalaryType.NET}
        currentType={salaryInputType}
        onChange={handleSalaryTypeChange}
      />
      <SalaryInput
        salaryInput={salaryInput}
        handleSalaryInputChange={handleSalaryInputChange}
        className="w-32"
      />
    </div>
  );
};
