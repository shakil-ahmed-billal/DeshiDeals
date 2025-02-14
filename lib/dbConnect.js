import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;

if (!uri || !dbName) {
  throw new Error("Missing MONGODB_URI or DB_NAME in environment variables");
}

let cachedClient = null;
let cachedDb = null;

const connectToDB = async () => {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();
  cachedClient = client;
  cachedDb = client.db(dbName);

  return { client: cachedClient, db: cachedDb };
};

const dbConnect = async (collectionName) => {
  const { db } = await connectToDB();
  return db.collection(collectionName);
};

export default dbConnect;
