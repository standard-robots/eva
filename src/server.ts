import { api } from './api'

const server = Bun.serve({
  port: 3000,
  async fetch() {
    return Response.json({
      title: 'Bun',
      description: 'A simple web server',
      projects: await api.Projects.all(),
    })
  },
})

// eslint-disable-next-line no-console
console.log(`Listening on http://localhost:${server.port} ...`)
