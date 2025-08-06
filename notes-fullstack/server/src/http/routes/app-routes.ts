import { FastifyInstance } from "fastify";
import { createNotesRoute } from "./controllers/create-notes-route";

export async function appRoutes(app: FastifyInstance) {
    app.post('/notes', createNotesRoute)
}