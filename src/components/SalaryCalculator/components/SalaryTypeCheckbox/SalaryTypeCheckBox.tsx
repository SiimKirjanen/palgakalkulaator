import { Checkbox } from "@/components/ui/checkbox";
import { SalaryType } from "@/types/salary";

type Props = {
  label: string;
  salaryType: SalaryType;
  currentType: SalaryType;
  onChange: (type: SalaryType) => void;
};
export const SalaryTypeCheckbox = ({
  label,
  salaryType,
  currentType,
  onChange,
}: Props) => {
  const checkBoxId = `salary-type-${salaryType}`;

  return (
    <div className="flex items-center gap-2 justify-center">
      <label
        className="text-sm font-medium text-gray-700 cursor-pointer"
        htmlFor={checkBoxId}
      >
        {label}
      </label>
      <Checkbox
        checked={currentType === salaryType}
        onCheckedChange={() => onChange(salaryType)}
        id={checkBoxId}
        className="cursor-pointer"
      />
    </div>
  );
};
