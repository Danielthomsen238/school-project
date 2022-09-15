import excuteQuery from "../../src/db";
import NextCors from "nextjs-cors"


async function handler(req, res) {
      // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   })


if(req.method === "GET"){
    const { token, id } = req.headers
    if(!token|| !id ) {
        res.status(422).json({message: "No token or id, access denied"})
        return
    }
        const data = await excuteQuery(`SELECT * from user WHERE id = '${id}'` )
        res.status(201).json({message: "data fetched", data})
        return
    }

else {
    res.status(500).json({message: "Route not valid"})
}
}

export default handler