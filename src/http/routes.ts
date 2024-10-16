import { MetricsRoutes } from "./routes/metrics/@MetricsRoutes";
import { TasksRoutes } from "./routes/tasks/@TasksRoutes";
import { app } from "./server";

export async function routes() {
    app.register(TasksRoutes)
    app.register(MetricsRoutes)
}