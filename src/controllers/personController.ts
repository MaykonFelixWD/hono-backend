import { Context } from "hono";
import { z, ZodError } from "zod";
import { createPerson, getAllpersons } from "../models/personModel";

const personSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const addPerson = async (c: Context) => {
  try {
    const { name, age } = personSchema.parse(await c.req.json());

    const newPerson = await createPerson(name, age);


    return c.json(newPerson);
  } catch (err) {
    if (err instanceof ZodError) {
      return c.json({ error: err.errors }, 400);
    }
    return c.json({ error: "Erro desconhecido" }, 500);
  }
};

const getPersons = async (c: Context) => {
  try {
    const persons = await getAllpersons();
    return c.json(persons);
  } catch (err) {
    return c.json({ errro: "Erro ao buscar pessoas" }, 500);
  }
};

export { addPerson, getPersons };
