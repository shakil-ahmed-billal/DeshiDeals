import Link from "next/link"
import { Button } from "../ui/button"
import { Card, CardContent, CardTitle } from "../ui/card"

const ProductCard = ({ product }) => {

    const { name, price, original_price, currency, images ,_id} = product || {}

    return (
        <Card>
            <Link href={`/products/${_id}`}>
                <img className="max-h-[290px] max-w-[290px] object-cover" src={images[0]?.url} alt="" />
                <CardContent className="flex flex-col items-center mt-3">
                    <CardTitle>{name}</CardTitle>
                    <p>{currency} {price}</p>
                </CardContent></Link>
            <Button className="rounded-none w-full ">Order New</Button>
        </Card>
    )
}

export default ProductCard