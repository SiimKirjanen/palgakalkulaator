import { useContext } from "react";
import { SalaryType } from "@/types/salary";
import { SalaryInput } from "../SalaryInput/SalaryInput";
import { PensionPillarSelection } from "../PensionPillarSelection/PensionPillarSelection";
import { SalaryCalculatorContext } from "@/providers/SalaryContextProvider";
import { SalaryCheckbox } from "../SalaryCheckbox/SalaryCheckbox";
import {
  EMPLOYEE_UNEMPLOYMENT_INSURAMCE,
  EMPLOYER_UNEMPLOYMENT_INSURAMCE,
  SET_EMPLOYEE_UNEMPLOYMENT_INSURANCE,
  SET_EMPLOYER_UNEMPLOYMENT_INSURANCE,
  SET_SALARY_CALCULATOR_INPUT_TYPE,
} from "@/constants";

export const CalculatorControls = () => {
  const {
    state: {
      salaryInputType,
      employerUnemploymentInsurance,
      employeeUnemploymentInsurance,
    },
    salaryDispatch,
  } = useContext(SalaryCalculatorContext);

  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
        <SalaryCheckbox
          label="Brutopalk"
          id="gross-salary-check"
          checked={salaryInputType === SalaryType.GROSS}
          onCheckedChange={() => {
            salaryDispatch({
              type: SET_SALARY_CALCULATOR_INPUT_TYPE,
              payload: { salaryInputType: SalaryType.GROSS },
            });
          }}
        />
        <SalaryCheckbox
          label="Netopalk"
          id="neto-salary-check"
          checked={salaryInputType === SalaryType.NET}
          onCheckedChange={() => {
            salaryDispatch({
              type: SET_SALARY_CALCULATOR_INPUT_TYPE,
              payload: { salaryInputType: SalaryType.NET },
            });
          }}
        />
        <SalaryCheckbox
          label="Tööandja kulu"
          id="employer-salary-check"
          checked={salaryInputType === SalaryType.EMPLOYERCOST}
          onCheckedChange={() => {
            salaryDispatch({
              type: SET_SALARY_CALCULATOR_INPUT_TYPE,
              payload: { salaryInputType: SalaryType.EMPLOYERCOST },
            });
          }}
        />
        <SalaryInput />
      </div>
      <h2 className="text-center text-1xl font-semibold mb-3">Lisavalikud</h2>
      <div className="flex flex-col gap-4 justify-center items-center">
        <SalaryCheckbox
          label="Töötuskindlustusmakse 0.8% (Tööandja kulu)"
          id="employer-unemployment-insurance"
          checked={
            employerUnemploymentInsurance === EMPLOYER_UNEMPLOYMENT_INSURAMCE
          }
          onCheckedChange={(checked) => {
            salaryDispatch({
              type: SET_EMPLOYER_UNEMPLOYMENT_INSURANCE,
              payload: {
                selected: checked ? EMPLOYER_UNEMPLOYMENT_INSURAMCE : 0,
              },
            });
          }}
        />
        <SalaryCheckbox
          label="Töötuskindlustusmakse 1.6% (Töötaja kulu)"
          id="employee-unemployment-insurance"
          checked={
            employeeUnemploymentInsurance === EMPLOYEE_UNEMPLOYMENT_INSURAMCE
          }
          onCheckedChange={(checked) => {
            salaryDispatch({
              type: SET_EMPLOYEE_UNEMPLOYMENT_INSURANCE,
              payload: {
                selected: checked ? EMPLOYEE_UNEMPLOYMENT_INSURAMCE : 0,
              },
            });
          }}
        />
        <PensionPillarSelection />
      </div>
    </div>
  );
};
