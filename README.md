# Personal Portfolio

A modern, high-performance personal portfolio and interactive web application built with Next.js and TypeScript.

## 🌐 Live Deployment
[Click Here](https://harshadh.vercel.app/)

## 🛠 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** GSAP (`@gsap/react`) & Framer Motion
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel

## ✨ Highlights

- **Interactive Canvas Background:** A high-performance particle network background powered by HTML5 Canvas and GSAP's optimized ticker for smooth rendering.
- **Strictly Typed:** Full TypeScript integration with custom interfaces for components and animation logic.
- **Modern Portfolio Layout:** Built to showcase projects, skills, and contact information in a clean, responsive experience.

## 🚀 Getting Started (Local Development)

To run this project locally, ensure you have Node.js v22 or later installed.

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

This project follows a feature-branch workflow to keep `main` stable.

- **Branching:** Develop new features, animations, or bug fixes on a dedicated feature branch (for example, `feat/hero-section` or `bugfix/particle-type-error`).
- **Continuous Integration:** Pull requests opened against `main` automatically trigger the GitHub Actions pipeline.
- **Required Checks:** The CI pipeline runs `npm run lint`, `npx tsc --noEmit`, and `npm run build` before merging.

## License & Copyright

Copyright (c) 2026 Harshadh Jeyaprakash. All rights reserved.

The source code in this repository is intended solely for demonstration and review purposes. 

* **Code & Architecture:** You may view, fork, and reference the structural code for educational purposes. You may not host an identical or heavily copied version of this website publicly without significant modification.
* **Content & Media:** All personal text, resume data, logos, project images, and case studies are the exclusive intellectual property of the author. Copying or redistribution of these assets is strictly prohibited.

