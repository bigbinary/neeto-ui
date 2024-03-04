import { useState } from "react";

import { camelToSnakeCase, isPresent, snakeToCamelCase } from "neetocist";
import { mergeLeft } from "ramda";
import { useHistory } from "react-router-dom";

import { useQueryParams } from "hooks";
import { buildUrl } from "utils";

import { URL_SORT_ORDERS, TABLE_SORT_ORDERS } from "../constants";

const getSortInfoFromQueryParams = queryParams => {
  const sortedInfo = {};
  if (
    isPresent(queryParams.sort_by) &&
    isPresent(queryParams.order_by) &&
    isPresent(TABLE_SORT_ORDERS[queryParams.order_by])
  ) {
    sortedInfo.field = snakeToCamelCase(queryParams.sort_by);
    sortedInfo.order = TABLE_SORT_ORDERS[queryParams.order_by];
  }

  return sortedInfo;
};

const useTableSort = () => {
  const queryParams = useQueryParams();
  const [sortedInfo, setSortedInfo] = useState(
    getSortInfoFromQueryParams(queryParams)
  );

  const history = useHistory();

  const tt = {
    field: queryParams.sort_by,
    order: TABLE_SORT_ORDERS[queryParams.order_by],
  };

  const handleTableChange = (pagination, sorter) => {
    const params = {
      sort_by: sorter.order ? camelToSnakeCase(sorter.field) : undefined,
      order_by: URL_SORT_ORDERS[sorter.order],
      page: pagination.current,
    };

    const pathname = window.location.pathname;
    history.push(buildUrl(pathname, mergeLeft(params, queryParams)));
  };

  return { handleTableChange, sortedInfo, setSortedInfo };
};

export default useTableSort;
