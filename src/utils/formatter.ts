export const formatPrice = (price: any | undefined): string => {
  if (price !== undefined) {
    const numericPrice = parseInt(price, 10);
    const doublePrice = numericPrice * 5;
    return doublePrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  } else {
    return "";
  }
};
