import { INCOME_TAX, SOCIAL_TAX } from "@/constants";
import { SalaryType } from "@/types/salary";

const calculatGrossFromNet = (
  netSalary: number,
  employeeUnemploymentInsurance: number,
  pensionPillar: number
) => {
  const grossSalary = roundToTwoDecimals(
    netSalary /
      (1 -
        INCOME_TAX -
        pensionPillar * (1 - INCOME_TAX) -
        employeeUnemploymentInsurance * (1 - INCOME_TAX))
  );

  return grossSalary;
};

const calculateEmployerCostFromNet = (
  netSalary: number,
  employeeUnemploymentInsurance: number,
  pensionPillar: number,
  employerUnemploymentInsurance: number
) => {
  const grossSalary = calculatGrossFromNet(
    netSalary,
    employeeUnemploymentInsurance,
    pensionPillar
  );
  const socialTaxSum = grossSalary * SOCIAL_TAX;
  const employerUnemploymentInsuranceSum =
    grossSalary * employerUnemploymentInsurance;

  return roundToTwoDecimals(
    grossSalary + socialTaxSum + employerUnemploymentInsuranceSum
  );
};

const calculateNetFromEmployerCost = (
  employerCost: number,
  employerUnemploymentInsurance: number,
  employeeUnemploymentInsurance: number,
  pensionPillar: number
) => {
  const grossSlarary = calculateGrossFromEmployerCost(
    employerCost,
    employerUnemploymentInsurance
  );
  return calculateNetFromGross(
    grossSlarary,
    employeeUnemploymentInsurance,
    pensionPillar
  );
};

const calculateGrossFromEmployerCost = (
  employerCost: number,
  employerUnemploymentInsurance: number
) => {
  return roundToTwoDecimals(
    employerCost / (1 + SOCIAL_TAX + employerUnemploymentInsurance)
  );
};

const calculateNetFromGross = (
  grossSalary: number,
  employeeUnemploymentInsurance: number,
  pensionPillar: number
) => {
  const pensionTaxSum = grossSalary * pensionPillar;
  const employeeUnemploymentInsuranceSum =
    grossSalary * employeeUnemploymentInsurance;
  const taxableAmount =
    grossSalary - employeeUnemploymentInsuranceSum - pensionTaxSum;
  const incomeTaxSum = taxableAmount * INCOME_TAX;
  const netSalary =
    grossSalary -
    employeeUnemploymentInsuranceSum -
    pensionTaxSum -
    incomeTaxSum;

  return roundToTwoDecimals(netSalary);
};

const calculateEmployerCostFromGross = (
  grossSalary: number,
  employerUnemploymentInsurance: number
) => {
  const socialTaxSum = grossSalary * SOCIAL_TAX;
  const employerUnemploymentInsuranceSum =
    grossSalary * employerUnemploymentInsurance;

  return grossSalary + socialTaxSum + employerUnemploymentInsuranceSum;
};

type SalaryCalculationParams = {
  salaryInput: number;
  salaryInputType: SalaryType;
  pensionPillar: number;
  employerUnemploymentInsurance: number;
  employeeUnemploymentInsurance: number;
};

const calculateSalaries = ({
  salaryInput,
  salaryInputType,
  pensionPillar,
  employerUnemploymentInsurance,
  employeeUnemploymentInsurance,
}: SalaryCalculationParams) => {
  switch (salaryInputType) {
    case SalaryType.GROSS: {
      return {
        netSalary: calculateNetFromGross(
          salaryInput,
          employeeUnemploymentInsurance,
          pensionPillar
        ),
        grossSalary: salaryInput,
        employerCost: calculateEmployerCostFromGross(
          salaryInput,
          employerUnemploymentInsurance
        ),
      };
    }
    case SalaryType.NET: {
      return {
        netSalary: salaryInput,
        grossSalary: calculatGrossFromNet(
          salaryInput,
          employeeUnemploymentInsurance,
          pensionPillar
        ),
        employerCost: calculateEmployerCostFromNet(
          salaryInput,
          employeeUnemploymentInsurance,
          pensionPillar,
          employerUnemploymentInsurance
        ),
      };
    }
    case SalaryType.EMPLOYERCOST: {
      return {
        netSalary: calculateNetFromEmployerCost(
          salaryInput,
          employerUnemploymentInsurance,
          employeeUnemploymentInsurance,
          pensionPillar
        ),
        grossSalary: calculateGrossFromEmployerCost(
          salaryInput,
          employerUnemploymentInsurance
        ),
        employerCost: salaryInput,
      };
    }
    default: {
      throw new Error("Invalid salary input type");
    }
  }
};

const roundToTwoDecimals = (value: number): number => {
  return Math.round(value * 100) / 100;
};

export {
  calculatGrossFromNet,
  calculateNetFromGross,
  calculateEmployerCostFromGross,
  calculateNetFromEmployerCost,
  calculateSalaries,
  calculateGrossFromEmployerCost,
  roundToTwoDecimals,
};
