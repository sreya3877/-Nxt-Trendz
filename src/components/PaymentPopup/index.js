import Popup from 'reactjs-popup'
import {useState} from 'react'
import './index.css'

const PaymentPopup = ({cartList, total}) => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)

  const itemsCount = cartList.reduce((sum, item) => sum + item.quantity, 0)

  const onConfirmOrder = () => setOrderPlaced(true)

  return (
    <Popup
      modal
      trigger={
        <button type="button" className="checkout-btn">
          Checkout
        </button>
      }
    >
      {close => (
        <div className="popup-container">
          {!orderPlaced ? (
            <>
              <h1 className="popup-heading">Payment Method</h1>

              <div className="payment-options">
                <label>
                  <input type="radio" disabled /> Card
                </label>
                <label>
                  <input type="radio" disabled /> Net Banking
                </label>
                <label>
                  <input type="radio" disabled /> UPI
                </label>
                <label>
                  <input type="radio" disabled /> Wallet
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    onChange={() => setPaymentMethod('COD')}
                  />
                  Cash on Delivery
                </label>
              </div>

              <div className="summary">
                <p>Items: {itemsCount}</p>
                <p>Total Price: Rs {total}/-</p>
              </div>

              <button
                type="button"
                className="confirm-btn"
                disabled={paymentMethod !== 'COD'}
                onClick={onConfirmOrder}
              >
                Confirm Order
              </button>
            </>
          ) : (
            <>
              <p className="success-text">
                Your order has been placed successfully
              </p>
              <button type="button" className="close-btn" onClick={close}>
                Close
              </button>
            </>
          )}
        </div>
      )}
    </Popup>
  )
}

export default PaymentPopup
