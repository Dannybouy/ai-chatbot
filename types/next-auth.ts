// This file extends the NextAuth session type to include a user ID.
// This is useful for associating user sessions with database records or other user-specific data.
// This is necessary for the NextAuth session to include a user ID, which can be used in various parts of the application.

import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Add user ID to the session
    } & DefaultSession["user"];
  }
}
