import { useEffect, useState } from "react";

export const useDebounce = (value, deley) => {
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
