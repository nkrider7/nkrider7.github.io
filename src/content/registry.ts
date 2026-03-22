import type { ContentEntry, MdxModule } from '@/types/content'

const learningRaw = import.meta.glob<MdxModule>('../../content/learning/*.mdx', {
  eager: true,
})

const logsRaw = import.meta.glob<MdxModule>('../../content/logs/*.mdx', {
  eager: true,
})

function slugFromGlobPath(path: string): string {
  const file = path.split('/').pop() ?? path
  return file.replace(/\.mdx$/i, '')
}

function parseLogDateFromSlug(slug: string): string | undefined {
  const m = /^(\d{4}-\d{2}-\d{2})$/.exec(slug)
  return m ? m[1] : undefined
}

function buildEntries(map: Record<string, MdxModule>): ContentEntry[] {
  return Object.entries(map).flatMap(([path, mod]) => {
    const slug = slugFromGlobPath(path)
    if (!mod?.default || !mod.meta?.title) {
      if (import.meta.env.DEV) {
        console.warn(
          `[content] Skipping "${path}": MDX must export const meta = { title: "..." } and a default component. Do not wrap the file in markdown code fences (\`\`\`).`,
        )
      }
      return []
    }
    return [
      {
        slug,
        meta: mod.meta,
        Component: mod.default,
      },
    ]
  })
}

export const learningEntries: ContentEntry[] = buildEntries(learningRaw).sort(
  (a, b) => {
    const oa = a.meta.order ?? 999
    const ob = b.meta.order ?? 999
    if (oa !== ob) return oa - ob
    return (a.meta.title ?? '').localeCompare(b.meta.title ?? '')
  },
)

export const logEntries: ContentEntry[] = buildEntries(logsRaw).map((entry) => {
  const date = entry.meta.date ?? parseLogDateFromSlug(entry.slug)
  return {
    ...entry,
    meta: { ...entry.meta, date: date ?? entry.meta.date },
  }
})

export function getLearningBySlug(slug: string): ContentEntry | undefined {
  return learningEntries.find((e) => e.slug === slug)
}

export function getLogBySlug(slug: string): ContentEntry | undefined {
  return logEntries.find((e) => e.slug === slug)
}

export function logsGroupedByDate(): Map<string, ContentEntry[]> {
  const map = new Map<string, ContentEntry[]>()
  const sorted = [...logEntries].sort((a, b) => {
    const da = a.meta.date ?? ''
    const db = b.meta.date ?? ''
    return db.localeCompare(da)
  })
  for (const entry of sorted) {
    const key = entry.meta.date ?? entry.slug
    const list = map.get(key) ?? []
    list.push(entry)
    map.set(key, list)
  }
  return map
}
