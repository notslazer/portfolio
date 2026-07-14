# Personal Portfolio

A modern, high-performance personal portfolio and interactive web application built with Next.js and TypeScript.

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP (`@gsap/react`) & Framer Motion
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel

## ✨ Current & Planned Features

- **Interactive Canvas Background:** A high-performance, 60fps particle network background driven by HTML5 Canvas and GSAP's optimized ticker, bypassing the React virtual DOM for smooth rendering.
- **Strictly Typed:** Full TypeScript integration with custom interfaces for all components and animation logic.

## 🚀 Getting Started (Local Development)

To run this project locally, ensure you have Node.js (v22.x or later) installed.

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```
2. **Install dependencies:**
    ```bash
    npm install
    ```
3. **Start the development server:**
    ```bash
    npm run dev
    ``` 
    Open http://localhost:3000 in your browser to view the application.

## 🌿 Git Workflow & CI/CD

This project strictly follows a feature-branch workflow to maintain the stability of the `main` branch. 

- **Branching:** All new features, animations, or bug fixes must be developed on a dedicated feature branch (e.g., `feat/hero-section`, `bugfix/particle-type-error`).
- **Continuous Integration:** Whenever a Pull Request is opened against the `main` branch, our GitHub Actions pipeline automatically triggers.
- **Required Checks:** The CI pipeline will run `npm run lint`, `npx tsc --noEmit` (Type Checking), and `npm run build`. All checks must pass before the PR can be merged.
