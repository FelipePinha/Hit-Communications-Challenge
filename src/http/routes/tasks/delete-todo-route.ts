import { FastifyInstance, FastifyRequest } from "fastify";
import { deleteTodo } from "../../../functions/delete-todo";

export function deleteTodoRoute(app: FastifyInstance) {
    app.delete('/tasks/:id', async (req: FastifyRequest<{Params: { id: string }}>) => {
        const { id } = req.params
    
        await deleteTodo(id)
    })
}