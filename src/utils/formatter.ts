export const formatPrice = (price: any | undefined): string => {
  if (price !== undefined) {
    const numericPrice = parseInt(price, 10);
    return numericPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  } else {
    return "";
  }
};
