export interface FavoriteSite {
  id: string
  title: string
  url: string
  description: string
}

export const favoriteSites: FavoriteSite[] = [
  {
    id: 'rust-book',
    title: 'The Rust Book',
    url: 'https://doc.rust-lang.org/book/',
    description: 'Official Rust language introduction.',
  },
  {
    id: 'mdn',
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org/',
    description: 'Web platform documentation.',
  },
  {
    id: 'vite',
    title: 'Vite',
    url: 'https://vite.dev/',
    description: 'Fast frontend tooling.',
  },
]
