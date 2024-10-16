import { eq } from "drizzle-orm";
import { db } from "../db";
import { tasks } from '../db/schema'

export async function deleteTodo(id : string) {
    await db.delete(tasks).where(eq(tasks.id, id))
}