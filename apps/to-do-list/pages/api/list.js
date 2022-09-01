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
    const { complete } = req.body
    if(!complete){
        res.status(422).json({message: "Invalid Data"})
        return
    }
    await excuteQuery(`DELETE FROM list WHERE complete = '${complete}'`)
    res.status(201).json({message: "data Deleted"})
    return
}
if(req.method === "POST"){
    console.log(req.body)
    const {content, complete} = req.body
    if(!content){
        res.status(422).json({message: "Invalid Data"})
        return
    }
    const data = await excuteQuery(`INSERT INTO list(content, complete) VALUES('${content}', '${complete}')`)
    res.status(201).json({message: "Data created", data})
    return

}    
if(req.method === "PUT"){
    console.log(req.body)
    const {complete, id} = req.body
    if(!id){
        res.status(422).json({message: "Invalid Data"})
        return
    }
    const data = await excuteQuery(`UPDATE list SET complete = '${complete}' WHERE id = '${id}'`)
    res.status(201).json({message: "Data created", data})
    return

}    
if(req.method === "GET"){
    
        const data = await excuteQuery(`SELECT * from list`)
        res.status(201).json({message: "data fetched", data})
        return
    
}
else {
    res.status(500).json({message: "Route not valid"})
}
}

export default handler