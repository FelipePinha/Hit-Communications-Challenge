import fastify from "fastify";

const app = fastify()

app.get('/ping', async () => {
    return 'pong'
})

app.listen({
    port: 8080
}, (err, address) => {
    if(err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`server running at port ${address}`)
})