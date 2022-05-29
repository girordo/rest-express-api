import mongoose from "mongoose";
import config from "config";
import logger from "../utils/logger";

export default async function connect() {
  const dbURI = config.get<string>("dbURI");

  try {
    await mongoose.connect(dbURI);
    logger.info("DB Connected");
  } catch (error) {
    logger.error("Could not connect to DB");
    process.exit(1);
  }
}
