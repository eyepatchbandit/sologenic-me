# Pixel Perfect Page

recreate this page accurately

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/955e207f-328f-4036-bbc7-74c54ef84365).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Email and Netlify deployment

Survey submissions are delivered with Resend from a server function. Copy `.env.example` to
`.env.local` for local development and set the same four values in **Netlify → Site
configuration → Environment variables**:

- `RESEND_API_KEY`
- `SURVEY_EMAIL_1`
- `SURVEY_EMAIL_2`
- `RESEND_FROM_EMAIL` (must use a domain verified in Resend)

Each submission is sent as two separate messages, so the recipients do not see one another's
email addresses.

The included `netlify.toml` builds the TanStack Start app with Nitro's Netlify preset. Connect
the repository in Netlify and deploy; the build command and publish directory are already set.
