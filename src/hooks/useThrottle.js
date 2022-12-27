import { useRef } from 'react';

const useThrottle = () => {
  let timerId = useRef(null);
  const throttle = (executableFunction, ms) => {
    console.log(timerId.current);
    if (timerId.current) return;

    timerId.current = setTimeout(() => {
      executableFunction();
      timerId.current = null;
    }, ms);
  }

  return throttle;
}

export default useThrottle;