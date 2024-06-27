import { Gitlab } from '@gitbeaker/rest'
import { config } from './config'

export const api = new Gitlab({
  host: config.GITLAB_HOST,
  token: config.GITLAB_TOKEN,
})
