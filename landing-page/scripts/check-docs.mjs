/**
 * Documentation Updater Script
 * 
 * This script helps maintain documentation according to project guidelines.
 * It checks for documentation completeness and suggests updates.
 * 
 * @type {module}
 */

// This is an ES module script
// Run with: node --experimental-modules check-docs.js

import fs from 'fs';
import path from 'path';
import readline from 'readline';

// Configuration
const config = {
  rootDir: path.join(__dirname, '..'),
  docsDir: path.join(__dirname, '..', 'docs'),
  componentsDir: path.join(__dirname, '..', 'src', 'components'),
  requiredDocs: [
    'changelog.md',
    'development-history.md',
    'production-ready-checklist.md',
    path.join('adr', '0001-nextjs-framework-selection.md'),
    path.join('adr', '0002-tailwindcss-framer-motion-stack.md'),
    path.join('architecture', 'brand-tree.md'),
    path.join('architecture', 'component-diagram.md'),
    path.join('architecture', 'data-flow.md'),
    path.join('architecture', 'deployment-diagram.md'),
    path.join('architecture', 'system-architecture.md'),
  ],
};

// ANSI color codes for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
};

/**
 * Check if a file exists
 * @param {string} filePath - Path to file
 * @returns {boolean} - Whether file exists
 */
function fileExists(filePath) {  try {
    return fs.existsSync(filePath);
  } catch (_) {
    return false;
  }
}

/**
 * Check for required documentation files
 * @returns {Object} - Object containing results of check
 */
function checkRequiredDocs() {
  console.log(`${colors.blue}Checking required documentation files...${colors.reset}`);
  
  const results = {
    present: [],
    missing: [],
  };
  
  config.requiredDocs.forEach(doc => {
    const fullPath = path.join(config.docsDir, doc);
    
    if (fileExists(fullPath)) {
      results.present.push(doc);
    } else {
      results.missing.push(doc);
    }
  });
  
  return results;
}

/**
 * Check for components without documentation
 * @returns {Array} - Array of component names without documentation
 */
function checkComponentDocs() {
  console.log(`${colors.blue}Checking component documentation...${colors.reset}`);
  
  const componentFiles = [];
  
  function scanDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDir(fullPath);
      } else if (file.endsWith('.tsx') && !file.endsWith('.test.tsx')) {
        componentFiles.push(fullPath);
      }
    });
  }
  
  scanDir(config.componentsDir);
  
  const undocumentedComponents = [];
  
  componentFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    // Check if the component has JSDoc or substantial comments
    const hasDocumentation = content.includes('/**') && content.includes('*/');
    
    if (!hasDocumentation) {
      undocumentedComponents.push(path.relative(config.rootDir, file));
    }
  });
  
  return undocumentedComponents;
}

/**
 * Check if changelog is up to date
 * @returns {boolean} - Whether changelog appears to be up to date
 */
function checkChangelogUpToDate() {
  console.log(`${colors.blue}Checking if changelog is up-to-date...${colors.reset}`);
  
  const changelogPath = path.join(config.docsDir, 'changelog.md');
  
  if (!fileExists(changelogPath)) {
    return false;
  }
  
  const content = fs.readFileSync(changelogPath, 'utf8');
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  
  // Check if the changelog contains entries from the current month/year
  const currentMonthYearRegex = new RegExp(`##.*${currentYear}.*${currentMonth}`);
  return currentMonthYearRegex.test(content);
}

/**
 * Generate template for a missing documentation file
 * @param {string} docType - Type of documentation file
 * @returns {string} - Template content
 */
function generateTemplate(docType) {
  const currentDate = new Date().toISOString().split('T')[0];
  
  switch (docType) {
    case 'changelog.md':
      return `# Changelog

## [Unreleased]

## [0.1.0] - ${currentDate}

### Added
- Initial landing page setup
- Core components
- Tailwind CSS configuration
- Documentation structure

### Changed
- N/A

### Fixed
- N/A
`;
    
    case 'development-history.md':
      return `# Development History

## Project Timeline

### Phase 1: Initial Setup (${currentDate})
- Established project structure
- Created core component library
- Implemented styling system with Tailwind CSS
- Set up documentation standards

### Phase 2: Feature Development
- TBD

### Phase 3: Testing & Refinement
- TBD

### Phase 4: Production Preparation
- TBD
`;
    
    case 'production-ready-checklist.md':
      return `# Production-Ready Checklist

## Performance
- [ ] Images are optimized
- [ ] Code-splitting is implemented
- [ ] Tree-shaking is enabled
- [ ] Bundle size is minimized
- [ ] Caching strategies are in place

## Accessibility
- [ ] All images have alt text
- [ ] Semantic HTML is used
- [ ] Color contrast meets WCAG standards
- [ ] Keyboard navigation works
- [ ] Screen reader testing completed

## Security
- [ ] Dependencies are up to date
- [ ] No sensitive data is exposed
- [ ] HTTPS is enforced
- [ ] CSP headers are configured
- [ ] Input validation is implemented

## DevOps
- [ ] CI/CD pipeline is set up
- [ ] Automated testing is configured
- [ ] Monitoring is in place
- [ ] Deployment strategy is documented
- [ ] Rollback plan exists

## SEO
- [ ] Meta tags are present
- [ ] Structured data is implemented
- [ ] URLs are SEO-friendly
- [ ] Sitemap is generated
- [ ] robots.txt is configured

## User Experience
- [ ] Loading states are implemented
- [ ] Error handling is graceful
- [ ] Responsive design is tested
- [ ] Analytics are configured
- [ ] User feedback mechanisms exist
`;
    
    case 'adr/0001-nextjs-framework-selection.md':
      return `# ADR 0001: Next.js Framework Selection

## Status

Accepted

## Context

We needed a modern React framework that supports server-side rendering, static site generation, and has a strong ecosystem for building a high-performance landing page.

## Decision

We decided to use Next.js as our primary framework.

## Rationale

- Built-in routing and page-based architecture
- Strong performance optimizations
- Excellent TypeScript integration
- Server components for improved performance
- Large ecosystem and community support
- Seamless deployment options
- Image optimization and other built-in optimizations

## Consequences

- Team will need to stay updated with Next.js evolution
- Project structure follows Next.js conventions
- Deployment tied to Next.js-compatible hosting services
`;
    
    case 'adr/0002-tailwindcss-framer-motion-stack.md':
      return `# ADR 0002: TailwindCSS + Framer Motion Stack

## Status

Accepted

## Context

We needed to decide on a styling approach and animation library for our landing page that would enable rapid development and high-quality visual experiences.

## Decision

We chose TailwindCSS for styling and Framer Motion for animations.

## Rationale

### TailwindCSS
- Utility-first approach speeds up development
- Highly customizable through configuration
- Excellent responsive design support
- Efficient purging of unused styles for production
- Strong community and documentation

### Framer Motion
- Declarative animations in React
- Support for gestures and complex animations
- Automatic animation optimizations
- Accessible by default
- Smooth motion and transitions

## Consequences

- Developers need to learn Tailwind's utility-based approach
- More inline styling in components
- Customization through Tailwind config file
- Animation complexity managed through Framer Motion
`;
    
    case 'architecture/system-architecture.md':
      return `# System Architecture

## Overview

The AgentsPalace landing page is built with a modern frontend stack focused on performance, developer experience, and maintainability.

## Technology Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Architecture Diagram

\`\`\`
┌─────────────────┐
│                 │
│    Next.js      │
│    (React)      │
│                 │
└───────┬─────────┘
        │
        ▼
┌─────────────────┐
│                 │
│   Components    │
│                 │
└───────┬─────────┘
        │
        ▼
┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │
│   TailwindCSS   │◄───┤  Framer Motion  │
│                 │    │                 │
└─────────────────┘    └─────────────────┘
\`\`\`

## Component Structure

- **Layout Components:** Handle overall page structure
- **Section Components:** Individual landing page sections
- **UI Components:** Reusable interface elements
- **Animation Components:** Handle motion and transitions

## Data Flow

1. Static content is built at build time
2. Interactive elements use client-side React
3. Animations are handled by Framer Motion
4. Styling is applied via Tailwind classes

## Performance Considerations

- Static site generation for core content
- Code splitting for optimal loading
- Image optimization via Next.js
- Minimal JavaScript footprint
`;
    
    case 'architecture/component-diagram.md':
      return `# Component Diagram

## Overview

The AgentsPalace landing page is composed of several key components that work together to create a cohesive user experience.

## Component Hierarchy

\`\`\`
┌─────────────────────────────────────────────┐
│                                             │
│                  Layout                     │
│                                             │
└───────────────────┬─────────────────────────┘
                    │
        ┌───────────┼───────────┬───────────────────┐
        │           │           │                   │
        ▼           ▼           ▼                   ▼
┌───────────────┐   │   ┌───────────────┐   ┌───────────────┐
│               │   │   │               │   │               │
│     Hero      │   │   │  Features     │   │    Footer     │
│               │   │   │               │   │               │
└───────────────┘   │   └───────────────┘   └───────────────┘
                    │
        ┌───────────┼───────────┬───────────────────┐
        │           │           │                   │
        ▼           ▼           ▼                   ▼
┌───────────────┐   │   ┌───────────────┐   ┌───────────────┐
│               │   │   │               │   │               │
│ ProblemSolution│  │   │ ModuleGallery │   │   UseCases    │
│               │   │   │               │   │               │
└───────────────┘   │   └───────────────┘   └───────────────┘
                    │
                    ▼
            ┌───────────────┐
            │               │
            │  CTAInvestor  │
            │               │
            └───────────────┘
\`\`\`

## Component Descriptions

### Layout
- **Purpose:** Provides the overall structure for the page
- **Features:** Header, footer, and main content area
- **Children:** All section components

### Hero
- **Purpose:** Main landing area visible on first load
- **Features:** Title, subtitle, main CTA, background animation
- **Technology:** Framer Motion for animations

### ProblemSolution
- **Purpose:** Explains the problems the platform solves
- **Features:** Two-column layout, problem statements, solutions
- **Technology:** Responsive design with TailwindCSS

### PlatformFeatures
- **Purpose:** Highlights key features of the platform
- **Features:** Icon grid, feature descriptions, animations
- **Technology:** Lucide icons, TailwindCSS grid

### ModuleGallery
- **Purpose:** Shows the different modules of the platform
- **Features:** Interactive cards, hover effects
- **Technology:** Framer Motion for interactions

### UseCases
- **Purpose:** Demonstrates practical applications
- **Features:** Use case scenarios, illustrations
- **Technology:** Responsive layout

### CTAInvestor
- **Purpose:** Call-to-action for investors
- **Features:** Contact form, highlight benefits
- **Technology:** Form validation

### Footer
- **Purpose:** Provides secondary navigation and info
- **Features:** Links, copyright, social media
- **Technology:** Responsive layout
`;
    
    case 'architecture/data-flow.md':
      return `# Data Flow

## Overview

The AgentsPalace landing page uses a combination of static content and client-side interactivity. This document outlines the data flow within the application.

## Static Content Flow

The majority of the landing page content is static and pre-rendered at build time:

\`\`\`
┌────────────┐     ┌────────────┐     ┌────────────┐
│            │     │            │     │            │
│  Next.js   │────▶│  Static    │────▶│  Client    │
│  Build     │     │  HTML/CSS  │     │  Browser   │
│            │     │            │     │            │
└────────────┘     └────────────┘     └────────────┘
\`\`\`

## Interactive Elements

For interactive elements, the data flow follows this pattern:

\`\`\`
┌────────────┐     ┌────────────┐     ┌────────────┐
│            │     │            │     │            │
│  User      │────▶│  React     │────▶│  State     │
│  Action    │     │  Event     │     │  Update    │
│            │     │            │     │            │
└────────────┘     └────────────┘     └───┬────────┘
                                          │
                                          ▼
                                    ┌────────────┐
                                    │            │
                                    │  Re-render │
                                    │  Component │
                                    │            │
                                    └────────────┘
\`\`\`

## Animation Flow

Animations are managed by Framer Motion with this flow:

\`\`\`
┌────────────┐     ┌────────────┐     ┌────────────┐
│            │     │            │     │            │
│  Scroll or │────▶│  Framer    │────▶│  DOM       │
│  Trigger   │     │  Motion    │     │  Updates   │
│            │     │            │     │            │
└────────────┘     └────────────┘     └────────────┘
\`\`\`

## Form Submission (if applicable)

\`\`\`
┌────────────┐     ┌────────────┐     ┌────────────┐
│            │     │            │     │            │
│  Form      │────▶│  Client    │────▶│  Validation│
│  Input     │     │  State     │     │            │
│            │     │            │     │            │
└────────────┘     └────────────┘     └───┬────────┘
                                          │
                                          ▼
                                    ┌────────────┐
                                    │            │
                                    │  API       │
                                    │  Endpoint  │
                                    │            │
                                    └────────────┘
\`\`\`

## Performance Optimization

- Images are optimized and loaded with Next.js Image component
- JavaScript is code-split by route
- Styles are purged for production builds
- Animations are hardware-accelerated where possible
`;
    
    case 'architecture/deployment-diagram.md':
      return `# Deployment Diagram

## Overview

The AgentsPalace landing page uses a modern deployment pipeline to ensure reliability, performance, and ease of updates.

## Deployment Architecture

\`\`\`
┌───────────────┐     ┌───────────────┐     ┌───────────────┐
│               │     │               │     │               │
│    GitHub     │────▶│    CI/CD      │────▶│    Vercel     │
│  Repository   │     │   Pipeline    │     │  Deployment   │
│               │     │               │     │               │
└───────────────┘     └───────────────┘     └───────────────┘
                                                   │
                                                   ▼
                                            ┌───────────────┐
                                            │               │
                                            │    CDN Edge   │
                                            │   Network     │
                                            │               │
                                            └───────────────┘
                                                   │
                                                   ▼
                                            ┌───────────────┐
                                            │               │
                                            │    Users      │
                                            │               │
                                            └───────────────┘
\`\`\`

## Deployment Process

1. **Code Push:** Developers push code to GitHub repository
2. **CI/CD Trigger:** Automatic workflows run tests and checks
3. **Build Process:** Next.js application is built and optimized
4. **Deployment:** Built assets are deployed to Vercel
5. **CDN Distribution:** Content is distributed via Vercel's edge network
6. **Monitoring:** Performance and errors are tracked

## Environments

- **Development:** Branch previews for each pull request
- **Staging:** Deployed from development branch for testing
- **Production:** Deployed from main branch for live users

## Rollback Strategy

In case of issues with a deployment:

1. Instant rollback via Vercel dashboard
2. Automatic rollback on monitored error thresholds
3. Manual reversion of Git commits if needed

## Performance Optimizations

- Automatic image optimization
- Edge caching for static assets
- Serverless functions for any dynamic content
- Global CDN distribution for low latency
`;
    
    case 'architecture/brand-tree.md':
      return `# Brand & Module Tree

## Overview

AgentsPalace consists of several modules and components that make up the platform. This brand tree outlines the hierarchical structure of the platform's components.

\`\`\`
┌──────────────────────────────────────────┐
│                                          │
│              AgentsPalace                │
│          AI Agent Orchestration          │
│                                          │
└──────────────┬───────────────────────────┘
               │
     ┌─────────┼─────────┬────────────┬────────────┐
     │         │         │            │            │
     ▼         ▼         ▼            ▼            ▼
┌──────────┐ ┌─────┐ ┌─────────┐ ┌─────────┐ ┌──────────┐
│          │ │     │ │         │ │         │ │          │
│ Workflow │ │ AI  │ │ Agent   │ │ Monitor │ │ Security │
│ Engine   │ │ Hub │ │ Studio  │ │ Center  │ │ Guard    │
│          │ │     │ │         │ │         │ │          │
└──────────┘ └─────┘ └─────────┘ └─────────┘ └──────────┘
\`\`\`

## Module Descriptions

### Workflow Engine
- Orchestrates agent interactions
- Manages workflow execution
- Handles event sequencing
- Provides checkpointing and recovery

### AI Hub
- Central repository for AI models
- Model versioning and management
- Integration with major AI providers
- Custom model training support

### Agent Studio
- Agent development environment
- Drag-and-drop agent construction
- Testing and debugging tools
- Agent lifecycle management

### Monitor Center
- Real-time agent monitoring
- Performance analytics
- Health checks and diagnostics
- Logging and audit trails

### Security Guard
- Access control and authentication
- Encryption and data protection
- Compliance frameworks
- Threat detection and prevention

## Brand Identity

### Core Values
- Innovation
- Reliability
- Transparency
- Performance
- Security

### Visual Identity
- Primary Colors: Electric purple (#a259f7), Electric blue (#6236ff)
- Secondary Colors: Cyber green (#39ff14), Neon orange (#ff7e29)
- Font: Space Grotesk (body), Orbitron (headings)
- Style: Cyberpunk-inspired, futuristic, clean interfaces
`;
    
    default:
      return `# ${path.basename(docType, '.md')}

## Overview

[Provide an overview of this document's purpose]

## Details

[Add detailed content here]

## Related Documents

- [List related documents]
`;
  }
}

/**
 * Create a missing documentation file with a template
 * @param {string} docFile - Document file to create
 */
async function createMissingDoc(docFile) {
  const fullPath = path.join(config.docsDir, docFile);
  const dirPath = path.dirname(fullPath);
  
  if (!fileExists(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
  
  const template = generateTemplate(docFile);
  fs.writeFileSync(fullPath, template);
  
  console.log(`${colors.green}Created ${docFile}${colors.reset}`);
}

/**
 * Main function
 */
async function main() {
  console.log(`${colors.cyan}=== AgentsPalace Documentation Checker ===${colors.reset}`);
  
  // Check required docs
  const docResults = checkRequiredDocs();
  
  console.log(`\n${colors.green}Found ${docResults.present.length} required docs:${colors.reset}`);
  docResults.present.forEach(doc => {
    console.log(`  ✓ ${doc}`);
  });
  
  if (docResults.missing.length > 0) {
    console.log(`\n${colors.yellow}Missing ${docResults.missing.length} required docs:${colors.reset}`);
    docResults.missing.forEach(doc => {
      console.log(`  ✗ ${doc}`);
    });
    
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    const answer = await new Promise(resolve => {
      rl.question(`\n${colors.yellow}Would you like to create templates for missing docs? (y/n) ${colors.reset}`, resolve);
    });
    
    if (answer.toLowerCase() === 'y') {
      for (const doc of docResults.missing) {
        await createMissingDoc(doc);
      }
    }
    
    rl.close();
  }
  
  // Check components
  const undocumentedComponents = checkComponentDocs();
  
  if (undocumentedComponents.length > 0) {
    console.log(`\n${colors.yellow}Found ${undocumentedComponents.length} components without proper documentation:${colors.reset}`);
    undocumentedComponents.forEach(comp => {
      console.log(`  ✗ ${comp}`);
    });
    console.log(`\n${colors.blue}Consider adding JSDoc comments to these components.${colors.reset}`);
  } else {
    console.log(`\n${colors.green}All components are properly documented.${colors.reset}`);
  }
  
  // Check changelog
  const changelogUpdated = checkChangelogUpToDate();
  if (changelogUpdated) {
    console.log(`\n${colors.green}Changelog appears to be up to date.${colors.reset}`);
  } else {
    console.log(`\n${colors.yellow}Changelog may be outdated. Please consider updating it.${colors.reset}`);
  }
  
  console.log(`\n${colors.cyan}=== Documentation Check Complete ===${colors.reset}`);
}

// Run the script
main().catch(err => {
  console.error(`${colors.red}Error:${colors.reset}`, err);
});
