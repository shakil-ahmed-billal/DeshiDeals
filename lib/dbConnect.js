import { MongoClient, ServerApiVersion } from "mongodb";

const dbConnect = (collectionName) => {
  const uri = process.env.MONGODB_URI;

  // create mongodb client
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.DB_NAME).collection(collectionName);
};

export default dbConnect