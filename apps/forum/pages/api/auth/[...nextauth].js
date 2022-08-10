import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import excuteQuery from "../../../src/db"


export default NextAuth({
  //Configure JWT
  session: {
      jwt: true,
  },
  //Specify Provider
    providers: [
        CredentialsProvider({
          // The name to display on the sign in form (e.g. "Sign in with...")
          name: "Credentials",
          // The credentials is used to generate a suitable form on the sign in page.
          // You can specify whatever fields you are expecting to be submitted.
          // e.g. domain, username, password, 2FA token, etc.
          // You can pass any HTML attribute to the <input> tag through the object.
          credentials: {
            user: { label: "Username", type: "text", placeholder: "jsmith" },
            password: {  label: "Password", type: "password" }
          },
          async authorize(credentials) {
              //Connect to DB
              //Get all the users
              const user = await excuteQuery(`SELECT username from users WHERE username = '${credentials.user}'`)
              console.log("user", user[0].username)
              if (!user) {
                console.log("no user found")
                  throw new Error('No user found with the email');
              }
              // //Check hased password with DB password
              // const checkPassword = await compare(credentials.passowrd, result.passowrd);
              const checkPassword = await excuteQuery(`SELECT password from users WHERE username = '${credentials.user}' AND password = '${credentials.password}'`)
              console.log(checkPassword)
              if (!checkPassword) {
                console.log("password dont match")
                  throw new Error('Password doesnt match');
              }
              //Else send success response
              return { user: "dex" };
          },
      }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("im here")
      return baseUrl;
    },
    async session({ session, user }) {
      console.log("im here 2")
      session.user.name = user
      return session;
    },
    async jwt({ user}) {
      if ( user) {

        return {
          user: user,
        } 
      }

      return user;
    },
  },
});