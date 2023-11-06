import { camelToSnakeCase } from "neetocist";
import { mergeLeft } from "ramda";
import { useHistory } from "react-router-dom";

import { URL_SORT_ORDERS } from "../constants";
import { getQueryParams, buildUrl } from "../utils";

const useTableSort = () => {
  const queryParams = getQueryParams();

  const history = useHistory();

  const handleTableChange = (pagination, sorter) => {
    const params = {
      sort_by: sorter.order && camelToSnakeCase(sorter.field),
      order_by: URL_SORT_ORDERS[sorter.order],
      page: pagination.current,
      page_size: pagination.pageSize,
    };

    const pathname = window.location.pathname;
    history.push(buildUrl(pathname, mergeLeft(params, queryParams)));
  };

  return { handleTableChange };
};

export default useTableSort;
