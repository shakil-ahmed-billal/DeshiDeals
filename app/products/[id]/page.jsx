import axios from "axios";

const page = async ({ params }) => {

    const id = await params;
    console.log(id);

    const { data } = await axios(`${process.env.LIVE_LINK}/api/products/${id?.id}`)

    console.log(data);
    const { name, images , price , currency} = data || {}
    return (
        <div className="grid grid-cols-2 gap-5 mt-5">
            <img src={images[0]?.url} alt="" />
            <div className="">
                <p className="text-2xl font-semibold">{name}</p>
                <p>{currency} {price}</p>
            </div>
        </div>
    )
}

export default page