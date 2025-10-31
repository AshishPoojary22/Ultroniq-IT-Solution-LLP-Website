# UISL Website

Ultroniq IT Solution LLP website built with React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 📦 Deployment to Netlify

### Option 1: Deploy via Git (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Connect your repository to Netlify:
   - Go to [Netlify](https://www.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Select your Git provider and repository
   - Netlify will automatically detect the build settings from `netlify.toml`

3. Deploy settings (automatically configured):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 20

### Option 2: Deploy via Netlify CLI

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Login to Netlify:
```bash
netlify login
```

3. Build and deploy:
```bash
npm run build
netlify deploy --prod
```

### Option 3: Drag and Drop

1. Build your project:
```bash
npm run build
```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag and drop the `dist` folder

## 🔧 Configuration

The `netlify.toml` file is already configured with:
- Build command and publish directory
- SPA redirects (all routes redirect to index.html)
- Node.js version 20

## 📝 Project Structure

```
.
├── components/        # React components
│   ├── pages/        # Page components
│   ├── ui/           # UI components
│   └── ...
├── styles/           # Global styles
├── App.tsx           # Main app component
├── main.tsx          # Entry point
├── index.html        # HTML template
├── vite.config.ts    # Vite configuration
├── tailwind.config.js # Tailwind configuration
└── netlify.toml      # Netlify configuration
```

## 🛠️ Technologies

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Radix UI** - Accessible components

## 📄 License

Copyright © 2024 Ultroniq IT Solution LLP. All rights reserved.






