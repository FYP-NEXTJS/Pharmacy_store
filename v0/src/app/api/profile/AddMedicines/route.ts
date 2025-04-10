// import { NextResponse } from 'next/server'; // Ensure this import is correct
// import clientPromise from "@/lib/mongodb";

// export async function POST(req: Request) {
//   try {
//     const { Name, Type, Price, Stock, Distributor } = await req.json();

//     if (!Name || !Type || !Price || !Stock) {
//       return NextResponse.json(
//         { message: "Fields are required." },
//         { status: 400 }
//       );
//     }

//     const client = await clientPromise;
//     const db = client.db("myDBClass");
//     const collection = db.collection("medicines_record");

//     // Find the maximum storeID
//     const recordStore = await collection.find().sort({ MedicineID: -1 }).limit(1).toArray();
//     console.log("Medicine id maximum: ", newMedicineID);

//     // Ensure that recordStore is not empty
//     let maxMedicineID = AddMedicinelength > 0 ? AddMedicine[0].storeID : 0;

//     // Increment the storeID
//     let newMedicineID = maxMedicineID + 1;

//     const AddMedicines = {
//       MedicineID: newMedicineID, // Make sure storeID is included in the new record
//       Name,
//       Type,
//       Price,
//       Stock,
//       Distributor: Distributor || "",
//     };

//     await collection.insertOne(AddMedicines);

//     return NextResponse.json(
//       { message: "Medicine Added successfully." },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error Adding Medicines:", error);
//     return NextResponse.json(
//       { message: "An error occurred while Adding Medicines." },
//       { status: 500 }
//     );
//   }
// }

// import { NextResponse } from 'next/server'; // Ensure this import is correct
// import clientPromise from "@/lib/mongodb";

// export async function POST(req: Request) {
//   try {
//     const { Name, Type, Price, Stock, Distributor } = await req.json();

//     if (!Name || !Type || !Price || !Stock) {
//       return NextResponse.json(
//         { message: "Fields are required." },
//         { status: 400 }
//       );
//     }

//     const client = await clientPromise;
//     const db = client.db("myDBClass");
//     const collection = db.collection("medicines_record");

//     // Find the maximum MedicineID
//     const recordStore = await collection.find().sort({ MedicineID: -1 }).limit(1).toArray();
//     console.log("Record Store:", recordStore);

//     // Ensure that recordStore is not empty
//     let maxMedicineID = recordStore.length > 0 ? recordStore[0].MedicineID : 0;

//     // Increment the MedicineID
//     let newMedicineID = maxMedicineID + 1;
//     console.log("New Medicine ID: ", newMedicineID);

//     const AddMedicines = {
//       MedicineID: newMedicineID, // Make sure MedicineID is included in the new record
//       Name,
//       Type,
//       Price,
//       Stock,
//       Distributor: Distributor || "",
//     };

//     await collection.insertOne(AddMedicines);

//     return NextResponse.json(
//       { message: "Medicine Added successfully." },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error Adding Medicines:", error);
//     return NextResponse.json(
//       { message: "An error occurred while Adding Medicines." },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from 'next/server'; // Ensure this import is correct
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const { Name, Type, Price, Stock, Distributor } = await req.json();

    if (!Name || !Type || !Price || !Stock) {
      return NextResponse.json(
        { message: "Fields are required." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("ZahidPharmacyStore");
    const collection = db.collection("medicines_record");

    // Find the maximum MedicineID
    const recordStore = await collection.find().sort({ MedicineID: -1 }).limit(1).toArray();
    console.log("Record Store:", recordStore);

    // Ensure that recordStore is not empty
    let maxMedicineID = 0;

    // Check if the recordStore is not empty, then assign the max MedicineID
    if (recordStore.length > 0 && recordStore[0].MedicineID) {
      maxMedicineID = recordStore[0].MedicineID;
    }

    // Increment the MedicineID
    let newMedicineID = maxMedicineID + 1;
    console.log("New Medicine ID: ", newMedicineID);

    const AddMedicines = {
      MedicineID: newMedicineID, // Make sure MedicineID is included in the new record
      Name,
      Type,
      Price,
      Stock,
      Distributor: Distributor,
    };

    await collection.insertOne(AddMedicines);

    return NextResponse.json(
      { message: "Medicine Added successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error Adding Medicines:", error);
    return NextResponse.json(
      { message: "An error occurred while Adding Medicines." },
      { status: 500 }
    );
  }
}
