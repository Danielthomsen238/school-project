import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import excuteQuery from "../../../src/db"
const bcrypt = require('bcryptjs');


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
            user: { label: "Username", type: "text", },
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
              
              const checkPassword = await excuteQuery(`SELECT password from users WHERE username = '${credentials.user}' `) 
              const doesPasswordMatch = bcrypt.compareSync(credentials.password, checkPassword[0].password)
              console.log(checkPassword)
              if (!doesPasswordMatch) {
                console.log("password dont match")
                  throw new Error('Password doesnt match');
              }
              //Else send success response
              //Get id on the user 
              const id = await excuteQuery(`SELECT id from users WHERE username = '${credentials.user}' AND password = '${checkPassword[0].password}'`)
              return { userName: user[0].username, userID: id[0].id };
          },
      }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      console.log("im here")
      return baseUrl;
    },
    //save the information of the user in the jwt
    jwt: async ({ token, user }) => {
      user && (token.user = user)
      console.log(token)
      return token
  },
  session: async ({ session, token }) => {
      session.user.name = token.user.userName
      session.user.id = token.user.userID
      return session
  }
    
  },
  pages: {
   //signIn: '/login/',
   // signOut: '/auth/signout',
   // error: '/auth/error', // Error code passed in query string as ?error=
   // verifyRequest: '/auth/verify-request', // (used for check email message)
   // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
});