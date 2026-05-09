# 🚀 Premium Developer Portfolio Template

[![Vite](https://img.shields.io/badge/Vite-7.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, high-performance, and beautifully animated developer portfolio template. Built using **React 19**, **TypeScript 6**, **Vite 7**, and the cutting-edge **Tailwind CSS v4**. It features an elegant dark/light theme toggle, smooth micro-animations, interactive sections, and a fully functional contact form integrated with **EmailJS**.

Designed for developers who want a sleek, premium, and professional web presence that can be customized in seconds.

---

## 🌟 Key Features

- **🌓 Dynamic Dark/Light Theme:** Premium theme toggle utilizing Tailwind v4 variants with persistent client-side state saved automatically to `localStorage`.
- **⚙️ Centrally Managed Content:** Modify everything—about me, work history, skills, university degrees, projects, and social handles—inside a single, well-structured configuration file (`src/data/portfolio.ts`).
- **📨 Built-in EmailJS Contact Form:** Functional contact form that delivers messages straight to your inbox. Features custom-designed popup alerts for success/error feedback and animated progress-bar timers.
- **⚡ Lightning-Fast Performance:** Bundled with Vite 7 and fully typed with TypeScript for zero-delay Hot Module Replacement (HMR) and optimized production builds.
- **📱 Ultra-Responsive & Fluid:** Fully accessible across all screen sizes with CSS-native animations, hover scales, and responsive grid layouts.
- **📎 Sticky Social Widgets:** Elegant floating social icons tracking links to GitHub, LinkedIn, and Twitter/X.

---

## 🛠️ Tech Stack & Dependencies

- **Framework:** [React 19](https://react.dev/)
- **Build System:** [Vite 7](https://vite.dev/)
- **Typing:** [TypeScript 6](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (modern CSS-based configuration)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Contact Service:** [EmailJS-com](https://www.emailjs.com/)

---

## 📂 Project Structure

```bash
Piyush-Jha/
├── public/                 # Static assets (Resume, Hero banner, Favicon)
│   ├── favicon.png
│   ├── hero.png            # Profile image used in Hero section
│   └── piyush_jha.pdf      # Downloadable CV/Resume
├── src/
│   ├── assets/             # Images and local files
│   ├── components/         # Reusable React components
│   │   ├── AboutSection.tsx      # Core details, Education, and Experience
│   │   ├── ContactSection.tsx    # EmailJS Form & interactive popups
│   │   ├── HeroSection.tsx       # Main splash banner with action items
│   │   ├── Navigation.tsx        # Responsive navbar with Theme Switcher
│   │   ├── ProjectsSection.tsx   # Showcases personal & production projects
│   │   ├── SkillsSection.tsx     # Displays dynamic list of tech skills & logos
│   │   ├── StickySocialLinks.tsx # Floating social media shortcuts
│   │   └── ThemeProvider.tsx     # Dark mode Context Provider
│   ├── data/
│   │   └── portfolio.ts    # 💡 CENTRAL FILE FOR ALL PORTFOLIO CONTENT
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces for strict type safety
│   ├── App.css
│   ├── App.tsx             # Root page layout coordinator
│   ├── index.css           # Tailwind imports & custom popup animations
│   └── main.tsx            # React application entry point
├── eslint.config.js        # Strict code linting configurations
├── index.html              # HTML shell & SEO meta-tags
├── package.json            # Scripts and project dependencies
├── tsconfig.json           # TypeScript compilation configurations
└── vite.config.js          # Vite and Tailwind CSS plugins configuration
```

---

## 🚀 Getting Started

Follow these simple steps to run the portfolio locally on your system:

### 1. Prerequisites
Ensure you have **Node.js** (v18.x or higher) and **npm** installed.

### 2. Clone the Repository
```bash
git clone https://github.com/piyushjha5/Piyush-Jha.git
cd Piyush-Jha
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
Run the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to **`http://localhost:5173`**.

### 5. Build for Production
To bundle and optimize the application for production deployment:
```bash
npm run build
```
The built files will be located in the `dist/` directory, ready to be hosted on any static hosting provider.

### 6. Preview Production Build
Verify the production build locally before deploying:
```bash
npm run preview
```

---

## ⚙️ Customization Guide

This template has been designed to be **highly modular**. You do not need to look through components to change your information. 

### 1. Update Portfolio Content
Simply open `src/data/portfolio.ts` and modify the following constants:

*   **`personalInfo`**: Modify your name, title, bio, email, location, and key statistics.
*   **`education`**: Append, delete, or modify academic degrees, years, institutions, and icons.
*   **`experience`**: List professional roles, companies, dates, responsibilities, and technologies used.
*   **`skills`**: Add any technical skills to render them automatically.
*   **`skillLogos`**: Connect specific skill names to their SVGs for visual badges (powered by [Devicon](https://devicon.dev/)).
*   **`projects`**: Showcase personal or production-level apps with live URLs, descriptions, lists of tech used, and status banners.
*   **`socialLinks`**: Hook up your social platform handles.

#### Example Config Structure:
```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Professional Title",
  bio: "A compelling developer bio goes here...",
  email: "your.email@example.com",
  location: "Your City, Country",
  yearsExperience: "5",
  projectsCompleted: "50",
  clientsSatisfied: "10",
};
```

### 2. Replace Static Media Files
To use your own media assets, overwrite the files in the `/public` directory:
- **Hero Image:** Overwrite `/public/hero.png` with your portrait or professional avatar (transparent background works best!).
- **Resume:** Overwrite `/public/piyush_jha.pdf` with your updated CV/Resume. Ensure the filename matches exactly, or update the reference in `HeroSection.tsx`.
- **Favicon:** Change `/public/favicon.png` to your customized tab icon.

---

## 📧 EmailJS Integration Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to process and send contact messages from your users without requiring a custom backend.

To configure your own contact form inbox:

1. **Sign Up / Log In** to your [EmailJS Dashboard](https://dashboard.emailjs.com/).
2. **Add an Email Service:** Select your email provider (e.g., Gmail) and connect it. Take note of your **Service ID** (e.g., `service_orfo4nd`).
3. **Create an Email Template:** Navigate to *Email Templates* and select *Create New Template*. Set your template subject and body. Ensure your template fields match the form payload:
    *   `{{from_name}}` — Sender's name
    *   `{{from_email}}` — Sender's email address
    *   `{{message}}` — Message body
    *   `{{to_email}}` — Your email address
    *   `{{reply_to}}` — Reply-to address
    *   *Take note of your **Template ID** (e.g., `template_k9ocwv6`).*
4. **Retrieve Public Key:** Go to *Account* -> *API Keys* and copy your **Public Key** (e.g., `SWa9SMJUmtB-QRT0V`).
5. **Update Component Configuration:** Open `src/components/ContactSection.tsx` and replace the credentials in the `emailjs.send` call:

```typescript
// Location: src/components/ContactSection.tsx (around lines 43-53)
await emailjs.send(
  "YOUR_EMAILJS_SERVICE_ID",   // Replace with your Service ID
  "YOUR_EMAILJS_TEMPLATE_ID",  // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: personalInfo.email,
    reply_to: formData.email,
  },
  "YOUR_EMAILJS_PUBLIC_KEY"    // Replace with your Public Key
);
```

---

## 🌐 Deployment Instructions

Since this is a static Single Page Application (SPA), it can be deployed on any major hosting service for free!

### Vercel (Recommended)
1. Push your code to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **New Project**.
3. Import your repository and click **Deploy**. Vercel will automatically detect Vite and configure the build settings.

### Netlify
1. Log in to [Netlify](https://www.netlify.com/) and click **Add new site** -> **Import from Git**.
2. Select your repository.
3. Set the build command to `npm run build` and publish directory to `dist`.
4. Click **Deploy**.

### GitHub Pages
To host directly on GitHub Pages using an automated GitHub Action:
1. Create a `.github/workflows/deploy.yml` file.
2. Configure it to use static pages deployment pointing to the `dist` folder generated by `npm run build`.
3. In your `vite.config.js`, set the `base` property to match your repository name:
   ```javascript
   export default defineConfig({
     base: '/repository-name/', // Only if deploying to https://username.github.io/repository-name/
     // ...
   })
   ```

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE). Feel free to clone, customize, and use it for your personal or commercial portfolios!

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/piyushjha5">Piyush Jha</a>
</p>
