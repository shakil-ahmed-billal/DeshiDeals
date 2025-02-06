import dbConnect from "@/lib/dbConnect";

const allProducts = async () => {

    try {
        const data = await dbConnect("products").find({}).toArray()
        return data
    } catch (error) {
        console.log(error);
        return []
    }

}

export default allProducts