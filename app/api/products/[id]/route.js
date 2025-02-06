const { default: dbConnect } = require("@/lib/dbConnect");
const { ObjectId } = require("mongodb");

export const GET = async (req,{ params }) => {
  const id = await params;
    console.log(id);
  const query = {
    _id: new ObjectId(id.id),
  };

  try {
    const product = await dbConnect("products").findOne(query);
    return Response.json(product);
  } catch (error) {
    console.log(error);
    return {};
  }
};

