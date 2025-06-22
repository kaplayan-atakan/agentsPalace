# AgentsPalace Component Guidelines

## Component Structure Standards

All components in AgentsPalace should follow these structural patterns for consistency and maintainability.

### Basic Component Structure

```tsx
'use client';  // Only if using client-side features

import { ComponentSpecificImports } from 'libraries';
import { useState, useEffect } from 'react';  // Only if needed

export default function ComponentName() {
  // State management at the top
  const [state, setState] = useState(initialValue);
  
  // Effects follow state
  useEffect(() => {
    // Effect logic
  }, [dependencies]);
  
  // Helper functions/handlers
  const handleEvent = () => {
    // Handler logic
  };
  
  // Return the JSX
  return (
    <section className="component-specific-container-class">
      {/* Components should have semantic HTML structure */}
      {/* Include ARIA attributes for accessibility */}
    </section>
  );
}
```

### Animation Standards

- Use Framer Motion for complex animations
- Use Tailwind's animation utilities for simple animations
- Keep animations subtle and purposeful
- Respect user preferences for reduced motion

### Styling Guidelines

1. Use Tailwind CSS for styling
2. Follow the color system defined in `tailwind.config.js`
3. Use custom utility classes defined in `globals-new.css` for consistent effects
4. Use the style guide as a reference for component styling

### Component Props Patterns

```tsx
// Use TypeScript interfaces for props
interface ComponentProps {
  title: string;
  description?: string;  // Optional props with ?
  items: Array<Item>;
  onAction: (id: string) => void;
}

export default function Component({
  title,
  description = 'Default description',  // Default values
  items,
  onAction
}: ComponentProps) {
  // Component logic
}
```

## Accessibility Standards

- All images must have `alt` text
- Use semantic HTML elements (`<button>`, `<nav>`, etc.)
- Include ARIA attributes where appropriate
- Ensure keyboard navigation works
- Maintain sufficient color contrast
- Test with screen readers

## Responsive Design Patterns

- Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- Design mobile-first, then enhance for larger screens
- Test components at all breakpoints

## Performance Considerations

- Lazy load images and heavy components
- Memoize expensive calculations with `useMemo`
- Use `useCallback` for function references
- Keep component state as minimal as possible

## Component Examples

### Hero Section

```tsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center" aria-label="Hero section">
      {/* Background elements */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Content */}
        <h1 className="font-orbitron text-4xl md:text-6xl font-bold text-glow-purple">Title</h1>
        <p className="mt-4 text-xl">Description text</p>
        <div className="mt-8">
          <button 
            className="cyber-button px-6 py-3"
            onClick={() => {}} 
            aria-label="Call to action"
          >
            Action
          </button>
        </div>
      </div>
    </section>
  );
}
```

### Feature Card

```tsx
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="glassmorphism p-6 rounded-lg">
      <div className="mb-4 text-cyber-green">
        {icon}
      </div>
      <h3 className="font-orbitron text-xl mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
```

## Testing Guidelines

1. Write unit tests for complex logic
2. Test component rendering with React Testing Library
3. Verify accessibility with automated tools
4. Conduct manual tests following the checklist in `tests/manual-test-checklist.md`

## Documentation Requirements

Each component should have:

1. A clear purpose and responsibility
2. Documented props (if applicable)
3. Examples of usage
4. Notes on any unusual behavior or edge cases

## Folder Structure

```
src/
├── components/
│   ├── ui/              # Small, reusable UI components
│   ├── layout/          # Layout components
│   └── sections/        # Page-specific sections
├── app/                 # Next.js App Router
├── lib/                 # Utilities and helpers
└── hooks/               # Custom React hooks
```
