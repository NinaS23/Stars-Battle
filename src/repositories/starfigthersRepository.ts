import { connection } from "../database/database.js";


  export async function findFigterByUsername(username) {
    const result = await connection.query(
      `
        SELECT * 
        FROM fighters 
        WHERE  username = $1;
      `,
      [username]
    );
    return result.rows;
  }


export async function insertFigter(username: string) {
  const result = await connection.query(
    `
    INSERT INTO fighters (username, wins, losses, draws) 
    VALUES ($1, 0, 0, 0)
    RETURNING id;
  `,
    [username]
  );

  return result.rows[0];
}