This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

### Prerequisites

- Node.js 18 or higher
- npm 9 or higher
- Firebase account with configured project

### Build Steps

1. Ensure all environment variables are set in `.env`
2. Run the build command:
   ```bash
   npm run build
   ```
3. Start the production server:
   ```bash
   npm start
   ```

### Deploy to Vercel

1. Install the Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Login to Vercel:
   ```bash
   vercel login
   ```
3. Deploy the project:
   ```bash
   vercel
   ```

## Technologies Used

- Next.js 14.1.0
- React 18.2.0
- Firebase
- Tailwind CSS
- TypeScript
