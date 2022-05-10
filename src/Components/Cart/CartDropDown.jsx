import CartItem from "./CartItem/CartItem";
import "./cartDropDown.css";

const CartDropdown = ({ cartItems, toggleHidden, totalCart }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {totalCart ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message"> Your cart is empty </span>
      )}
    </div>
    <button
      onClick={() => {
        toggleHidden();
      }}
    >
      GO TO CHECKOUT
    </button>
  </div>
);

export default CartDropdown;
