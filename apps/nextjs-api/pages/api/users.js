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

if(req.method === "DELETE"){
    const {id} = req.body
    if(!id){
        res.status(422).json({message: "Invalid Data"})
        return
    }
    await excuteQuery(`DELETE FROM users WHERE id = '${id}'`)
    res.status(201).json({message: "data Deleted"})
    return
}
if(req.method === "POST"){
    console.log(req.body)
    const {username, password, email} = req.body
    if(!username || !password || !email ){
        res.status(422).json({message: "Invalid Data"})
        return
    }
    const data = await excuteQuery(`INSERT INTO users(username, password, email) VALUES('${username}', '${password}', '${email}')`)
    res.status(201).json({message: "Data created", data})
    return

}    
if(req.method === "GET"){
    const { token, id } = req.headers
    if(!token|| !id ) {
        res.status(422).json({message: "No token or id, access denied"})
        return
    }
    const accessToken = await excuteQuery(`SELECT api_token from tokens WHERE user_id = '${id}'`)
    if(token !== accessToken[0].api_token){
       res.status(422).json({message: "access denied"})
    
    }else if(token === accessToken[0].api_token){
        const data = await excuteQuery(`SELECT * from users`)
        res.status(201).json({message: "data fetched", data})
        return
    }
}
else {
    res.status(500).json({message: "Route not valid"})
}
}

export default handler