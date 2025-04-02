import { SalaryType } from "@/types/salary";
import { SalaryTypeCheckbox } from "../SalaryTypeCheckbox/SalaryTypeCheckBox";
import { SalaryInput } from "../SalaryInput/SalaryInput";
import { PensionPillarSelection } from "../PensionPillarSelection/PensionPillarSelection";
import { EmployerUnemploymentInsuranceCheckbox } from "../EmployerUnemploymentInsuranceCheckbox/EmployerUnemploymentInsuranceCheckbox";
import { EmployeeUnemploymentInsuranceCheckbox } from "../EmployeeUnemploymentInsuranceCheckbox/EmployeeUnemploymentInsuranceCheckbox";

export const CalculatorControls = () => {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
        <SalaryTypeCheckbox
          label="Tööandja kulu"
          salaryType={SalaryType.EMPLOYERCOST}
        />
        <SalaryTypeCheckbox label="Brutopalk" salaryType={SalaryType.GROSS} />
        <SalaryTypeCheckbox label="Netopalk" salaryType={SalaryType.NET} />
        <SalaryInput />
      </div>
      <h2 className="text-center text-1xl font-semibold mb-3">Lisavalikud</h2>
      <div className="flex flex-col gap-4 justify-center items-center">
        <EmployerUnemploymentInsuranceCheckbox />
        <EmployeeUnemploymentInsuranceCheckbox />
        <PensionPillarSelection />
      </div>
    </div>
  );
};
