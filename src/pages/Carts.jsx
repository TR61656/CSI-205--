import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function Carts() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce((sum, i) => sum + i.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold bg-black text-white py-2 mb-4">
         Carts
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="border rounded-lg p-3 bg-white shadow">
            <div className={`h-40 w-full ${item.color} flex items-center justify-center text-white`}>
              150 x 150
            </div>
            <p className="mt-2 text-sm">{item.title}</p>
            <p className="text-sm font-bold">${item.price.toFixed(2)}</p>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="mt-2 px-3 py-1 rounded text-sm bg-red-500 text-white hover:bg-red-600"
            >
              Remove from Carts
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-4 font-bold">
        Items: {items.length} – Total Price: ${total.toFixed(2)}
      </div>
    </div>
  );
}
