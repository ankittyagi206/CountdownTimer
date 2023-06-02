import React, { useState } from "react";
import Timer from "./Timer";
type TimerProps = {
  duration: number;
  onExpired: () => void;
};

const TimeWrapper = ({ duration, onExpired }: TimerProps) => {
  const onExpireHelper = () => {
    onExpired && onExpired();
    setExpired(true);
  };
  const [hasExpired, setExpired] = useState(false);
  const handleRestart = () => {
    setExpired(false);
  };
  return (
    <div>
      {!hasExpired ? (
        <Timer duration={duration} onExpired={onExpireHelper} />
      ) : (
        <button onClick={handleRestart}>Restart</button>
      )}
    </div>
  );
};

export default TimeWrapper;
