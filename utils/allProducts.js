import dbConnect from "@/lib/dbConnect";
import axios from "axios";

const allProducts = async () => {

    try {
        const {data} = await axios(`${process.env.LIVE_LINK}/api/products`)
        return data
    } catch (error) {
        console.log(error);
        return []
    }

}

export default allProducts