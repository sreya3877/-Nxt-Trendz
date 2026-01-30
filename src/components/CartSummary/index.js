// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const total = cartList.reduce(
        (sum, item) => sum + item.quantity * item.price,
        0,
      )
      const count = cartList.reduce((sum, item) => sum + item.quantity, 0)

      return (
        <div className="cart-summary">
          <h1 className="order-total">
            Order Total: <span className="total-amount">Rs {total}/-</span>
          </h1>
          <p className="total-items">{count} Items in cart</p>
          <button type="button" className="checkout-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
