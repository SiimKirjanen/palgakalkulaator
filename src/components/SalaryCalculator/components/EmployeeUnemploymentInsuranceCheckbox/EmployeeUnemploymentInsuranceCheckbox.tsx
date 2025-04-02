import { Checkbox } from "@/components/ui/checkbox";
import { SET_EMPLOYEE_UNEMPLOYMENT_INSURANCE } from "@/constants";
import { SalaryCalculatorContext } from "@/providers/SalaryContextProvider";
import { useContext } from "react";

export const EmployeeUnemploymentInsuranceCheckbox = () => {
  const {
    state: { employeeUnemploymentInsurance },
    salaryDispatch,
  } = useContext(SalaryCalculatorContext);
  const checkBoxId = "employee-unemployment-insurance";

  const handleCheckedChange = (checked: boolean) => {
    salaryDispatch({
      type: SET_EMPLOYEE_UNEMPLOYMENT_INSURANCE,
      payload: { selected: checked },
    });
  };

  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      <label
        className="text-sm font-medium text-gray-700 cursor-pointer"
        htmlFor={checkBoxId}
      >
        Töötuskindlustusmakse 1.6% (Töötaja kulu)
      </label>
      <Checkbox
        checked={employeeUnemploymentInsurance}
        onCheckedChange={handleCheckedChange}
        id={checkBoxId}
        className="cursor-pointer"
      />
    </div>
  );
};
