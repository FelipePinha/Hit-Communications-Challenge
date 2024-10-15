import fastify from "fastify";
import type { FastifyReply, FastifyRequest } from 'fastify'
import { CreateTodoRequest, DeleteTodoRequest } from "../types/request";
import { createTodo } from "../functions/create-todo";
import { listTodos } from "../functions/list-todos";
import { deleteTodo } from "../functions/delete-todo";

const app = fastify()

app.get('/tasks', async (_, reply: FastifyReply) => {
    const todos = await listTodos()

    reply.send({data: todos})
})

app.post('/tasks', async (req: FastifyRequest<{Body: CreateTodoRequest}>, reply: FastifyReply) => {
    const { title, description } = req.body

   const todo = await createTodo({title, description})

   reply.status(201).send(todo)
})

app.delete('/tasks/:id', async (req: FastifyRequest<{Params: DeleteTodoRequest}>, reply: FastifyReply) => {
    const { id } = req.params

    await deleteTodo({id})
})

app.listen({
    port: 8080
}, (err, address) => {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`server running at port ${address}`)
})