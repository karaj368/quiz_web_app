import { useState, useEffect } from 'react';

function useTimer(seconds) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    if (time <= 0) return;

    const timerId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [time]);

  return {time, reset: () => setTime(seconds)};
}

export default useTimer;