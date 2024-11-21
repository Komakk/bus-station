import { useEffect, useState } from "react";

export default function useTimer(startTime: number) {
  const [count, setCount] = useState(startTime - new Date().getTime());

  //console.log("count", count);

  useEffect(() => {
    const interval = setInterval(() => {
      const newCount = startTime - new Date().getTime();
      if (newCount < 0) {
        clearInterval(interval);
        return;
      }
      setCount(newCount);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return count;
}
