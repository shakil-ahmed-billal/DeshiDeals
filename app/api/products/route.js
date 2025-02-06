import dbConnect from "@/lib/dbConnect";

export const GET = async () => {
    const allProducts = await dbConnect("products").find({}).toArray()
    return Response.json(allProducts)
};
