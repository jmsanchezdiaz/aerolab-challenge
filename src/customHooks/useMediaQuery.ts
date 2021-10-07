import { useEffect, useState } from "react";

interface MediaProps {
  minWidth: number;
}
export const useMediaQuery = (initialState: MediaProps) => {
  const [isMatchWithQuery, setIsMatchWithQuery] = useState(false);

  useEffect(() => {
    const handleResizeComponents = (e: any) => {
      if (window.innerWidth < initialState.minWidth) setIsMatchWithQuery(true);
      else setIsMatchWithQuery(false);
    };
    window.addEventListener("resize", handleResizeComponents);
    return () => {
      window.removeEventListener("resize", handleResizeComponents);
    };
  }, [initialState.minWidth]);

  return { isMatchWithQuery };
};
