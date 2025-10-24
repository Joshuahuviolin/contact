# Joshua Hu - Classical Violinist & Composer

A beautiful single-page React application featuring animated musical notes and a professional landing page for classical violinist and composer Joshua Hu.

## Features

- ✨ Animated floating musical notes background
- 🎵 Professional profile card with contact information
- 📱 Responsive design for all devices
- 🎨 Modern black theme with elegant typography
- 🔗 Direct links for phone, email, and SoundCloud
- 📸 Profile image support with placeholder

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Adding Your Profile Image

Place your profile image in the `public` folder and name it `profile-image.jpg`. The image should be square (e.g., 500x500px) for best results.

## Deploying to GitHub Pages

1. Create a new repository on GitHub
2. Update `vite.config.js` if needed (already configured for relative paths)
3. Build the project: `npm run build`
4. Push the `dist` folder contents to the `gh-pages` branch

Or use GitHub Actions for automatic deployment:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Contact Information

- **Phone:** 0421 992 510
- **Email:** joshuahu270@gmail.com

## Technologies

- React 18
- Vite
- CSS3 Animations
- Modern ES6+ JavaScript

## License

MIT

