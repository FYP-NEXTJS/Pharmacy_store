import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("ZahidPharmacyStore");
    const collection = db.collection("register_page");

    // Fetch all users with required fields
    const users = await collection
      .find({}, { projection: { firstName: 1, lastName: 1, email: 1, contact: 1 } })
      .toArray();

    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Failed to fetch users." },
      { status: 500 }
    );
  }
}
