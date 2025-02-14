import ProductCard from "@/components/productCard/ProductCard"
import allProducts from "@/utils/allProducts"

const page = async () => {
    const products = await allProducts()


    return (
        <div className="w-10/12 mx-auto">
            <div className="flex gap-5 flex-wrap">
                {products?.map(product => <ProductCard key={product?._id} product={product} />)}
            </div>
        </div>
    )
}

export default page