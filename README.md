# GitHub Profile Component

A modern, responsive React component built with Next.js and shadcn/ui to display GitHub profile information and top repositories. This component provides an elegant way to showcase your GitHub presence on any website.

## Features

- 📊 Live GitHub Contribution Graph with interactive tooltips
- 📌 Top Repositories Display (sorted by stars)
- 🎯 Detailed Repository Stats (stars, forks, and watchers)
- 🌓 Dark/Light Theme Support with system preference detection
- 📱 Fully Responsive Design for all screen sizes
- 🚀 Fast and Optimized Performance
- 🔄 Auto-refresh capability
- 🔒 Rate Limit Aware

## Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- GitHub account
- Personal Access Token (for increased API rate limits)

## Tech Stack

- Next.js 13+ (App Router)
- TypeScript 5.x
- Tailwind CSS
- shadcn/ui Components
- GitHub REST API v3
- React Query (for data fetching)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/github-profile-component.git
cd github-profile-component
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file:
```bash
GITHUB_ACCESS_TOKEN=your_github_personal_access_token
GITHUB_USERNAME=your_github_username
```

4. Update configuration (optional):
```bash
npm run setup
```

## Usage

### Basic Implementation
```tsx
import GithubProfile from '@/components/github-profile'

export default function Page() {
  return <GithubProfile />
}
```

### With Custom Configuration
```tsx
import GithubProfile from '@/components/github-profile'

export default function Page() {
  return (
    <GithubProfile 
      username="custom-username"
      theme="dark"
      maxRepos={6}
      showContributions={true}
    />
  )
}
```

## Configuration Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| username | string | process.env.GITHUB_USERNAME | GitHub username |
| theme | 'light' \| 'dark' \| 'system' | 'system' | Color theme |
| maxRepos | number | 6 | Maximum repositories to display |
| showContributions | boolean | true | Show contribution graph |

## Customization

### Styling
- Modify theme colors in `tailwind.config.js`
- Override component styles in `app/globals.css`
- Custom themes available through shadcn/ui configuration

### Component Structure
```
components/
├── github-profile/
│   ├── index.tsx
│   ├── contribution-graph.tsx
│   ├── repository-card.tsx
│   └── profile-header.tsx
```

## API Integration

The component utilizes the following GitHub API endpoints:

### Repositories
```
GET https://api.github.com/users/{username}/repos
```

### User Profile
```
GET https://api.github.com/users/{username}
```

### Contribution Graph
```
GET https://ghchart.rshah.org/{username}
```

## Rate Limiting

- Unauthenticated: 60 requests/hour
- Authenticated: 5,000 requests/hour
- Uses local storage caching to optimize API calls

## Troubleshooting

Common issues and solutions:

1. API Rate Limit
```bash
# Add authentication token to .env.local
GITHUB_ACCESS_TOKEN=your_token
```

2. CORS Issues
```typescript
// Add proxy configuration to next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/github/:path*',
        destination: 'https://api.github.com/:path*',
      },
    ]
  },
}
```

## Project Architecture

### Directory Structure
```
nextjs-github-profile/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── github-profile/
├── lib/
│   ├── utils.ts
│   └── api-utils.ts
└── types/
    └── index.ts
```

### Core Components
- `GithubProfile`: Main container component
- `ContributionGraph`: Renders GitHub activity heatmap
- `RepositoryCard`: Individual repository display
- `ContactForm`: User interaction component

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```bash
# GitHub Configuration
GITHUB_ACCESS_TOKEN=your_personal_access_token
GITHUB_USERNAME=your_github_username

# API Rate Limiting
RATE_LIMIT_MAX=5000
CACHE_DURATION=3600

# Contact Form Configuration
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASSWORD=your_smtp_password
CONTACT_EMAIL=recipient@example.com
```

### Setting up GitHub Access Token
1. Go to GitHub Settings > Developer Settings
2. Select "Personal Access Tokens" > "Tokens (classic)"
3. Generate new token with following permissions:
   - `repo` (read access)
   - `user` (read access)

## Contact Form Integration

### Setup
1. Install required dependencies:
```bash
npm install nodemailer @types/nodemailer
```

2. Create contact form API route:
```typescript
// app/api/contact/route.ts
export async function POST(req: Request) {
  // Implement email sending logic
}
```

### Usage Example
```tsx
<ContactForm 
  endpoint="/api/contact"
  defaultSubject="GitHub Profile Inquiry"
  rateLimit={5}
/>
```

## Advanced Configuration

### Cache Configuration
```typescript
// lib/cache-config.ts
export const cacheConfig = {
  staleTime: 60 * 1000, // 1 minute
  cacheTime: 3600 * 1000, // 1 hour
}
```

### API Rate Limiting
```typescript
// lib/api-utils.ts
export const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}
```

## Testing

1. Unit Tests:
```bash
npm run test
```

2. Integration Tests:
```bash
npm run test:integration
```

3. E2E Tests:
```bash
npm run test:e2e
```

## Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Manual Deployment
```bash
npm run build
npm run start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Performance Optimization

- Implements React.memo for component memoization
- Uses SWR for efficient data fetching
- Optimized image loading with next/image
- Lazy loading for off-screen content

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- GitHub API Documentation
- shadcn/ui Component Library
- Next.js Team
- Contributors and Maintainers

## Support

For support, issues, or feature requests:
- Create an issue in the GitHub repository
- Contact: your.email@example.com
