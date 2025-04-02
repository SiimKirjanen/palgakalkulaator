import { Input } from "@/components/ui/input";

type Props = {
  salaryInput: string;
  handleSalaryInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export const SalaryInput = ({
  salaryInput,
  handleSalaryInputChange,
}: Props) => {
  return <Input value={salaryInput} onChange={handleSalaryInputChange} />;
};
