import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'
import CartContext from '../../context/CartContext'
import './index.css'

const CartListView = ({cartList}) => (
  <CartContext.Consumer>
    {value => {
      const {
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        removeCartItem,
      } = value

      return (
        <ul className="cart-items-list">
          {cartList.map(item => (
            <li key={item.id} className="cart-item">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="cart-item-img"
              />
              <div className="cart-item-details">
                <p className="cart-item-title">{item.title}</p>
                <p className="cart-item-brand">{item.brand}</p>
                <p className="cart-item-price">Rs {item.price}/-</p>

                <div className="cart-quantity-control">
                  <button
                    type="button"
                    data-testid={`minus-${item.id}`}
                    onClick={() => decrementCartItemQuantity(item.id)}
                  >
                    <BsDashSquare />
                  </button>
                  <p data-testid={`quantity-${item.id}`}>{item.quantity}</p>
                  <button
                    type="button"
                    data-testid={`plus-${item.id}`}
                    onClick={() => incrementCartItemQuantity(item.id)}
                  >
                    <BsPlusSquare />
                  </button>
                </div>

                <button
                  type="button"
                  data-testid={`remove-${item.id}`}
                  className="remove-btn"
                  onClick={() => removeCartItem(item.id)}
                >
                  <AiFillCloseCircle />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
