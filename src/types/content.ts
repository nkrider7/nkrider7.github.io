import type { ComponentType } from 'react'

export interface ContentMeta {
  title: string
  description?: string
  /** ISO YYYY-MM-DD */
  date?: string
  order?: number
}

export interface ContentEntry {
  slug: string
  meta: ContentMeta
  Component: ComponentType
}

export interface MdxModule {
  default: ComponentType
  meta: ContentMeta
}
