import { FastifyInstance, FastifyRequest } from "fastify";
import { DeleteTodoRequest } from "../../../types/request";
import { deleteTodo } from "../../../functions/delete-todo";

export function deleteTodoRoute(app: FastifyInstance) {
    app.delete('/tasks/:id', async (req: FastifyRequest<{Params: DeleteTodoRequest}>) => {
        const { id } = req.params
    
        await deleteTodo({id})
    })
}