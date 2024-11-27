import ProductCard from "../../components/ViewItems/ProductCard"
import { useProducts } from "../../hooks/getAllProducts"

const ViewItems = () => {


  const { products, isError, isLoading } = useProducts();

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Error while loading products.</p>;


  return (
    <>
    
    <div className="grid grid-cols-4 gap-3 p-4 ">
        <ProductCard products = {products}/>
    </div>
    </>
  )
}

export default ViewItems