import { useEffect, useState } from "react";

import { mergeLeft } from "ramda";
import { useHistory } from "react-router-dom";

import { useQueryParams } from "hooks";
import { buildUrl } from "utils";

import { URL_SORT_ORDERS } from "../constants";
import { getSortInfoFromQueryParams, getSortField } from "../utils";

const useTableSort = () => {
  const queryParams = useQueryParams();
  const [sortedInfo, setSortedInfo] = useState(() =>
    getSortInfoFromQueryParams(queryParams)
  );

  useEffect(() => {
    setSortedInfo(getSortInfoFromQueryParams(queryParams));
  }, [queryParams?.sort_by, queryParams?.order_by]);

  const history = useHistory();

  const handleTableChange = (pagination, sorter) => {
    const params = {
      sort_by: sorter.order ? getSortField(sorter.field) : undefined,
      order_by: URL_SORT_ORDERS[sorter.order],
      page: pagination.current,
    };

    const pathname = window.location.pathname;
    history.push(buildUrl(pathname, mergeLeft(params, queryParams)));
  };

  return { handleTableChange, sortedInfo, setSortedInfo };
};

export default useTableSort;
