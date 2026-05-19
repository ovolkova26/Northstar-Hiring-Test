# React dashboard — UI/UX exercise

This is a React + Vite app styled as a small operations dashboard. The UI looks straightforward on the surface, but the project **deliberately includes real-world UI and UX problems**—layout quirks on small screens, inconsistent patterns, accessibility gaps, rough forms and modals, and messy styling. Your job is to notice what feels wrong, prioritize what matters for users, and improve it.

You may also run into issues in **state handling, routing, and CSS structure** as you work; treat those as part of delivering a solid experience, not as a separate scavenger hunt.

## What’s in the stack

- React with Vite
- Pages: Dashboard, Projects, Team, Reports, Billing, Settings, Support
- Tailwind CSS, PostCSS, Autoprefixer, and Sass (wired up; the codebase does not showcase them evenly—improving that is fair game)

## Run locally




---------------------------------------------------------------------------------------------------------------------

## Changes made

- Fixed hash routing so URLs with query params still open the correct page.
- Fixed hashchange event cleanup to avoid duplicate listeners during development.
- Improved mobile sidebar layering so the menu opens above the sticky topbar.
- Adjusted dashboard layout so panels stack better on smaller screens.
- Fixed modal behavior: Escape cleanup, backdrop close, and inner click handling.
- Fixed project selection so checkboxes can toggle on/off correctly.
- Fixed project sorting to avoid mutating the original data.
- Improved global search behavior across more pages.
- Fixed Team member removal by avoiding direct state mutation.
- Capped capacity meter width so values over 100% do not break the UI.
- Fixed Settings form fields so inputs update state consistently.
- Made Billing discount handling safer and prevented invalid totals.
- Prevented empty support tickets from being added.
- Replaced default textarea content with a placeholder.
- Made some small responsive/style cleanup for a more stable UI.

---------------------------------------------------------------------------------------------------------------------










```bash
npm install
npm run dev
```

Open the URL Vite prints (often `http://localhost:5173`).

## Suggested assignment

Spend a few hours auditing and improving the dashboard. Keep the look **simple and professional**. When you’re done, hand over a **short changelog**: what you changed, why it helped users, and anything you’d do next if you had more time.

Example brief you can use:

> Audit this React dashboard and fix the **most important UI, UX, responsiveness, and accessibility** issues you find. Improve structure where it supports those goals. Summarize your changes in a few paragraphs.

## What strong work often includes

- Clearer layouts and behavior on mobile and desktop
- Better accessibility: focus, labels, modals, keyboard use
- More consistent navigation, search, and feedback
- Cleaner CSS organization and fewer layout surprises
- Basic validation and empty states where forms matter
- Optional: linting or tests if they fit the time box
