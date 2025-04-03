import {
  EMPLOYEE_UNEMPLOYMENT_INSURAMCE,
  EMPLOYER_UNEMPLOYMENT_INSURAMCE,
} from "@/constants";
import {
  calculateEmployerCostFromGross,
  calculateGrossFromEmployerCost,
  calculateNetFromEmployerCost,
  calculateNetFromGross,
  calculatGrossFromNet,
  roundToTwoDecimals,
} from "./salary";

describe("calculateNetFromGross", () => {
  it("should calculate the net salary correctly with pension pillar and unenployment insurance", () => {
    const grossSalary = 2000;
    const employeeUnemploymentInsurance = EMPLOYEE_UNEMPLOYMENT_INSURAMCE;
    const pensionPillar = 0.02;

    const netSalary = calculateNetFromGross(
      grossSalary,
      employeeUnemploymentInsurance,
      pensionPillar
    );

    expect(netSalary).toBe(1503.84);
  });

  it("should calculate the net salary correctly without pension pillar", () => {
    const grossSalary = 2000;
    const employeeUnemploymentInsurance = EMPLOYEE_UNEMPLOYMENT_INSURAMCE;
    const pensionPillar = 0;

    const netSalary = calculateNetFromGross(
      grossSalary,
      employeeUnemploymentInsurance,
      pensionPillar
    );

    expect(netSalary).toBe(1535.04);
  });

  it("should calculate the net salary correctly without unenployment insurance", () => {
    const grossSalary = 2000;
    const employeeUnemploymentInsurance = 0;
    const pensionPillar = 0.02;

    const netSalary = calculateNetFromGross(
      grossSalary,
      employeeUnemploymentInsurance,
      pensionPillar
    );

    expect(netSalary).toBe(1528.8);
  });
});

describe("calculateEmployerCostFromGross", () => {
  it("should calculate the employer cost correctly", () => {
    const employerCost = calculateEmployerCostFromGross(
      2000,
      EMPLOYER_UNEMPLOYMENT_INSURAMCE
    );

    expect(employerCost).toBe(2676);
  });

  it("should calculate the employer cost correctly without unemployment insurance", () => {
    const employerCost = calculateEmployerCostFromGross(2000, 0);

    expect(employerCost).toBe(2660);
  });
});

describe("calculateGrossFromEmployerCost", () => {
  it("should calculate the gross salary correctly with unemployment insurance", () => {
    const grossSalary = calculateGrossFromEmployerCost(
      2676,
      EMPLOYER_UNEMPLOYMENT_INSURAMCE
    );

    expect(grossSalary).toBe(2000);
  });

  it("should calculate the gross salary correctly without unemployment insurance", () => {
    const grossSalary = calculateGrossFromEmployerCost(2676, 0);

    expect(grossSalary).toBe(2012.03);
  });
});

describe("calculateNetFromEmployerCost", () => {
  it("should calculate the net salary correctly with employer cost and pension pillar", () => {
    const netSalary = calculateNetFromEmployerCost(
      2676,
      EMPLOYER_UNEMPLOYMENT_INSURAMCE,
      EMPLOYEE_UNEMPLOYMENT_INSURAMCE,
      0.02
    );

    expect(netSalary).toBe(1503.84);
  });

  it("should calculate the net salary correctly without pension pillar", () => {
    const netSalary = calculateNetFromEmployerCost(
      2676,
      EMPLOYER_UNEMPLOYMENT_INSURAMCE,
      EMPLOYEE_UNEMPLOYMENT_INSURAMCE,
      0
    );

    expect(netSalary).toBe(1535.04);
  });

  it("should calculate the net salary correctly without employer unemployment insurance", () => {
    const netSalary = calculateNetFromEmployerCost(
      2676,
      0,
      EMPLOYEE_UNEMPLOYMENT_INSURAMCE,
      0.02
    );

    expect(netSalary).toBe(1512.89);
  });

  it("should calculate the net salary correctly without employee unemployment insurance", () => {
    const netSalary = calculateNetFromEmployerCost(
      2676,
      EMPLOYER_UNEMPLOYMENT_INSURAMCE,
      0,
      0.02
    );

    expect(netSalary).toBe(1528.8);
  });
});

describe("calculatGrossFromNet", () => {
  it("should calculate the gross salary correctly with pension pillar and unemployment insurance", () => {
    const grossSalary = calculatGrossFromNet(
      1528.8,
      EMPLOYEE_UNEMPLOYMENT_INSURAMCE,
      0.02
    );
    expect(grossSalary).toBeCloseTo(2033.2);
  });

  it("should calculate the gross salary correctly without pension pillar", () => {
    const grossSalary = calculatGrossFromNet(
      1528.8,
      EMPLOYEE_UNEMPLOYMENT_INSURAMCE,
      0
    );

    expect(grossSalary).toBe(1991.87);
  });

  it("should calculate the gross salary correctly without unemployment insurance", () => {
    const netSalary = 1528.8;
    const employeeUnemploymentInsurance = 0;
    const pensionPillar = 0.02;

    const grossSalary = calculatGrossFromNet(
      netSalary,
      employeeUnemploymentInsurance,
      pensionPillar
    );

    expect(grossSalary).toBe(2000);
  });
});

describe("roundToTwoDecimals", () => {
  it("should round up when the value is 1999.99", () => {
    expect(roundToTwoDecimals(1999.99)).toBe(1999.99);
  });

  it("should round up when the value is 1999.995", () => {
    expect(roundToTwoDecimals(1999.995)).toBe(2000);
  });

  it("should round down when the value is 2033.194", () => {
    expect(roundToTwoDecimals(2033.194)).toBe(2033.19);
  });

  it("should round up when the value is 2033.195", () => {
    expect(roundToTwoDecimals(2033.195)).toBe(2033.2);
  });

  it("should return the same value for integers", () => {
    expect(roundToTwoDecimals(2000)).toBe(2000);
  });
});
