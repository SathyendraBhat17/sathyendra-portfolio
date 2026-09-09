# Antigravity Portfolio

## Development

```bash
npm install
npm run dev
```

The contact form posts to `/.netlify/functions/contact`, which is implemented as a Netlify serverless function. Configure these server-side environment variables before deploying:

```env
RESEND_API_KEY=
CONTACT_TO_EMAIL=sathyendrabhat2005@gmail.com
RESEND_FROM_EMAIL=Portfolio contact <onboarding@resend.dev>
```

The Resend API key must never be exposed through `VITE_` variables or frontend code.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
