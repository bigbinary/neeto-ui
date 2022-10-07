import { filter, identical, includes, not } from "ramda";

export const removeFixedColumns = (fixedColumns, columnData) =>
  filter(({ name }) => !includes(name, fixedColumns), columnData);

export const removeDuplicates = (array) => [...new Set(array)];

export const removeFromHiddenColumns = (columnName, hiddenColumns) =>
  removeDuplicates(
    filter((column) => not(identical(column, columnName)), hiddenColumns)
  );

export const filterBySearchTerm = (searchTerm, columns) =>
  filter(
    ({ name }) => includes(searchTerm.toLowerCase(), name.toLowerCase()),
    columns
  );
