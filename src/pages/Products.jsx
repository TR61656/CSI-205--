import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const products = [
  { id: 1, title: "Product 1", price: 58.14, color: "bg-pink-500" },
  { id: 2, title: "Product 2", price: 56.0, color: "bg-pink-400" },
  { id: 3, title: "Product 3", price: 88.91, color: "bg-cyan-600" },
];

export default function Products() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAdd = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold bg-black text-white py-2 mb-4">
       Products
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {products.map((p) => {
          const isAdded = cartItems.some((item) => item.id === p.id);
          return (
            <div key={p.id} className="border rounded-lg p-3 bg-white shadow">
              <div className={`h-40 w-full ${p.color} flex items-center justify-center text-white`}>
                150 x 150
              </div>
              <p className="mt-2 text-sm">{p.title}</p>
              <p className="text-sm font-bold">${p.price.toFixed(2)}</p>
              <button
                onClick={() => handleAdd(p)}
                disabled={isAdded}
                className={`mt-2 px-3 py-1 rounded text-sm ${
                  isAdded ? "bg-red-500 text-white" : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {isAdded ? "Added" : "Add to Carts"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
