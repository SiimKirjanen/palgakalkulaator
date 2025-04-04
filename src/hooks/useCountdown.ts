import { useEffect, useState } from "react";

export const useCountdown = (
  triggerValue: number,
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
    if (countdown === null || countdown <= 0) {
      return;
    }

    const timer = setTimeout(() => {
      if (countdown === 1) {
        onCountdownFinish();
        setCountdown(null);
      } else {
        setCountdown((prev) => (prev !== null ? prev - 1 : null));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, onCountdownFinish]);

  return countdown;
};
