import { db } from "../db";
import { tasks } from '../db/schema'
import { CreateTodoRequest } from "../types/request";

export async function createTodo({title, description}: CreateTodoRequest) {
    if(!title || !description) {
        throw new Error('Todos os campos devem ser preenchidos!')
    }
    
    const todo = await db.insert(tasks).values({title, description}).returning()

    return {
        todo
    }
}