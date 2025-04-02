import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SET_PENSION_PILLAR } from "@/constants";
import { SalaryCalculatorContext } from "@/providers/SalaryContextProvider";
import { pensionPillarType } from "@/types/salary";
import { useContext } from "react";

export const PensionPillarSelection = () => {
  const {
    state: { pensionPillar },
    salaryDispatch,
  } = useContext(SalaryCalculatorContext);

  const handleValueChange = (value: pensionPillarType) => {
    salaryDispatch({
      type: SET_PENSION_PILLAR,
      payload: { pensionPillar: value },
    });
  };

  return (
    <div className="relative">
      <label className="text-sm font-medium text-slate-700 block mb-1">
        Kogumispension (II sammas)
      </label>
      <Select onValueChange={handleValueChange} value={pensionPillar}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Ei kasuta" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">Ei kasuta</SelectItem>
          <SelectItem value="0.02">2%</SelectItem>
          <SelectItem value="0.04">4%</SelectItem>
          <SelectItem value="0.06">6%</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
