# DeepWater Solution🌊

Personal landing page & portfolio — a personal blog and portfolio site that also serves as a hub linking out to other projects.

🔗 **Live site:** [www.deepwater.my.id](https://www.deepwater.my.id)

## About

DeepWater is a personal landing page that functions as a blog and portfolio, and acts as a hub connecting to other projects:

- **IndoSeaman** — a job portal web app for seafarers and shipping/manning companies (member registration, CV upload, job vacancy postings)
- **MitraPOSLite** — a point-of-sale product demo
- **Data Visualization** - a visualization demo, developed with Looker Studio and Power BI

## Tech Stack

- **Framework:** [Astro](https://astro.build)
- **Styling:** Bootstrap
- **Hosting/Deployment:** Vercel

## Features

- 📝 Blog
- 💼 Portfolio
- 🔗 Link to the IndoSeaman app (job portal for seafarers)
- 🔗 Link to the MitraPOSLite demo
- 🔗 Link to Visualization Demo with Looker Studio and Power BI
- 🔗 Link to GitHub Account 

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
└── package.json
```

## Running Locally

Make sure you have [Node.js](https://nodejs.org) installed.

```bash
# Clone the repository
git clone https://github.com/<username>/<repo-name>.git
cd <repo-name>

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will run at `http://localhost:4321`

## Build for Production

```bash
npm run build
npm run preview
```

## Deployment

This project is automatically deployed to [Vercel](https://vercel.com) on every push to the `main` branch.

## License

© 2026 DeepWater Solution. All rights reserved.
