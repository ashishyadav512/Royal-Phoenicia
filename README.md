# Royal Phoenicia Hotel Website

A luxury hotel website built with Next.js and Tailwind CSS, featuring a modern, responsive design with elegant animations and interactive elements.

## Overview

The Royal Phoenicia Hotel website showcases a premium hospitality experience with a sophisticated dark-themed design, highlighting the hotel's luxurious accommodations, dining options, event spaces, and amenities. The website is designed to provide an immersive visual experience that reflects the elegance and exclusivity of the Royal Phoenicia brand.

## Features

### Design & UI
- **Elegant Dark Theme** - Sophisticated color scheme with dark backgrounds and blue accents
- **Responsive Design** - Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Custom Animations** - Smooth fade-in animations and transitions throughout the site
- **Interactive Elements** - Hover effects, image scaling, and overlay transitions
- **Consistent Typography** - Clean, modern typography with proper hierarchy

### Components
- **Dynamic Hero Slider** - Automatic image carousel with text overlay and navigation dots
- **Navigation** - Responsive navbar with transparent-to-solid scroll effect and mobile menu
- **Image Galleries** - Grid-based image galleries with lightbox functionality
- **Interactive Cards** - Hover effect cards for rooms, dining options, and events
- **Footer** - Comprehensive footer with multiple columns and newsletter signup

### Sections
- **Hero Section** - Full-screen slider showcasing hotel views and key messaging
- **Welcome Section** - Introduction to the hotel with feature highlights
- **Accommodations** - Featured rooms and suites with details and pricing
- **Dining Experiences** - Restaurant and bar options with descriptions
- **Corporate Events** - Event spaces and planning information
- **Photo Gallery** - Visual showcase of hotel facilities and amenities
- **Newsletter Signup** - Email subscription form for marketing communications

### Interactive Features
- **Image Lightbox** - Click to expand gallery images in a fullscreen overlay
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Slider Navigation** - Manual and automatic navigation for the hero slider
- **Hover States** - Interactive hover effects on buttons, links, and cards
- **Scroll Effects** - Navbar transparency changes on scroll

## Technologies Used

- **Next.js** - React framework for server-side rendering and static site generation
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Hooks** - For state management and side effects
- **Lucide React** - For icons and UI elements
- **TypeScript** - For type safety and better developer experience

## Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/royal-phoenicia.git
cd royal-phoenicia
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

\`\`\`
royal-phoenicia/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Homepage component
├── components/           # Reusable components
│   ├── dining-section.tsx
│   ├── events-section.tsx
│   ├── featured-rooms.tsx
│   ├── footer.tsx
│   ├── gallery.tsx
│   ├── hero-section.tsx
│   └── navbar.tsx
├── public/               # Static assets
│   └── [images]
├── styles/               # Additional styles
├── tailwind.config.ts    # Tailwind configuration
└── README.md             # Project documentation
\`\`\`

## Usage

### Customizing Content

To update the hotel information, modify the data in the respective component files:

- **Rooms**: Edit the `rooms` array in `components/featured-rooms.tsx`
- **Dining Options**: Update the dining information in `components/dining-section.tsx`
- **Event Spaces**: Modify event details in `components/events-section.tsx`
- **Gallery Images**: Change the `galleryImages` array in `components/gallery.tsx`
- **Hero Slides**: Update the `slides` array in `components/hero-section.tsx`

### Adding Pages

To add new pages, create new files in the `app` directory following Next.js App Router conventions.

## Customization

### Colors

The primary color scheme can be modified in the `tailwind.config.ts` file:

\`\`\`typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "#6492b8",
        // ...
      },
      secondary: {
        DEFAULT: "#1d4869",
        // ...
      },
      // ...
    }
  }
}
\`\`\`

### Images

Replace the images in the `public` directory with your own hotel images, maintaining the same filenames or updating the references in the component files.

## Browser Support

The website is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- Images: Unsplash
- Icons: Lucide React
- Fonts: System fonts

## License

This project is licensed under the MIT License - see the LICENSE file for details.
