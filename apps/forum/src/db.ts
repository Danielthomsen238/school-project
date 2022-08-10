import mysql from 'serverless-mysql'

const db = mysql({
    config: {
        host: "localhost",
        user: "root",
        password: "root",
        database: "test",

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