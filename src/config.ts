import { z } from 'zod'

const ConfigSchema = z.object({
  GITLAB_HOST: z.string().min(1, { message: 'GITLAB_HOST is required' }),
  GITLAB_TOKEN: z.string().min(1, { message: 'GITLAB_TOKEN is required' }),
})

export const config = ConfigSchema.parse({
  GITLAB_HOST: Bun.env.GITLAB_HOST!,
  GITLAB_TOKEN: Bun.env.GITLAB_TOKEN!,
})
