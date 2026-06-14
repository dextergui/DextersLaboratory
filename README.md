# Dexter's Laboratory — Developer Portfolio

A sleek, interactive personal portfolio website designed for showcasing projects, skillsets, and case studies. Built with a dark, minimal aesthetic enhanced by 3D visuals and smooth micro-animations.

## ✨ Key Features

- **Interactive 3D Hero** — Spline-powered 3D scene as the landing banner
- **Project Showcase Modals** — Click into any project card for a full-screen modal with live app embeds, video demos, or screenshot galleries
- **Expandable Project Details** — Toggle a details panel inside each modal for in-depth project descriptions
- **Animated UI** — Framer Motion animations throughout: entrance effects, hover states, and smooth modal transitions
- **Responsive Design** — Fully responsive from mobile to ultrawide displays

## 🛠 Tech Stack

| Layer        | Technology                                    |
| ------------ | --------------------------------------------- |
| Framework    | [Next.js 15](https://nextjs.org/) (App Router)|
| Language     | TypeScript                                    |
| Styling      | [Tailwind CSS 4](https://tailwindcss.com/)    |
| Animations   | [Framer Motion](https://motion.dev/)          |
| 3D Graphics  | [Spline](https://spline.design/)              |
| Icons        | [Lucide React](https://lucide.dev/)           |

## 📁 Project Structure

```
├── app/              # Next.js App Router pages & layout
├── components/       # UI components (Hero, Projects, Skills, Navigation, Footer)
├── lib/
│   └── data/         # Project data configuration (easily editable)
├── assets/           # Static assets
├── public/           # Public files
└── hooks/            # Custom React hooks
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dextergui/DextersLaboratory.git
   cd DextersLaboratory
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file (see [.env.example](.env.example) for reference) and set the required environment variables:
   ```
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚙️ Customization

### Editing Projects

Project data is stored in [`lib/data/projects.tsx`](lib/data/projects.tsx). Each project entry supports:

- `title`, `tech`, `description`, `longDescription`
- `showcaseType`: `"iframe"` | `"video"` | `"screenshots"`
- `logo`: A React node (Lucide icon or custom element)
- `iframeUrl`, `videoUrl`, `screenshots[]`, `liveUrl`, `repoUrl`

### Adding a New Project

Add a new entry to the `projects` array in `lib/data/projects.tsx`:

```tsx
{
  id: "my-project",
  title: "My New Project",
  tech: "React • Node.js",
  description: "Short card description.",
  longDescription: "Full description shown in the modal details panel.",
  showcaseType: "iframe",
  logo: <Code className={iconClass} />,
  iframeUrl: "https://my-project.vercel.app",
  repoUrl: "https://github.com/user/my-project",
}
```

## 📜 License

This project is for personal portfolio use.
