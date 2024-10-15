import { eq } from "drizzle-orm";
import { db } from "../db";
import { tasks } from '../db/schema'
import { DeleteTodoRequest } from "../types/request";

export async function deleteTodo({ id }: DeleteTodoRequest) {
    await db.delete(tasks).where(eq(tasks.id, id))
}