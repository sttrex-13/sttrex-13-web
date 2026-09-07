export type Activity = {
  slug: string
  title: string
  type: 'activity' | 'volunteer'
  role?: string
  date?: string
  summary?: string
  about?: string
  details?: string[]
  links?: {
    url: string
    label: string
  }[]
  images?: string[]
}
