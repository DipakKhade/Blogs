import NextAuth from "next-auth/next";
import GithubProvider from 'next-auth/providers/github'

const authOptions={
    providers:[
        GithubProvider({
            clientId:process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET ,
            redirectUri: "https://dipak-khade-blogs.vercel.app/auth/callback",
        })
    ],
    secret: process.env.NEXTAUTH_SECRET || "thisisasecretekeyfornextauth",
}
const handler = NextAuth(authOptions);
export {handler as GET , handler as POST}