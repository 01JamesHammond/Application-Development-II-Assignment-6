import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart }) {
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-section">
      <h2>Your Cart</h2>
      {cart.length > 0 ? (
        <>
          {cart.map((item, index) => (
            <CartItem 
              key={index} 
              item={item} 
              index={index} 
              onRemoveFromCart={removeFromCart} 
            />
          ))}
          <div className="cart-total">
            <h3>Total Amount: ${cartTotal.toFixed(2)}</h3>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <p>Your cart is empty. Start shopping to see items here!</p>
        </div>
      )}
    </div>
  );
}

export default CartPage;