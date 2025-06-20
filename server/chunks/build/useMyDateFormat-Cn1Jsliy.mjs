const dateFormat = (dateString) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    throw new Error("\u0414\u0430\u0442\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 YYYY-MM-DD");
  }
  const [year, month, day] = dateString.split("-");
  return `${day}.${month}.${year}`;
};

export { dateFormat as d };
//# sourceMappingURL=useMyDateFormat-Cn1Jsliy.mjs.map
