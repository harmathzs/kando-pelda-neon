import { neon } from '@netlify/neon';

export const handler = async () => {
  try {
    const sql = neon();
    const catId = 1;
    const [post] = await sql`SELECT * FROM cats WHERE id = ${catId}`;
    console.log('post', post);
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello Neon-DB!',
        QueryResult: post,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error querying Neon-DB',
        error: error.message || String(error),
      }),
    };
  }
};
