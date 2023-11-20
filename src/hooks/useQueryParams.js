import { parse } from "qs";
import { useLocation } from "react-router-dom";

const useQueryParams = (options = {}) => {
  const location = useLocation();

  return parse(location.search, { ignoreQueryPrefix: true, ...options });
};

export default useQueryParams;
