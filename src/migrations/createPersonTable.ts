import pool from "../db";

const createPersonTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS person (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL
    );
    `;

  await pool.query(query);
  console.log("Tabela person criada com sucesso!");
};

createPersonTable().catch((err) =>
  console.error("Erro ao criar tablea: ", err)
);
