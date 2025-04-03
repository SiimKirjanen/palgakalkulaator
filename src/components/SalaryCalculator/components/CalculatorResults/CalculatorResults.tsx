import { useSalaryCalculations } from "@/hooks/useSalaryCalculations";

export const CalculatorResults = () => {
  const { netSalary, grossSalary, employerCost } = useSalaryCalculations();

  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h2 className="text-1xl font-semibold text-center ">Tulemus</h2>
      <div>Bruto {grossSalary}</div>
      <div>Neto: {netSalary}</div>
      <div>Tööandja: {employerCost}</div>
    </div>
  );
};
