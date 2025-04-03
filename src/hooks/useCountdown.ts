import { useEffect, useState } from "react";

export const useCountdown = (
  triggerValue: string | number,
  duration: number,
  onCountdownFinish: () => void
) => {
  const [countdown, setCountdown] = useState<number | null>(null);

  useEffect(() => {
    if (triggerValue) {
      setCountdown(duration);
    } else {
      setCountdown(null);
    }
  }, [triggerValue, duration]);

  useEffect(() => {
    if (countdown !== null && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => (prev !== null ? prev - 1 : null));
      }, 1000);

      return () => clearTimeout(timer);
    }

    if (countdown === 0) {
      onCountdownFinish();
    }
  }, [countdown, onCountdownFinish]);

  return countdown;
};
