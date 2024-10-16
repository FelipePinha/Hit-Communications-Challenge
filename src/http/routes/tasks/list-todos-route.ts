import { FastifyInstance, FastifyReply } from "fastify"
import { listTodos } from "../../../functions/list-todos"

export function listTodosRoute(app: FastifyInstance) {
    app.get('/tasks', async (_, reply: FastifyReply) => {
        const todos = await listTodos()
    
        reply.send({data: todos})
    })
}