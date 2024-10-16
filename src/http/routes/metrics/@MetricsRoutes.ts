import { app } from '../../server'
import { listMetricsRoute } from './list-metrics-route'

export function MetricsRoutes() {
    app.register(listMetricsRoute)
}