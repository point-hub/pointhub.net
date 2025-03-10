# Pointhub Website

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup
We are using [Bun](https://dev.pointhub.net/guide/introduction/bun) as a drop-in replacement for Node.js

```bash
npm install -g bun
```

Make sure to install the dependencies:

```bash
bun install --frozen-lock
```

To upgrade Nuxt to the latest release, use the nuxi upgrade command.

```bash
bun x nuxi upgrade
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
bun run dev
```

## Testing

```bash
npx cypress open
```

## Production

Build the application for production:

```bash
bun run build
```

Locally preview production build:

```bash
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
