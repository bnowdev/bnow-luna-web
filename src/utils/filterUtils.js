import { FIELDS, OR_QUERY } from "../constants/filterConstants";

/**
 * @param {Object} operators
 * @param {string} filter
 * @returns {Array}
 */
export const getFilteredOperators = (operators, filter) => {
  if (typeof operators !== "object") {
    throw Error("Operators must be type: object");
  } else return operators[filter];
};

/**
 * @description Constructs a url query string used to filter && sortBy the alerts
 * @param {Array} filters
 * @param {string} sortBy
 * @param {number} pageIndex
 * @param {number} pageSize
 * @returns {string}
 */
export const constructFilterQuery = (filters, sortBy, pageIndex, pageSize) => {
  let query = "";

  // query param
  if (filters && filters.length > 0) {
    query += "?query=";
    filters.forEach((filter, index) => {
      const stringfilter = `${filter.field}__${filter.operator}__${
        filter.value
      }`;
      if (index === 0) {
        query += stringfilter;
      } else {
        query +=
          filter.queryType === OR_QUERY
            ? `^${filter.queryType}${stringfilter}`
            : `^${stringfilter}`;
      }
    });
  }

  // sortBy param
  // FIELDS => possible fields to sortBy
  if (
    sortBy &&
    typeof sortBy === "string" &&
    Object.values(FIELDS).some(field => {
      return sortBy === field;
    })
  ) {
    if (query.length === 0) {
      query += `?sortBy=${sortBy}`;
    } else {
      query += `&sortBy=${sortBy}`;
    }
  }

  // pageIndex param
  // page to return by query
  if (Number.isInteger(pageIndex) && pageIndex >= 0) {
    if (query.length === 0) {
      query += `?pageIndex=${pageIndex}`;
    } else {
      query += `&pageIndex=${pageIndex}`;
    }
  }

  // pageSize param
  // total items on page to return
  if (Number.isInteger(pageSize) && pageSize >= 0) {
    if (query.length === 0) {
      query += `?pageSize=${pageSize}`;
    } else {
      query += `&pageSize=${pageSize}`;
    }
  }

  return query;
};
