import { useRef, useState } from "react";

function useDebounce(executableFunction, ms)  {
  // const [timerId, setTimerId] = useState(null)

  // if (timerId.current) clearTimeout(timerId.current);

  // const newTimerId = setTimeout(executableFunction, ms);
  // timerId.current(newTimerId);

  // return timerId;

  console.log('hi')
}

export default useDebounce;