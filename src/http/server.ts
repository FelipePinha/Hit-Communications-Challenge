import fastify from "fastify";
// import type { FastifyReply, FastifyRequest } from 'fastify'
// import { CreateTodoRequest, DeleteTodoRequest, MarkAsCompletedRequest, UpdateTodoRequest } from "../types/request";
// import { createTodo } from "../functions/create-todo";
// import { listTodos } from "../functions/list-todos";
// import { deleteTodo } from "../functions/delete-todo";
// import { updateTodo } from "../functions/update-todo";
// import { completeTodo } from "../functions/complete-todo";
import { routes } from "./routes";

export const app = fastify()

app.register(routes)

app.listen({
    port: 8080
}, (err, address) => {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`server running at port ${address}`)
})