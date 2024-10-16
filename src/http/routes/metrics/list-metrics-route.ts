import { FastifyInstance, FastifyReply } from "fastify"
import { listMetrics } from "../../../functions/list-metrics"

export function listMetricsRoute(app: FastifyInstance) {
    app.get('/metrics', async (_, reply: FastifyReply) => {
        const metrics = await listMetrics()

        reply.send(metrics)
    })
}