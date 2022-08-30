import excuteQuery from "../../src/db";


async function handler(req, res) {
if(req.method === "DELETE"){
    const {id} = req.body
    if(!id){
        req.status(422).json({message: "Invalid Data"})
        return
    }
    await excuteQuery(`DELETE FROM users WHERE id = '${id}'`)
    res.status(201).json({message: "data Deleted"})
    return
}
if(req.method === "POST"){
    console.log(req.body)
    const {username, password, email} = req.body
    if(!username || !password || !email){
        req.status(422).json({message: "Invalid Data"})
        return
    }
    const data = await excuteQuery(`INSERT INTO users(username, password, email) VALUES('${username}', '${password}', '${email}')`)
    res.status(201).json({message: "Data created", data})
    return

}    
if(req.method === "GET"){
    const data = await excuteQuery(`SELECT * from users`)
    res.status(201).json({message: "data fetched", data})
    return
}
else {
    res.status(500).json({message: "Route not valid"})
}
}

export default handler