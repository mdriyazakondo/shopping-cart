const getCartFormLocalStorage = () => {
  const storeCartString = localStorage.getItem("cart");

  if (storeCartString) {
    const storeCart = JSON.parse(storeCartString);
    return storeCart;
  } else {
    return [];
  }
};

const saveCartItemLocalStorage = (cart) => {
  const cartItem = JSON.stringify(cart);
  localStorage.setItem("cart", cartItem);
};

const addItemToCartLocalStorege = (id) => {
  const cart = getCartFormLocalStorage();
  const newCart = [...cart, id];
  saveCartItemLocalStorage(newCart);
};

const removeCartItemData = (id) => {
  const storeCart = getCartFormLocalStorage();
  const newStoreData = storeCart.filter((cart) => cart.id !== id);
  saveCartItemLocalStorage(newStoreData);
};

export {
  getCartFormLocalStorage as getStoreCart,
  saveCartItemLocalStorage as saveStoreCart,
  addItemToCartLocalStorege as addToCart,
  removeCartItemData as removeCart,
};
