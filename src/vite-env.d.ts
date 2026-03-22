/// <reference types="vite/client" />

import type { ContentMeta } from './types/content'
import type { FC } from 'react'

declare module '*.mdx' {
  export const meta: ContentMeta
  const MDXComponent: FC
  export default MDXComponent
}
