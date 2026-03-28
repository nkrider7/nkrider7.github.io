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
  {
    id: 'hd-first-website',
    title: 'HD - First website',
    description:
      'My first website built with HTML, CSS, and JavaScript, then deployed on GitHub Pages.',
    tags: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
    href: 'https://nkrider7.github.io/HD/',
  },
  {
    id: 'proj-cpp-showcase',
    title: 'College C++ showcase',
    description:
      'A college showcase website for C++ code projects, built using HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'C++'],
    href: 'https://nkrider7.github.io/PROJ/',
  },
  {
    id: 'nk-twitter-embed',
    title: 'Twitter embed webpage',
    description:
      'A webpage to display embedded Twitter/X posts using a clean HTML, CSS, and JavaScript layout.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Social Embed'],
    href: 'https://nkrider7.github.io/nk/',
  },
  {
    id: 'online-suraksha',
    title: 'Online Suraksha website',
    description:
      'A community-focused awareness website built with HTML, CSS, and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Community'],
    href: 'https://nkrider7.github.io/os/',
  },
  {
    id: 'rapidcuts',
    title: 'RapidCuts coding resources',
    description:
      'A coding-learning resources project on GitHub with website content and documentation.',
    tags: ['HTML', 'CSS', 'JavaScript', 'README', 'GitHub'],
    href: 'https://github.com/nkrider7/rapidcuts',
  },
  {
    id: 'cyber-generator',
    title: 'CyberGenerator wordlist web app',
    description:
      'A password wordlist generator web app built with React, Vite, and JavaScript.',
    tags: ['React', 'Vite', 'JavaScript', 'Web App'],
    href: 'https://cybergenerator.netlify.app/',
  },
  {
    id: 'myport-second-portfolio',
    title: 'MyPort - second portfolio',
    description:
      'My second portfolio site built with React and Vite, focused on improved UI/UX design.',
    tags: ['React', 'Vite', 'UI/UX', 'Portfolio'],
    href: 'https://nkrider7.github.io/myport/',
  },
  {
    id: 'myntra-explainer',
    title: 'Website workflow explainer',
    description:
      'A simple project to help friends understand how websites work and how deployment is done.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Deployment'],
    href: 'https://nkrider7.github.io/myntra/',
  },
  {
    id: 'certificate-generator',
    title: 'Certificate generator',
    description:
      'A certificate generator built with HTML, CSS, JavaScript, and a PDF npm library.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PDF', 'npm'],
    href: 'https://nkrider7.github.io/certificate/',
  },
  {
    id: 'colorgen-gradient-generator',
    title: 'Colorgen - gradient generator',
    description:
      'A gradient generator website for creating and previewing color combinations quickly.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Design Tool'],
    href: 'https://nkrider7.github.io/colorgen/',
  },
  {
    id: 'blog-website-ejs-node-mongo',
    title: 'Blog website (read/write posts)',
    description:
      'A full-stack blog project for reading and writing posts using EJS, JavaScript, Node.js, and MongoDB.',
    tags: ['EJS', 'JavaScript', 'Node.js', 'MongoDB'],
    href: 'https://github.com/nkrider7/Bharat-Intern-/tree/main/TASK2_bharatintern',
  },
  {
    id: 'osc-certificate-generator',
    title: 'Online Suraksha certificate generator',
    description:
      'Certificate generator for the Online Suraksha community, built with HTML, CSS, JavaScript, and a PDF library.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PDF', 'Community'],
    href: 'https://nkrider7.github.io/osc/',
  },
  {
    id: 'chaemini-frontend',
    title: 'Chaemini Frontend (open source)',
    description:
      'Open-source contribution: AI assistance product UI built with React, Tailwind CSS, and a strong focus on UX.',
    tags: ['React', 'Tailwind', 'UI/UX', 'Open Source'],
    href: 'https://github.com/nkrider7/Chaemini-Frontend',
  },
  {
    id: 'expenses-tracker',
    title: 'Expense tracker',
    description:
      'A personal expense tracking app built with Next.js, React, and Tailwind CSS.',
    tags: ['Next.js', 'React', 'Tailwind'],
    href: 'https://github.com/nkrider7/Expenses-tracker',
  },
  {
    id: 'digitalkosh-crypto',
    title: 'DigitalKosh — crypto tracker',
    description:
      'A crypto tracking web app with Firebase authentication and live market data from the CoinGecko API.',
    tags: ['React', 'Firebase', 'CoinGecko', 'Web App'],
    href: 'https://digitalkosh.netlify.app/',
  },
  {
    id: 'nofees-learning',
    title: 'Nofees — free coding & learning',
    description:
      'A free coding and learning web app using Next.js, React, and the YouTube API to surface educational content.',
    tags: ['Next.js', 'React', 'YouTube API', 'Education'],
    href: 'https://nofees.vercel.app/',
  },
]
