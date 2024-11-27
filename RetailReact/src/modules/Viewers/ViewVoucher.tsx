import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { increaseCount,decreaseCount } from "../../store/features/cardSlice";



const ViewVoucher = () => {
  // Get cartProducts from Redux store
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts || []
  );

  const dispatch = useDispatch();

  // Calculate the total price
  const totalPrice = cartProducts.reduce(
    (total, product) => total + product.count * product.sellingPrice,
    0
  );

  const handleIncreaseCount = (productID:string) => {
    dispatch(increaseCount(productID));
  };

  const  handleDecreaseCount = (productID: string) => {
    dispatch(decreaseCount(productID));
  };



  return (
    <div className="p-4">
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-center">No</th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Product Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Count
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              SellingPrice
            </th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Price
            </th>
          </tr>
        </thead>

        <tbody>
          {cartProducts.length > 0 ? (
            cartProducts.map((product, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {product.productName}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {/* Count with + and - buttons */}
                  <div className="flex justify-center items-center gap-2">
                    <button
                      onClick={() => handleDecreaseCount(product.productID)}
                    //   disabled={product.count <= 1} 
                      className="p-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{product.count}</span>
                    <button
                      onClick={() => handleIncreaseCount(product.productID)} // Pass productID instead of product
                      className="p-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {product.sellingPrice}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {product.count * product.sellingPrice}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="border border-gray-300 px-4 py-2 text-center"
              >
                No Products in Cart
              </td>
            </tr>
          )}
        </tbody>

        {cartProducts.length > 0 && (
          <tfoot>
            <tr>
              <td
                colSpan={4}
                className="border border-gray-300 px-4 py-2 text-right font-semibold"
              >
                Total Price:
              </td>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                ${totalPrice.toFixed(2)}
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
};

export default ViewVoucher;
