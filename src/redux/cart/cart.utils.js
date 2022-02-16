export const addItemToCart = (cartItems, cartItemsToAdd) => {
  const existingcartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemsToAdd.id
  );
  if (existingcartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemsToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1}
        : cartItem
      )
  }

  return [...cartItems, {...cartItemsToAdd, quantity: 1}]
};
