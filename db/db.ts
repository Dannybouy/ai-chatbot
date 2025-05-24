import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connection = postgres(`${process.env.DATABASE_URL!}?sslmode=require`);
export const db = drizzle(connection);
