import ProductCard from "../../components/ViewItems/ProductCard"
import api from "../../api"

const ViewItems = () => {


  const { data:products=[], isError, isLoading}= api.products.getAllProduct.useQuery()



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