const useMyFormatPrice = (numberString) => {
  return numberString.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export { useMyFormatPrice as u };
//# sourceMappingURL=useMyFormatPrice-CCAsFuev.mjs.map
