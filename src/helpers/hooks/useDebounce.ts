import { useEffect, useState } from "react";

export const useDebounce = (value: string, deley: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, deley);

    return () => {
      clearTimeout(handler)
    }
  }, [value, deley]);

  return debouncedValue
};
