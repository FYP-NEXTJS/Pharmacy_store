import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, password, contact, profilePicture } = body;

    // Validate the profile picture (optional, can add stricter checks for size and type)
    if (profilePicture && !profilePicture.startsWith("data:image")) {
      return NextResponse.json(
        { success: false, message: "Invalid profile picture format." },
        { status: 400 }
      );
    }

    // Check if email already exists
    const client = await clientPromise;
    const db = client.db("ZahidPharmacyStore");
    const existingUser = await db.collection("register_page").findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "Email already registered." },
        { status: 409 }
      );
    }

    // Generate a custom user ID
    const customUserId = uuidv4();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user with customUserId
    const result = await db.collection("register_page").insertOne({
      customUserId, // Store custom user ID
      firstName,
      lastName,
      email,
      password: hashedPassword,
      contact,
      profilePicture, // Store the profile picture in the database
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, data: result, customUserId });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
