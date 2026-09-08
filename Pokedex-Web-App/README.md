# Pokédex Web App

A React + Vite frontend for browsing, adding, editing, and deleting Pokémon entries, backed by a local Go REST API.

## Stack

- React 18 + React Router
- Vite (via `@vitejs/plugin-react-swc`)
- Tailwind CSS
- axios for API calls
- react-toastify for notifications, sweetalert2 for delete confirmation

## Prerequisites

- Node.js
- The companion Go backend running locally on port `8080` (separate repo), with CORS configured to allow `http://localhost:5173`.

## Setup

```bash
npm install
npm run dev
```

The app runs at `http://localhost:5173` and expects the backend at `http://localhost:8080` by default.

To point at a different backend address, set `VITE_API_BASE_URL` in `.env` (or a local `.env.local` override, which is gitignored):

```
VITE_API_BASE_URL=http://localhost:8080
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Pages

- `/` — Pokédex grid (list, edit, delete)
- `/pokemon/create/new` — add a Pokémon
- `/pokemon/edit/:id` — edit a Pokémon

## Known limitations

- No client-side form validation (name/sprite fields accept anything, including empty values).
- The create form lets you set the Pokémon's `id` manually rather than having the backend assign one.
- Both frontend and backend are intended to run on the same local machine; the app is not set up for a networked/production deployment.
