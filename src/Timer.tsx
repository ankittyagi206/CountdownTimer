import { useEffect, useState } from "react";
type TimerProps = {
  duration: number;
  onExpired: () => void;
};
const Timer = ({ duration = 60000, onExpired }: TimerProps) => {
  const [time, setTime] = useState(duration);
  const SEC = 1000;
  const MIN = 60 * SEC;
  const HOUR = 60 * MIN;
  const DAY = 24 * HOUR;
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (time <= 0) {
        clearTimeout(timerId);
        onExpired && onExpired();
      } else {
        setTime((time) => time - 1000);
      }
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [time]);

  const getFormattedTime = (getTime: number) => {
    const day = Math.floor(getTime / DAY);
    const hour = Math.floor((getTime % DAY) / HOUR);
    const minute = Math.floor((getTime % HOUR) / MIN);
    const second = Math.floor((getTime % MIN) / SEC);
    return `${day}:${hour}:${minute}:${second}`;
  };
  return <>{getFormattedTime(time)}</>;
};

export default Timer;
