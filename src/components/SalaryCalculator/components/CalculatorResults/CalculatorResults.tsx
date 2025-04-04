import { useSalaryCalculations } from "@/hooks/useSalaryCalculations";

export const CalculatorResults = () => {
  const { netSalary, grossSalary, employerCost } = useSalaryCalculations();

  return (
    <div className="flex flex-col gap-4 justify-center items-center mb-7">
      <ResultBox title="Bruto" value={grossSalary} />
      <ResultBox title="Neto" value={netSalary} />
      <ResultBox title="Tööandja kulu" value={employerCost} />
    </div>
  );
};

type ResultBoxProps = {
  title: string;
  value: number;
};
const ResultBox = ({ title, value }: ResultBoxProps) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-2xl">{title}</h3>
      <div>
        {value} <span className="text-gray-700">€</span>
      </div>
    </div>
  );
};
