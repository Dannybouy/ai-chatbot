import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { Session, User } from "next-auth";
import Google from "next-auth/providers/google";

import { db } from "@/db/db";

// interface ExtendedSession extends Session {
//   user: User;
// }

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Google],
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id; // Assuming user.id is available
      return session;
    },
  },
});
