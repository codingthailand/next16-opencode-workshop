# AGENTS.md

## Commands
- **Build**: `npm run build`
- **Dev**: `npm run dev` 
- **Start**: `npm run start`
- **Lint**: `npm run lint`
- **Test**: No test framework configured

## Next.js 16 Features
- **Cache Components**: Enabled via `cacheComponents: true` in next.config.ts
- **Partial Prerendering**: Static shell with dynamic content streaming
- **Directives**: Use `use cache` for component-level caching, `cacheLife()` for duration
- **Cache Management**: `cacheTag()`, `revalidateTag()`, `updateTag()` for invalidation
- **Suspense Boundaries**: Required for dynamic content and runtime data access

## Code Style Guidelines

### Imports & Formatting
- Use `@/*` path aliases for internal imports
- Import React components with `import * as React from "react"`
- Use `cn()` utility from `@/lib/utils` for className merging
- Follow Next.js App Router conventions

### TypeScript
- Strict mode enabled
- Use interfaces for type definitions in `lib/types.ts`
- Prefer explicit typing for props and function returns
- Use `Readonly` for immutable props where appropriate

### Component Conventions
- Use PascalCase for component names
- Export components as default
- Use Radix UI primitives with class-variance-authority for variants
- Implement responsive design with Tailwind CSS breakpoints
- Cache Components: Add `'use cache'` directive and `cacheLife()` for static content
- Dynamic content: Wrap in `<Suspense fallback={...}>` boundaries

### Error Handling
- Use Next.js error boundaries (error.tsx) and loading states (loading.tsx)
- Follow Cache Components error patterns for uncached data access
- Implement proper fallback UI for Suspense boundaries