import { count, eq, sql } from "drizzle-orm";
import { db } from "../db";
import { tasks } from "../db/schema";

export async function listMetrics() {
    const totalTasks = db.$with('total_tasks').as(
        db.select({ count: count() }).from(tasks)
    )

    const totalCompletedTasks = db.$with('total_completed_tasks').as(
        db.select({count: count()}).from(tasks).where(eq(tasks.isCompleted, true))
    )

    const totalPendingTasks = db.$with('total_pending_tasks').as(
        db.select({count: count()}).from(tasks).where(eq(tasks.isCompleted, false))
    )

    const metrics = await db
        .with(totalTasks, totalCompletedTasks, totalPendingTasks)
        .select({
            data: sql`
                COALESCE(
                    ARRAY_AGG(
                        json_build_object(
                            'totalTasks', total_tasks,
                            'totalCompletedTasks', total_completed_tasks,
                            'totalPendingTasks', total_pending_tasks
                        )
                    )
                )
            `
        })
        .from(sql`total_tasks, total_completed_tasks, total_pending_tasks`)

    return {
        metrics
    }
}