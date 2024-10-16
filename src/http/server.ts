import fastify from "fastify";
import { routes } from "./routes";

export const app = fastify()

app.register(routes)

app.listen({
    port: 8080
}, (err, address) => {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`server running at port ${address}`)
})