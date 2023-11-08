import { useId as useReactId } from "react";

const useId = defaultId => {
  const id = useReactId();

  return defaultId || id;
};

export default useId;
