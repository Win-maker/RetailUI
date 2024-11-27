import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/features/cardSlice";
import { ProductType } from "../../shared/types";
import { Button } from "../ui/button";
import img from "../../assets/imgs/cup.webp";
import { Card, CardContent } from "@/components/ui/card";
import { RootState } from "../../store";
import { NavLink } from "react-router-dom";

interface ProductCardProps {
  products: ProductType[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  const dispatch = useDispatch();

  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts || []
  );

  if (!cartProducts) return <div>Loading cart...</div>;

  const handleAddToCart = (product:ProductType) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productID: string) => {
    dispatch(removeFromCart(productID));
  };

  const totalItemsInCart = cartProducts.reduce((total, product) => total + product.count, 0);

  return (
    <>
   
      {totalItemsInCart > 0 && (
        <div className="fixed top-[100px] right-0 transform -translate-y-1/2
          bg-sky-100/80 backdrop-blur-lg text-white p-2 rounded shadow-md" style={{ zIndex: 1000 }}>
          <div className="flex items-center gap-2">
            <NavLink to='/voucher'>
              <span role="img" aria-label="shop" className="text-3xl">🛒</span>
            </NavLink>
            <span className="text-lg text-black">{totalItemsInCart}</span>
          </div>
        </div>
      )}

      {products.map((product: ProductType) => (
        <Card className="w-[250px]" key={product.productID}>
          <CardContent>
            <img src={img} alt="Product image" />
            <p className="mt-2 font-semibold">{product.productName}</p>
            <div className="flex flex-row justify-between items-center mt-2">
              <span className="text-sm">{product.stock}</span>
              <span className="text-sm">${product.sellingPrice}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <Button
                onClick={() => handleAddToCart(product)}
                disabled={product.stock <= 0}
              >
                Add
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleRemoveFromCart(product.productID)}
              >
                Remove
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default ProductCard;
