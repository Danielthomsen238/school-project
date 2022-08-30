import mysql from "serverless-mysql"

const db = mysql({
    config: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB
    }
})

export default async function excuteQuery(query) {
    try {
        const results = await db.query(query)
        await db.end()
        return results
    }
    catch (error) {
        return { error }
    }
}