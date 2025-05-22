import NextAuth, { Session, User } from "next-auth";
import Google from "next-auth/providers/google";

// interface ExtendedSession extends Session {
//   user: User;
// }

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
});
