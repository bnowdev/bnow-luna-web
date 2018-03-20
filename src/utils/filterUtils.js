import { FIELDS } from "../constants/filterConstants";

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
 * @returns {string}
 */
export const constructFilterQuery = (filters, sortBy) => {
  let query = "";

  // query param
  if (filters.length > 0) {
    query += "?query=";
    filters.forEach((filter, index) => {
      const stringfilter = `${filter.field}${filter.operator}${filter.value}`;
      if (index === 0) {
        query += stringfilter;
      } else {
        query += `${filter.queryType}${stringfilter}`;
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

  return query;
};
