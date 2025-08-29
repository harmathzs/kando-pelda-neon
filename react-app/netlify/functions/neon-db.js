import { neon } from '@netlify/neon';

export const handler = async () => {
    const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
    const catId = 1;
    const [post] = await sql`SELECT * FROM cats WHERE id = ${catId}`;

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello Neon-DB!',
            'QueryResult': post,
        }),
    }
}