import mysql from 'serverless-mysql'

const db = mysql({
    config: {
        host: "gateway01.eu-central-1.prod.aws.tidbcloud.com",
        user: "2Hzqq824Wybz8hi.root",
        password: "Qw21qw21",
        database: "School",
        port: 4000,

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