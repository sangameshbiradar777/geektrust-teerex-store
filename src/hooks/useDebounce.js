import { useRef } from "react";

function useDebounce()  {
  const timerId = useRef(null);

  const debounce = (executableFunction, ms) => {
    if (timerId.current) clearTimeout(timerId.current);

    timerId.current = setTimeout(() => {
      executableFunction();
    }, ms);
  }

  return debounce;
}

export default useDebounce;