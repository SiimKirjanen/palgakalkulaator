import { useCountdown } from "@/hooks/useCountdown";
import { SalaryCalculatorContext } from "@/providers/SalaryContextProvider";
import { useContext } from "react";

export const AISuggestion = () => {
  const {
    state: { salaryInput },
  } = useContext(SalaryCalculatorContext);
  const countdown = useCountdown(salaryInput, 5, handleCountdownFinish);

  function handleCountdownFinish() {
    console.log("Countdown finished! Executing callback...");
    // Add your logic here
  }

  return (
    <div className="flex">
      AISuggestion
      {countdown !== null && countdown > 0 && (
        <p>Countdown: {countdown} seconds</p>
      )}
    </div>
  );
};
