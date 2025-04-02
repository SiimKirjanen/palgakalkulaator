import { SalaryCalculator } from "@/components/SalaryCalculator/SalaryCalculator";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center mb-6">
        Palgakalkulaator
      </h1>
      <SalaryCalculator />
    </div>
  );
}
