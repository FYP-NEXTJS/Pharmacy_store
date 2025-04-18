import Category from "@/models/category.model";
import dbConnect from "@/DataBase/connectDB";
import { NextResponse } from "next/server";

// export async function GET() {
//   await dbConnect();
//   const categories = await Category.find();
//   return NextResponse.json(categories);
// }

// export async function POST(req: Request) {
//   await dbConnect();
//   const body = await req.json();
//   const category = await Category.create(body);
//   return NextResponse.json(category);
// }

export const POST = async (req: Request) => {
  try {
    await dbConnect();
    const body = await req.json();

    const category = await Category.create(body);
    return NextResponse.json(category, {
      status: 201,
    });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const GET = async (req: Request) => {
  try {
    await dbConnect();
    const categories = await Category.find();

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
