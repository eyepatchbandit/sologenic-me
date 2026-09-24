# Wallet connection flow and authentic icons

## What will change
- Replace the drawn XRP Ledger, Sologenic DEX, and TX marks with the supplied icon artwork, stored with the project.
- Replace the static connector with a thin animated red waveform between XRP Ledger and TX.
- Add a **Validate** action directly below each **Connect Wallet** action.
- Make every Connect Wallet and Validate action open a dedicated wallet-selection page.
- Build the wallet-selection page with XRP, Keplr, Cosmostation, and Ledger choices, plus clear navigation back to conversion.
- Preserve the existing dark visual style and adapt both pages for desktop and mobile.

## Technical details
- Use TanStack Router navigation and add a distinct `/wallets` page with its own metadata.
- Use a lightweight CSS/SVG waveform animation rather than adding a large dependency.
- Keep wallet choices as front-end selection controls only; no real wallet-provider integration is implied.
- Verify the flow and layout in the running preview after implementation.
