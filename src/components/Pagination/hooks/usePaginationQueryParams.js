import { mergeLeft } from "ramda";
import { useHistory } from "react-router-dom";

import { useQueryParams } from "hooks";
import { buildUrl } from "utils";

const usePaginationQueryParams = () => {
  const queryParams = useQueryParams();
  const history = useHistory();

  const handlePaginationQueryParamsChange = page => {
    const params = { page };

    const pathname = window.location.pathname;
    history.push(buildUrl(pathname, mergeLeft(params, queryParams)));
  };

  return { handlePaginationQueryParamsChange };
};

export default usePaginationQueryParams;
