export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  href: string
  imageUrl?: string
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio & knowledge site',
    description:
      'This site: React, Vite, MDX content discovery, and GitHub Pages hosting.',
    tags: ['React', 'Vite', 'MDX', 'Tailwind'],
    href: 'https://github.com/nkrider7/nkrider7.github.io',
  },
  {
    id: 'github',
    title: 'Open source work',
    description:
      'Experiments and apps on GitHub — React, React Native, and tooling.',
    tags: ['GitHub', 'TypeScript'],
    href: 'https://github.com/nkrider7',
  },
]
