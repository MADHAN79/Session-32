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
    <div className="p-4">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      <div className="products mt-4">
        {cartItems.map(item => (
          <div key={item.id} className="product-item mb-4">
            <img src={item.thumbnail} alt={item.title} />
            <div className="flex-1 ml-4">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => dispatch(decreaseQuantity(item))}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                onClick={() => dispatch(increaseQuantity(item))}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>
            <div className="ml-4">
              <p className="font-semibold">${item.totalPrice.toFixed(2)}</p>
            </div>
            <button
              onClick={() => dispatch(removeFromCart(item))}
              className="text-red-500 ml-4"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 border-t pt-4">
        <h3 className="text-xl font-bold">Total Quantity: {totalQuantity}</h3>
        <h3 className="text-xl font-bold">Total Amount: ${displayTotalAmount.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Cart;
