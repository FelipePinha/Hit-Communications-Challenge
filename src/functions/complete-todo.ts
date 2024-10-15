import { eq } from "drizzle-orm";
import { db } from "../db";
import { tasks } from '../db/schema'
import { MarkAsCompletedRequest } from "../types/request";

export async function completeTodo({id}: MarkAsCompletedRequest) {
    const todo = await db.update(tasks).set({isCompleted: true}).where(eq(tasks.id, id)).returning()

    return {
        todo
    }
}