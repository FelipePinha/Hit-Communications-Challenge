import { eq } from "drizzle-orm";
import { db } from "../db";
import { tasks } from '../db/schema'

export async function completeTodo(id: string) {
    const todo = await db.update(tasks).set({isCompleted: true}).where(eq(tasks.id, id)).returning()

    return {
        todo
    }
}