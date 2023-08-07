import dotenv from "dotenv";

dotenv.config();

const configKeys = {
  // MONGO_URL: process.env.MONGODB_URL as string,
  MONGO_URL: "mongodb+srv://mohammedriyazriyaz04:7b7z0wpEFRslnCSD@cluster0.balviqn.mongodb.net/",
  PORT: process.env.PORT || 3000,
  // JWT_SECRET: process.env.JWT_SECRET,
  JWT_SECRET:"SECRET_KEY123"
};

export default configKeys;
