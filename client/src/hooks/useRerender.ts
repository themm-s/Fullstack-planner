import { useCallback, useState } from "react";

export function useRerender() {
  const [_, setSignal] = useState({});

  const rerender = useCallback(() => {
    setSignal({});
  }, []);
  return rerender;
}