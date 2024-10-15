import { eq } from "drizzle-orm";
import { db } from "../db";
import { tasks } from '../db/schema'
import { UpdateTodoRequest } from "../types/request";

export async function updateTodo({id, title, description}: UpdateTodoRequest) {
    if(!title || !description) {
        throw new Error('Todos os campos devem estar preenchidos')
    }

    const updatedTodo = await db.update(tasks).set({title, description}).where(eq(tasks.id, id)).returning()

    return {
        updatedTodo
    }
}