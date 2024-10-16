import { app } from '../../server'
import { createTodoRoute } from './create-todo-route'
import { listTodosRoute } from './list-todos-route'
import { updateTodoRoute } from './update-todo-route'
import { deleteTodoRoute } from './delete-todo-route'
import { completeTodoRoute } from './complete-todo-route'

export const TasksRoutes = async () => {
    app.register(createTodoRoute)
    app.register(listTodosRoute)
    app.register(updateTodoRoute)
    app.register(deleteTodoRoute)
    app.register(completeTodoRoute)
}