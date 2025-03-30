# GitHub Profile Component

A modern, responsive React component built with Next.js and shadcn/ui to display GitHub profile information and top repositories.

## Features

- 📊 Live GitHub Contribution Graph
- 📌 Top Repositories Display (sorted by stars)
- 🎯 Repository Stats (stars and forks)
- 🌓 Dark/Light Theme Support
- 📱 Fully Responsive Design

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- GitHub REST API

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Update the GitHub username in `components/github-profile.tsx`:
```typescript
const response = await fetch("https://api.github.com/users/YOUR-USERNAME/repos")
```
4. Run the development server:
```bash
npm run dev
```

## Component Usage

```tsx
import GithubProfile from '@/components/github-profile'

export default function Page() {
  return <GithubProfile />
}
```

## Customization

- Colors can be modified in `app/globals.css`
- Component styling uses Tailwind CSS classes
- Dark/Light theme support through shadcn/ui

## API Reference

The component uses the following GitHub API endpoints:
- Repository data: `https://api.github.com/users/{username}/repos`
- Contribution graph: `https://ghchart.rshah.org/{username}`

## License

MIT License
