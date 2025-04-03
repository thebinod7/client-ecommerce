export const saveCartItems = (items: any) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

export const getCartItems = () => {
  const items = localStorage.getItem("cartItems");
  return items ? JSON.parse(items) : [];
};

export const saveCurrentUser = (user: any) => {
  localStorage.setItem("currentUser", JSON.stringify(user));
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};
