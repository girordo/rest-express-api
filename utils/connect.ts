import mongoose from "mongoose";
import config from "config";

export default async function connect() {
  const dbURI = config.get<string>("dbURI");

  try {
    await mongoose.connect(dbURI);
  } catch (error) {
    console.error("Could not connect to DB");
    process.exit(1);
  }
}
