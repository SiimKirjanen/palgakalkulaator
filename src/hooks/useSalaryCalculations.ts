import { useContext } from "react";
import { calculateSalaries } from "@/lib/salary";
import { SalaryCalculatorContext } from "@/providers/SalaryContextProvider";

export const useSalaryCalculations = () => {
  const {
    state: {
      salaryInput,
      salaryInputType,
      pensionPillar,
      employerUnemploymentInsurance,
      employeeUnemploymentInsurance,
    },
  } = useContext(SalaryCalculatorContext);

  const salaryInputNumber = parseFloat(salaryInput);

  const { netSalary, grossSalary, employerCost } = calculateSalaries({
    salaryInput: salaryInputNumber,
    salaryInputType,
    pensionPillar,
    employerUnemploymentInsurance,
    employeeUnemploymentInsurance,
  });

  return {
    netSalary,
    grossSalary,
    employerCost,
  };
};
