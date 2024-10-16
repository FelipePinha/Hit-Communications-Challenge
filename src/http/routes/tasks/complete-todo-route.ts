import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { completeTodo } from "../../../functions/complete-todo";

export function completeTodoRoute(app: FastifyInstance) {
    app.patch('/tasks/:id/complete', async (req: FastifyRequest<{Params: { id: string }}>, reply: FastifyReply) => {
        const { id } = req.params
    
        const todo = await completeTodo(id)
    
        reply.send(todo)
    })
}