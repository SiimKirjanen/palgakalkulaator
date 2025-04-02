import { Checkbox } from "@/components/ui/checkbox";
import { SET_SALARY_CALCULATOR_INPUT_TYPE } from "@/constants";
import { SalaryCalculatorContext } from "@/providers/SalaryContextProvider";
import { SalaryType } from "@/types/salary";
import { useContext } from "react";

type Props = {
  label: string;
  salaryType: SalaryType;
};
export const SalaryTypeCheckbox = ({ label, salaryType }: Props) => {
  const {
    state: { salaryInputType: selectedSalaryInputType },
    salaryDispatch,
  } = useContext(SalaryCalculatorContext);
  const checkBoxId = `salary-type-${salaryType}`;

  const handleSalaryTypeChange = () => {
    salaryDispatch({
      type: SET_SALARY_CALCULATOR_INPUT_TYPE,
      payload: { salaryInputType: salaryType },
    });
  };

  return (
    <div className="flex items-center gap-2 justify-center">
      <label
        className="text-sm font-medium text-gray-700 cursor-pointer"
        htmlFor={checkBoxId}
      >
        {label}
      </label>
      <Checkbox
        checked={selectedSalaryInputType === salaryType}
        onCheckedChange={handleSalaryTypeChange}
        id={checkBoxId}
        className="cursor-pointer"
      />
    </div>
  );
};
