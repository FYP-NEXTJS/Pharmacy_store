import Medicine from "@/models/medicine.model";
import dbConnect from "@/DataBase/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const medicines = await Medicine.find().populate("category");
  return NextResponse.json(medicines);
}

export async function POST(req: Request) {
  await dbConnect();
  const body = await req.json();
  const medicine = await Medicine.create(body);
  return NextResponse.json(medicine);
}
