export const saveCartItems = (items: any) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

export const getCartItems = () => {
  const items = localStorage.getItem("cartItems");
  return items ? JSON.parse(items) : [];
};
