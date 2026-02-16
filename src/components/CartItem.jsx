
function CartItem({ item, index, onRemoveFromCart }) {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>${item.price}</p>
      <button onClick={() => onRemoveFromCart(index)}>Remove</button>
    </div>
  );
}

export default CartItem;