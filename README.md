# Sri Pavalakundru Madalayam website

React + Vite + Tailwind CSS v4 + React Router + EmailJS.

## Run
1. Extract the zip. `package.json` must sit next to `index.html`.
2. Open this folder in VS Code terminal
3. npm install
4. Copy `.env.example` to `.env` and fill the EmailJS values
5. npm run dev  (opens http://localhost:5173)

## Images (src/assets/images)
All photos are imported once in src/data/images.js. To add or change a photo, put the file in
src/assets/images, import it in images.js and use IMG.yourName. The gallery list is in src/data/gallery.js.
The function hall photo is still missing: set IMG.hall in images.js.

## EmailJS (one service, five templates)
Template variables available in every template:
{{enquiry_type}}  {{details}} (all submitted fields)  {{name}}  {{phone}}  {{email}}  {{message}}
Set "To email" to the Madam's address and "Reply-To" to {{reply_to}}.
Template IDs go in .env: ROOM, HALL, SPIRITUAL, ANNADHANAM, CONTACT.
In EmailJS dashboard, restrict allowed domains and enable reCAPTCHA to reduce spam.

## Confirm with client, then edit src/data/site.js
Name spelling, email, address, Google Maps embed URL, WhatsApp number.

## Deploy
npm run build  creates dist/
GitHub Pages: React Router needs HashRouter. In src/main.jsx replace BrowserRouter with HashRouter.
GoDaddy hosting: upload dist/ contents and add an SPA rewrite to index.html.
