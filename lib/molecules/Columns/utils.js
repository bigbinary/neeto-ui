import { toLower } from "ramda";

export const removeFixedColumns = (fixedColumns, columnData) =>
  columnData.filter(({ dataIndex }) => !fixedColumns.includes(dataIndex));

export const filterBySearchTerm = (searchTerm, columns) =>
  columns.filter(({ name }) =>
    toLower(name).includes(toLower(searchTerm.trim()))
  );
