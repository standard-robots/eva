import to from 'await-to-js'
import { webhookEmitter } from './event'
import type { WebhookEventType } from './types'

export async function webhooks(request: Request) {
  const headers = request.headers

  const event = headers.get('x-gitlab-event')

  if (!event)
    return

  const [_, body] = await to(request.json())

  webhookEmitter.emit(event as WebhookEventType, body)
}
