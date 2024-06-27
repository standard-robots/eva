import mitt from 'mitt'
import type { GitlabAPIResponse, WebhookCommitNoteEventSchema, WebhookIssueEventSchema, WebhookIssueNoteEventSchema, WebhookJobEventSchema, WebhookMergeRequestEventSchema, WebhookMergeRequestNoteEventSchema, WebhookPipelineEventSchema, WebhookPushEventSchema, WebhookReleaseEventSchema, WebhookSnippetNoteEventSchema, WebhookTagEventSchema, WebhookWikiEventSchema } from '@gitbeaker/rest'
import type { WebhookEventType } from './types'

// eslint-disable-next-line ts/consistent-type-definitions
type WebhookEvents = {
  [WebhookEventType.Issue]: WebhookIssueEventSchema
  [WebhookEventType.Job]: WebhookJobEventSchema
  [WebhookEventType.MergeRequest]: WebhookMergeRequestEventSchema
  [WebhookEventType.Note]:
    | WebhookCommitNoteEventSchema
    | WebhookMergeRequestNoteEventSchema
    | WebhookIssueNoteEventSchema
    | WebhookSnippetNoteEventSchema
  [WebhookEventType.Pipeline]: WebhookPipelineEventSchema
  [WebhookEventType.Push]: WebhookPushEventSchema
  [WebhookEventType.Release]: WebhookReleaseEventSchema
  [WebhookEventType.TagPush]: WebhookTagEventSchema
  [WebhookEventType.WikiPage]: WebhookWikiEventSchema
}

export const webhookEmitter = mitt<WebhookEvents>()
