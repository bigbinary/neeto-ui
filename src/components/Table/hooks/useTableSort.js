import { camelToSnakeCase } from "neetocist";
import { mergeLeft } from "ramda";
import { useHistory } from "react-router-dom";

import { useQueryParams } from "hooks";
import { buildUrl } from "utils";

import { URL_SORT_ORDERS } from "../constants";

const useTableSort = () => {
  const queryParams = useQueryParams();

  const history = useHistory();

  const handleTableChange = (pagination, sorter) => {
    const params = {
      sort_by: sorter.order ? camelToSnakeCase(sorter.field) : undefined,
      order_by: URL_SORT_ORDERS[sorter.order],
      page: pagination.current,
    };

    const pathname = window.location.pathname;
    history.push(buildUrl(pathname, mergeLeft(params, queryParams)));
  };

  return { handleTableChange };
};

export default useTableSort;
