import dbConnect from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const collection = await dbConnect("products"); // Await db connection
    const allProducts = await collection.find({}).toArray(); // Fetch products

    return NextResponse.json(allProducts, { status: 200 }); // Proper Next.js response
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch products", error: error.message },
      { status: 500 }
    );
  }
};
