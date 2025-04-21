import { NextResponse } from "next/server";
import dbConnect from "@/DataBase/connectDB";
import medicineModel from "@/models/medicine.model";
import categoryModel from "@/models/category.model";

export const POST = async (req: Request) => {
  try {
    await dbConnect();

    let { name, price, stock, imageUrl, category } = await req.json();

    // Check if medicine already exists
    const isExisting = await medicineModel.findOne({ name });
    if (isExisting) {
      console.log("Medicine already exists:", isExisting);
      return NextResponse.json(
        { message: "Medicine already exists" },
        { status: 400 }
      );
    }

    // Find Category by name
    let categoryFound = await categoryModel.findOne({ name: category });

    if (!categoryFound) {
      return NextResponse.json(
        { message: "No Such Category Found. Please Create a new one" },
        { status: 400 }
      );
    }

    // Create and save the medicine
    const medicine = new medicineModel({ name, price, stock, imageUrl });
    await medicine.save();
    console.log(`Medicine saved:`, medicine);

    categoryFound.itemsCount += 1; // Increment itemsCount
    categoryFound.items.push(medicine._id); // Add medicine ID to items array

    await categoryFound.save();

    return NextResponse.json(
      { message: "Medicine created, category checked." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/profile:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const GET = async (req: Request) => {
  try {
    await dbConnect();
    const url = new URL(req.url!);
    const categoryName = url.searchParams.get("category");

    if (!categoryName) {
      return NextResponse.json(
        { message: "Category name is required." },
        { status: 400 }
      );
    }

    const category = await Category.findOne({ name: categoryName }).populate(
      "items"
    );

    if (!category) {
      return NextResponse.json(
        { message: "Category not found." },
        { status: 404 }
      );
    }

    return NextResponse.json(category.items, { status: 200 });
  } catch (error) {
    console.error("Error fetching medicines by category:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
