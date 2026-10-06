# Maswab Decor

Official website for **Maswab Decor** — an event decoration studio offering wedding, corporate, birthday, floral, and cultural event decoration services.

## Tech Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animations and parallax
- [Lucide React](https://lucide.dev/) — icons

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Build for production:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout with fonts and metadata
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── Navbar.tsx        # Fixed navigation with mobile menu
│   ├── Hero.tsx          # Full-screen hero with parallax background
│   ├── About.tsx         # About section with images and stats
│   ├── Services.tsx      # Service carousel with category filters
│   ├── Testimonials.tsx  # Client testimonials carousel
│   ├── Contact.tsx       # Booking enquiry form
│   ├── Footer.tsx        # Site footer
│   └── WhatsAppButton.tsx # Floating WhatsApp contact button
public/
└── images/               # Local decoration images
```

## Sections

| Section | Description |
|---------|-------------|
| Hero | Full-screen parallax hero with CTA buttons |
| About | Studio story, values, and key stats |
| Services | Filterable by category: Weddings, Shimglna, Florals, Corporate, Milestones |
| Testimonials | Client reviews carousel |
| Contact | Booking form with event type, date, and message |
| Footer | Navigation, contact info, social links |

## Contact Info

Update the following placeholders before going live:

- **WhatsApp number** — `src/components/WhatsAppButton.tsx` line: `WHATSAPP_NUMBER`
- **Email** — `src/components/Contact.tsx` and `src/components/Footer.tsx`
- **Social media links** — `src/components/Footer.tsx`

## Contact Form

The form currently simulates a submission. To make it functional, integrate one of:

- [Resend](https://resend.com) — simple email API
- [EmailJS](https://emailjs.com) — client-side email sending
- [Formspree](https://formspree.io) — form backend with no server needed

## Adding Images

Place new images in `public/images/` and reference them as `/images/filename.png` in the component.

## License

All rights reserved — Maswab Decor.
