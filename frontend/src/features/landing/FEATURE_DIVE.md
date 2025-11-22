# Feature Dive: Landing Page

**Directory**: `src/features/landing`

## Overview
The Landing Page is the public-facing entry point of the application. It serves to introduce the AI watermarking technology, explain how it works, and guide users to start using the tool or view the source code.

## Key Components
*   `Hero.tsx`: The top section with the main headline, value proposition, and primary CTAs ("Start Watermarking", "View on GitHub"). Uses a gradient background and Lucide icons.
*   `Features.tsx`: A grid layout displaying key selling points (Invisible Protection, Multi-Modal Support, etc.).
*   `HowItWorks.tsx`: A 3-step visual guide (Upload -> Apply -> Verify) to educate users on the process.
*   `Landing.tsx`: The route component that composes `Hero`, `Features`, and `HowItWorks`. It also handles SEO metadata via the `Head` component.

## State Management
### Local State
*   None. The landing page is currently static and presentational.

### Global State (Redux)
*   None.

### Server State (React Query)
*   None.

## API Interactions
*   None. This feature is purely static content for now.

## Tricky Details
*   **SEO**: Uses `react-helmet-async` (via `src/components/Head`) to inject `<title>` and `<meta name="description">` tags.
*   **Styling**: Heavily relies on Tailwind CSS utility classes for layout and typography. The `Hero` component uses a custom gradient `bg-gradient-to-b` to blend with the rest of the page.
