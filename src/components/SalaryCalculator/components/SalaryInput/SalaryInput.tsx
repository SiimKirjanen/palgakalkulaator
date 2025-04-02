import { Input } from "@/components/ui/input";

type Props = {
  salaryInput: string;
  handleSalaryInputChange: (input: string) => void;
  className?: string;
};
export const SalaryInput = ({
  salaryInput,
  handleSalaryInputChange,
  className = "",
}: Props) => {
  const handleFocus = () => {
    if (salaryInput === "0") {
      handleSalaryInputChange("");
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSalaryInputChange(event.target.value);
  };
  return (
    <div className="flex items-center gap-1">
      <Input
        value={salaryInput}
        onChange={handleChange}
        onFocus={handleFocus}
        className={className}
      />
      <span className="text-gray-700">€</span>
    </div>
  );
};
