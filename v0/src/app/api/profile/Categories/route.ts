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
  await dbConnect();
  const body = await req.json();

  const category = await Category.create(body);
  return NextResponse.json(category, { status: 201 });
};

export const GET = async (req: Request) => {
  await dbConnect();

  const categories = await Category.find();

  return NextResponse.json(categories, { status: 200 });
};


