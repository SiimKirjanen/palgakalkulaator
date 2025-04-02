import { calculateNetFromGross } from "@/lib/salary";
import { SalaryCalculatorContext } from "@/providers/SalaryContextProvider";
import { useContext } from "react";

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

  const netSalary = calculateNetFromGross(
    salaryInputNumber,
    employerUnemploymentInsurance,
    pensionPillarNumber
  );

  return {
    netSalary,
  };
};
