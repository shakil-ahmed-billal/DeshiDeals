import allProducts from "@/utils/allProducts";
import ProductCard from "../productCard/ProductCard";

const TopSelling = async () => {
    const products = await allProducts()


    return (
        <div className="flex gap-5 flex-wrap">
            {products?.map(product => <ProductCard key={product?._id} product={product}/>)}

        </div>
    )
}

export default TopSelling