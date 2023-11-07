import { mergeLeft } from "ramda";
import { useHistory } from "react-router-dom";

import { getQueryParams, buildUrl } from "utils";

const usePaginationQueryParams = () => {
  const queryParams = getQueryParams();
  const history = useHistory();

  const handlePaginationQueryParamsChange = (page, page_size) => {
    const params = { page, page_size };

    const pathname = window.location.pathname;
    history.push(buildUrl(pathname, mergeLeft(params, queryParams)));
  };

  return { handlePaginationQueryParamsChange };
};

export default usePaginationQueryParams;
