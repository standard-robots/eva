import { api } from '@/api'

export async function listProjects() {
  return api.Projects.all()
}
