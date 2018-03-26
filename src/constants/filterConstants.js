// default value for all
export const NONE = "";

// filter field types
export const SEVERITY = "severity";
export const NAME = "name";
export const SOURCE = "source";
export const GENERATED_AT = "generatedAt";

// filter operator types
// => string
export const IS = "IS";
export const IS_NOT = "ISNOT";
export const CONTAINS = "CONTAINS";
export const NOT_CONTAINS = "NOTCONTAINS";
export const STARTS_WITH = "STARTSWITH";
export const ENDS_WITH = "ENDSWITH";
// => number
export const EQUALS = "EQUALS";
export const NOT_EQUALS = "NOTEQUALS";
export const IS_LESS_THAN = "ISLESSTHAN";
export const IS_MORE_THAN = "ISMORETHAN";
export const IS_MORE_THAN_OR_EQUAL = "ISMORETHANOREQUAL";
export const IS_LESS_THAN_OR_EQUAL = "ISLESSTHANOREQUAL";
// => date
export const ON = "ON";
export const NOT_ON = "NOTON";
export const AFTER = "AFTER";
export const BEFORE = "BEFORE";
export const ON_OR_AFTER = "ONORAFTER";
export const ON_OR_BEFORE = "ONORBEFORE";

// filter values types
export const CRITICAL = "2";
export const WARNING = "1";
export const INFORMATION = "3";



// filter query types
export const AND_QUERY = "AND";
export const OR_QUERY = "OR";


// 

export const FIELDS = {
  [SEVERITY]: SEVERITY,
  [NAME]: NAME,
  [SOURCE]: SOURCE,
  [GENERATED_AT]: GENERATED_AT
}

export const OPERATORS = {
  [NONE]: [NONE],
  [SEVERITY]: [EQUALS, NOT_EQUALS],
  [NAME]: [IS, IS_NOT, CONTAINS, NOT_CONTAINS, STARTS_WITH, ENDS_WITH],
  [SOURCE]: [IS, IS_NOT, CONTAINS, NOT_CONTAINS, STARTS_WITH, ENDS_WITH],
  [GENERATED_AT]: [ON, NOT_ON, AFTER, BEFORE, ON_OR_AFTER, ON_OR_BEFORE]
};
