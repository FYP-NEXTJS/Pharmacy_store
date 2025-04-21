import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);
const clientPromise = client
  .connect()
  .then(() => console.log(`Data base Connected SuccessFully`));

export default clientPromise;
