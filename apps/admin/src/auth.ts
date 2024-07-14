
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

export const { handlers, signIn, signOut, auth }: {
  handlers: any;
  signIn: any;
  signOut: any;
  auth: any;
} = NextAuth({
  providers: [Google],
})
