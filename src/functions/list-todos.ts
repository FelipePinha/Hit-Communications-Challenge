import { db } from "../db";
import { tasks } from '../db/schema'

export async function listTodos() {
    const todos = await db.select().from(tasks)

    return todos
}