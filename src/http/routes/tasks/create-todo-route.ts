import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { CreateTodoRequest } from "../../../types/request"
import { createTodo } from "../../../functions/create-todo"

export function createTodoRoute(app: FastifyInstance) {
    app.post('/tasks', async (req: FastifyRequest<{Body: CreateTodoRequest}>, reply: FastifyReply) => {
        const { title, description } = req.body
    
       const todo = await createTodo({title, description})
    
       reply.status(201).send(todo)
    })
}