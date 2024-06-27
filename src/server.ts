import { webhooks } from './webhooks'

const server = Bun.serve({
  port: 3000,
  async fetch(req) {
    await webhooks(req)

    return Response.json({
      status: 'ok',
    })
  },
})

// eslint-disable-next-line no-console
console.log(`Listening on http://localhost:${server.port} ...`)
