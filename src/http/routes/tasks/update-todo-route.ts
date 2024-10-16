import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { CreateTodoRequest } from "../../../types/request";
import { updateTodo } from "../../../functions/update-todo";

export function updateTodoRoute(app: FastifyInstance) {
    app.put('/tasks/:id', async (req: FastifyRequest<{Params: {id: string}, Body: CreateTodoRequest}>, reply: FastifyReply) => {
        const { id } = req.params
        const { title, description } = req.body
    
        const todo = await updateTodo({id, title, description})
        
        reply.send(todo)
    })
    
}