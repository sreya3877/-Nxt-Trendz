import {Link} from 'react-router-dom'
import Header from '../Header'
import CartListView from '../CartListView'
import CartSummary from '../CartSummary'
import PaymentPopup from '../PaymentPopup'
import CartContext from '../../context/CartContext'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList = [], removeAllCartItems} = value

      const showEmptyView = cartList.length === 0
      const totalPrice = cartList.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      )

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <div className="empty-cart-view">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/cart-empty-img.png"
                  alt="cart empty"
                  className="empty-cart-img"
                />
                <h1 className="empty-cart-heading">Your Cart Is Empty</h1>
                <Link to="/products">
                  <button type="button" className="shop-now-btn">
                    Shop Now
                  </button>
                </Link>
              </div>
            ) : (
              <div className="cart-content">
                <h1 className="cart-heading">My Cart</h1>

                <button
                  type="button"
                  className="remove-all-btn"
                  onClick={removeAllCartItems}
                >
                  Remove All
                </button>

                <CartListView cartList={cartList} />

                <CartSummary total={totalPrice} cartList={cartList} />

                {/* Single Checkout button */}
                <PaymentPopup cartList={cartList} total={totalPrice} />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
