import mysql from 'serverless-mysql'

const db = mysql({
    config: {
      host: "us-cdbr-east-05.cleardb.net",
      user: "b383be7174c3f1",
      password: "f33b8a09",
      database: "heroku_d6c99038e4c6713",

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