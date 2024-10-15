import fastify from "fastify";
import type { FastifyRequest } from 'fastify'
import { CreateTodoRequest } from "../types/request";
import { createTodo } from "../functions/create-todo";

const app = fastify()

app.post('/tasks', async (req: FastifyRequest<{Body: CreateTodoRequest}>, rep) => {
    const { title, description } = req.body

   const todo = await createTodo({title, description})

   rep.status(201).send(todo)
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