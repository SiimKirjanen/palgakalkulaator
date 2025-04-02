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
}: Props) => (
  <Checkbox
    checked={currentType === salaryType}
    onCheckedChange={() => onChange(salaryType)}
  >
    {label}
  </Checkbox>
);
