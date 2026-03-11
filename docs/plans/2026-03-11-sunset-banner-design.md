# Sunset Banner Design

## Goal

Add a site-wide banner announcing that GroceryTime will go away on April 15, 2026 while preserving the current visual language of the marketing site.

## Approach

- Create a reusable `SunsetBanner` component.
- Render the banner globally from `pages/_app.js` so it appears on every page.
- Match the existing design system by using the current red accent, white text, centered layout, and spacing patterns already used throughout the site.
- Keep the first release text-only, but support a future optional link so a dedicated sunset page can be added without refactoring the component.

## Copy

- Initial message: `GroceryTime is going away on April 15, 2026.`
- Future link label: `Learn more`

## Behavior

- Always visible across the site.
- No dismiss action.
- No placeholder or disabled CTA until a real destination exists.
- If a link URL and label are provided later, the component should render the link inline with the message.

## Verification

- Run a production build to confirm the new component renders cleanly and does not break the site.
