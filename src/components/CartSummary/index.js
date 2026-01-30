// Write your code here
import './index.css'

const CartSummary = ({total, cartList}) => {
  const itemsCount = cartList.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="cart-summary">
      <h1 className="summary-heading">Order Total</h1>
      <p className="summary-price">Rs {total}/-</p>
      <p className="summary-items">{itemsCount} Items in cart</p>
    </div>
  )
}

export default CartSummary
