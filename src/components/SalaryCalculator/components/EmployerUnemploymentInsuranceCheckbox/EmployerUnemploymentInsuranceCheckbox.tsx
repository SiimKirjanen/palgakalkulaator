import { Checkbox } from "@/components/ui/checkbox";
import { SET_EMPLOYER_UNEMPLOYMENT_INSURANCE } from "@/constants";
import { SalaryCalculatorContext } from "@/providers/SalaryContextProvider";
import { useContext } from "react";

export const EmployerUnemploymentInsuranceCheckbox = () => {
  const {
    state: { employerUnemploymentInsurance },
    salaryDispatch,
  } = useContext(SalaryCalculatorContext);
  const checkBoxId = "employer-unemployment-insurance";

  const handleCheckedChange = (checked: boolean) => {
    salaryDispatch({
      type: SET_EMPLOYER_UNEMPLOYMENT_INSURANCE,
      payload: { selected: checked },
    });
  };

  return (
    <div className="flex items-center gap-2 justify-center">
      <label
        className="text-sm font-medium text-gray-700 cursor-pointer"
        htmlFor={checkBoxId}
      >
        Töötuskindlustusmakse 0.8% (Tööandja kulu)
      </label>
      <Checkbox
        checked={employerUnemploymentInsurance}
        onCheckedChange={handleCheckedChange}
        id={checkBoxId}
        className="cursor-pointer"
      />
    </div>
  );
};
