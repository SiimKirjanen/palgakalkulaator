import { EMPLOYEE_UNEMPLOYMENT_INSURAMCE, INCOME_TAX } from "@/constants";
import { pensionPillarType } from "@/types/salary";

const calculatGrossFromNet = (netSalary: number) => {};

const calculateEmployerCostFromGross = (grossSalary: number) => {};

const calculateNetFromGross = (
  grossSalary: number,
  applyEmployerUnemploymentInsurance: boolean,
  pensionPillar: number
) => {
  const employerUnemploymentInsuranceTax = applyEmployerUnemploymentInsurance
    ? grossSalary * EMPLOYEE_UNEMPLOYMENT_INSURAMCE
    : 0;
  const pensionTax = pensionPillar ? grossSalary * pensionPillar : 0;

  const taxableAmount =
    grossSalary - employerUnemploymentInsuranceTax - pensionTax;
  const incomeTax = taxableAmount * INCOME_TAX;

  return (
    grossSalary - employerUnemploymentInsuranceTax - pensionTax - incomeTax
  );
};

export {
  calculatGrossFromNet,
  calculateNetFromGross,
  calculateEmployerCostFromGross,
};
