import { useCountdown } from "@/hooks/useCountdown";
import { useSalaryCalculations } from "@/hooks/useSalaryCalculations";
import { SalaryType } from "@/types/salary";
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

export const AISuggestion = () => {
  const [aiAnswer, setAiAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { grossSalary } = useSalaryCalculations();
  const countdown = useCountdown(grossSalary, 5, handleCountdownFinish);

  useEffect(() => {
    setAiAnswer(null);
  }, [grossSalary]);

  async function handleCountdownFinish() {
    try {
      setLoading(true);
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: grossSalary,
          inputType: SalaryType.GROSS,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      setAiAnswer(data.response);
    } catch (error) {
      console.error("Error during API call:", error);
      setAiAnswer(
        "AI ei saanud Teie palga kohta infot anda. Proovige hiljem uuesti."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <CountDown countdown={countdown} />
      {loading && <Loading />}
      {aiAnswer && <AIAnswer answer={aiAnswer} />}
    </div>
  );
};

type CountDownProps = {
  countdown: number | null;
};
const CountDown = ({ countdown }: CountDownProps) => {
  if (countdown === null || countdown <= 0) {
    return null;
  }

  return (
    <div className="text-lg">
      Alustame palgaanalüüsi <span className="font-semibold">{countdown}</span>{" "}
      sekundi pärast
    </div>
  );
};

type AIAnswerProps = {
  answer: string | null;
};
const AIAnswer = ({ answer }: AIAnswerProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h3 className="text-xl font-semibold mb-2">AI arvamus Teie palgast</h3>
      <p className="max-w-[800px]">{answer}</p>
    </div>
  );
};

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Oval
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      AI analüüsib Teie palka. Palun oodake.
    </div>
  );
};
