import moment from "moment";

export const convertDateToString = (date) => {
  return moment(date).format("D-MM-YYYY HH:mm:ss");
} 

