import ProductCard from "../../components/ViewItems/ProductCard"
import api from "../../api"

const ViewItems = () => {


  console.log('here is api', api)
  const { data: products = [], isLoading, isError }= api.products.getAllProduct.useQuery()

console.log("Products Data:", products); 

if (isLoading) return <p>Loading...</p>;


if (isError) return <p>Error while loading products.</p>;

  return (
    <>
    
    <div className="grid grid-cols-4 gap-3 p-4 bg-sky-100/50 backdrop-blur-lg shadow-lg ">
        <ProductCard products = {products}/>
    </div>
    </>
  )
}

export default ViewItems