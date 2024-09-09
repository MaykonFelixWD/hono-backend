import { Hono } from "hono";
import { addPerson, getPersons } from "../controllers/personController";

const router = new Hono();

router.post("/person", addPerson);
router.get("/person", getPersons);

export default router;
