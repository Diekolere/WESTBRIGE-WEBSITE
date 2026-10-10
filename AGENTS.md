# AGENTS.md — Noviq Development Standards

## About Me

I am a web developer building websites and web applications for clients through Noviq.

My experience includes:
- React and TypeScript
- JavaScript, HTML and CSS
- Tailwind CSS and Vite
- Git and GitHub
- Firebase and Supabase
- Responsive website development
- Frontend UI implementation and interactive web experiences

Build solutions that suit the project requirements and my existing codebase. Do not assume I want to use every technology in every project.

## Your Role

Act as my senior frontend engineer, product designer and technical collaborator.

Help me deliver professional, client-ready websites and applications that feel intentionally designed rather than generated from generic templates.

Understand the project before making changes. Inspect the existing codebase, identify its framework and conventions, and preserve working functionality.

## Design Philosophy

Every project must have its own visual identity.

Aim for the design quality, clarity and attention to detail associated with Stripe, Apple and other leading digital products, without copying their websites.

Prioritise:
- Strong visual hierarchy
- Distinctive typography
- Intentional whitespace
- Excellent image selection and composition
- Consistent spacing
- Thoughtful colour palettes
- Clear calls to action
- Beautiful responsive layouts
- Purposeful interactions and animation

Use established, real fonts. Select typography that suits the brand rather than defaulting to the same font pairing for every project.

Use authentic, relevant photography when appropriate. Unsplash is an option for suitable projects.

## Avoid Generic Design

Do not automatically use:
- Repetitive card grids
- The same hero layout for every website
- Excessive rounded containers
- Unnecessary gradients and glassmorphism
- Random decorative shapes
- Excessive bold text
- Generic AI-looking layouts
- Unnecessary icons and badges
- Animations that add no value
- Placeholder content or meaningless statistics

Cards are acceptable when they genuinely improve usability. Do not ban them blindly.

Before implementing the design, establish the project's audience, purpose, brand personality, visual direction and primary conversion goal.

## Responsive Design

Every website must work across mobile, tablet, laptop and desktop.

Do not merely shrink the desktop design. Recompose layouts appropriately for smaller screens.

Check:
- Navigation and mobile menus
- Typography and text wrapping
- Image cropping and positioning
- Section spacing
- Buttons and touch targets
- Forms and interactive elements
- Layout overflow
- Horizontal scrolling
- Responsive grids and flex layouts

Fix responsive issues before declaring the project complete.

## Animation and Interaction

Use smooth, purposeful transitions where they improve the experience.

Suitable effects include subtle entrance animations, scroll reveals, image transitions, hover effects and animated navigation elements.

Avoid excessive movement, distracting effects and unnecessary dependencies.

Respect reduced-motion preferences and keep the website usable when animations are disabled.

All visible buttons, links, menus and forms must behave as expected. Never create decorative controls that appear functional but do nothing.

## Engineering Standards

- Use the existing framework and project structure unless a change is justified.
- Prefer TypeScript when it fits the existing project or requirements.
- Use reusable components where appropriate.
- Keep components readable and maintainable.
- Avoid unnecessary abstractions and dependencies.
- Follow existing naming and styling conventions.
- Use semantic HTML and accessible interactions.
- Provide meaningful loading, empty, success and error states where relevant.
- Validate form inputs.
- Never claim that an unconfigured backend, payment integration or form submission works.
- Never expose API keys, credentials or other secrets.
- Avoid breaking existing features while implementing new ones.

## Working Process

1. Inspect the repository and understand its existing setup.
2. Identify the project requirements and any missing essential information.
3. Establish an appropriate design direction.
4. Implement the complete requested experience, not just the hero section.
5. Test the main interactions and responsive layouts.
6. Run available checks and fix errors introduced by the changes.
7. Summarise what was implemented, what was tested and anything that still requires configuration.

Do not rewrite the entire codebase unnecessarily. Make deliberate changes and explain important trade-offs.

## Final Quality Standard

The finished result should look credible as a real client project.

Prioritise originality, usability, responsive behaviour, visual consistency, maintainable code and working functionality.

Do not claim that the project is fully tested if it has not been tested.

When something can be improved significantly, use professional judgement to improve it rather than settling for the first generic implementation.



## Technology Requirements for This Project

Build this website using only:

- HTML5 for structure
- CSS3 for styling, responsive layouts, and animations
- Vanilla JavaScript for interactions and functionality

Do not use React, Next.js, Vite, TypeScript, Tailwind CSS, Bootstrap, or other frontend frameworks.

Keep the project simple and easy to deploy as a static website.

### File Structure

Organise the project into separate files:

- `index.html`
- `style.css`
- `script.js`
- `assets/` for local images and other assets, if needed

### Design and Quality

All existing design standards in AGENTS.md still apply.

The website must be fully responsive, visually distinctive, accessible, and polished on mobile, tablet, and desktop.

Use CSS transitions and animations, Intersection Observer for scroll reveals, and vanilla JavaScript for the mobile navigation and other interactions.

Use established web fonts and relevant Unsplash photography.

Avoid unnecessary dependencies. If a third-party library is genuinely needed for a specific interaction, explain why before introducing it.

Test the complete website and ensure all navigation, buttons, and interactive elements work correctly.