import {
  Card,
  CardContent,
} from "@/components/ui/card"

import img from '../../assets/imgs/cup.webp'
import { ProductType } from "../../shared/types";

interface ProductCardProps {
  products: Array<ProductType>;
}

const ProductCard = ({products}:ProductCardProps) => {

  return (
    <>
           {products.map(product => (
               <Card className="w-[250px]" key={product.productID}>        
               <CardContent>
                 <img src={img} alt="img logo" />
                 <p className="mt-2 font-semibold">{product.productName}</p>
                 <div className="flex flex-row justify-between items-center mt-2">
                   <span className="text-sm">count : {product.stock}</span>
                   <span className="text-sm">price : $ {product.sellingPrice}</span>
                 </div>
               </CardContent>
             </Card>
            ))}
           </>
  )
}

export default ProductCard

