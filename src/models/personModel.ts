import pool from "../db";

interface Person {
  id: number;
  name: string;
  age: number;
}

const createPerson = async (
  name: string,
  age: number
): Promise<Person | null> => {
  const query = "INSERT INTO person (name, age) VALUES ($1, $2) RETURNING *";
  const values = [name, age];

  try {
    const res = await pool.query(query, values);
    return res.rows[0];
  } catch (err) {
    console.error(err);
    return null;
  }
};

const getAllpersons = async (): Promise<Person[]> => {
  const query = "SELECT * FROM person";
  const res = await pool.query(query);
  return res.rows;
};

export { createPerson, getAllpersons, Person };
