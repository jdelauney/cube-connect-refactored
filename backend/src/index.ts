import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/healthy', (c) => {
  return c.text('Hello Healthy Hono!')
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
