export const dateFormat = date => {
  const newDate = new Date(date);
  const onlyDate = newDate.toUTCString();
  return onlyDate;
};
