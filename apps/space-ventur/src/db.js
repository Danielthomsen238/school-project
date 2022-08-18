import mysql from 'serverless-mysql'

const db = mysql({
    config: {
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,

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