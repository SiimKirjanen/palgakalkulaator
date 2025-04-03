import { Checkbox } from "@/components/ui/checkbox";

type Props = {
  label: string;
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
};
export const SalaryCheckbox = ({
  label,
  id,
  checked,
  onCheckedChange,
}: Props) => {
  return (
    <div className="flex items-center gap-2 justify-center">
      <label
        className="text-sm font-medium text-gray-700 cursor-pointer"
        htmlFor={id}
      >
        {label}
      </label>
      <Checkbox
        checked={checked}
        onCheckedChange={onCheckedChange}
        id={id}
        className="cursor-pointer"
      />
    </div>
  );
};
