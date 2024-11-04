import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 8080;
export const mongoDBURL = process.env.MONGODB_URI;

// Please create a free database for yourself.
// This database will be deleted after tutorial