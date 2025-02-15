
import axios from "axios";
import Image from "next/image";

const page = async ({ params }) => {

    const id = await params;
    console.log(id);

    const { data } = await axios(`${process.env.LIVE_LINK}/api/products/${id?.id}`)

    console.log(data);
    const { name, images, price, currency } = data || {}

    return (
        <div className="w-10/12 mx-auto">
            <div className="grid md:grid-cols-2 gap-5 mt-5">
                <Image
                    src={images[0]?.url}
                    alt="Product Image"
                    loading="lazy"
                    sizes="100vw"
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                    width={500}
                    height={300}
                    className="object-cover"
                />
                <div className="">
                    <p className="text-2xl font-semibold">{name}</p>
                    <p>{currency} {price}</p>
                </div>
            </div>
        </div>
    )
}

export default page