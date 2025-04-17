import Medicine from "@/models/medicine.model";
import connectDB from "@/DataBase/connectDB";

export async function GET() {
  await connectDB();
  const medicines = await Medicine.find({});
  return new Response(JSON.stringify(medicines), { status: 200 });
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newMedicine = await Medicine.create(body);

    return new Response(JSON.stringify(newMedicine), { status: 201 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to create medicine" }),
      {
        status: 500,
      }
    );
  }
}
