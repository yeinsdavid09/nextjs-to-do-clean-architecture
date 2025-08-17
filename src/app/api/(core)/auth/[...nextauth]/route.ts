import NextAuth, { NextAuthOptions } from "next-auth";

//* Adapters
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";

//* Providers
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

//* Use Cases
import { signInUseCase } from "@business/core/modules/authentication/base/application/tokens/authentication.tokens";
import { findOneUserUseCase } from "@business/core/modules/users/base/application/tokens/users.tokens";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "johndoe@mail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials, req) {
        const record = await signInUseCase.execute({
          email: credentials?.email ?? "",
          password: credentials?.password ?? "",
        });
        if (record) return record.user;
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.AUTH_PROVIDER_GOOGLE_ID ?? "",
      clientSecret: process.env.AUTH_PROVIDER_GOOGLE_SECRET ?? "",
    }),
    GithubProvider({
      clientId: process.env.AUTH_PROVIDER_GITHUB_ID ?? "",
      clientSecret: process.env.AUTH_PROVIDER_GITHUB_SECRET ?? "",
    }),
  ],
  callbacks: {
    signIn() {
      return true;
    },
    async jwt({ token }) {
      const record = await findOneUserUseCase.execute(
        "email",
        token.email ?? "no-email"
      );
      token.id = record.id;
      token.permissions = record.permissions;
      token.status = record.status;
      return token;
    },
    async session({ session, token }) {
      if (session && session.user) {
        session.user = {
          ...session.user,
          id: token.id,
          permissions: token.permissions,
          status: token.status,
        };
      }
      return session;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
