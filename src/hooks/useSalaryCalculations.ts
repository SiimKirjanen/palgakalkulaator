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
  const pensionPillarNumber = parseFloat(pensionPillar);

  const { netSalary, grossSalary, employerCost } = calculateSalaries({
    salaryInput: salaryInputNumber,
    salaryInputType,
    pensionPillar: pensionPillarNumber,
    employerUnemploymentInsurance,
    employeeUnemploymentInsurance,
  });

  return {
    netSalary,
    grossSalary,
    employerCost,
  };
};
