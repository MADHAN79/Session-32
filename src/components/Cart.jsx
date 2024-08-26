import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => {
    const amount = state.cart.totalAmount;
    return typeof amount === 'number' ? amount : 0;
  });

  // Additional safeguard: Set totalAmount to 0 if it's not a number
  const displayTotalAmount = totalAmount || 0;

  return (
    <div className="container p-4">
      <h2 className="text-2xl font-bold underline">REDUX SHOPPING CART</h2>
      <div className="products mt-12">
        {cartItems.map(item => (
          <div key={item.id} className="product-item mb-4">
            <img src={item.thumbnail} alt={item.title} />
            <div className="flex flex-row justify-evenly space-x-6 mt-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-green-950 font-bold">${item.price}</p>
            </div>
            <div className="flex items-center justify-end mt-4">
              <button
                onClick={() => dispatch(decreaseQuantity(item))}
                className="reduce-btn px-2 py-1 bg-red-600 text-white font-bold rounded-2xl"
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity(item))}
                className="add-btn px-2 py-1 bg-green-700 text-white font-bold rounded-2xl"
              >
                +
              </button>
            </div>
            <div className="ml-2 justify-center">
              <p>SubTotal</p>
              <p className="font-semibold">${item.totalPrice.toFixed(2)}</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item))}
              className="remove-btn font-thin px-2 text-white bg-gray-950 ml-36 rounded-2xl"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 ml-4 border-t pt-4">
        <h3 className="text-xl font-bold">Total Quantity: {totalQuantity}</h3>
        <h3 className="text-xl font-bold">Total Amount: ${displayTotalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
