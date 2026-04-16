# Krushna Homoeopathic Clinic Website

A beautiful, functional, multipage HTML/Tailwind project for Dr. Shravani Kadam's clinic, built using Vite.

## 🚀 Getting Started

Follow these instructions to run the website locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Open your terminal and navigate to the project directory:
   ```bash
   cd /Users/tejasmankeshwar/Developer/Projects/Krushna_Homeopathic_Clinic
   ```

2. Install the necessary dependencies (Vite):
   ```bash
   npm install
   ```

### Running the Development Server

To start the local development server (with hot module replacement so the page automatically reloads when you save a file):

```bash
npm run dev
```

*This will output a local URL (e.g., `http://localhost:5173`) in your terminal. Click that link to open the site in your browser!*

### Building for Production

When you're ready to deploy the site to a host (like Vercel, Netlify, or standard web hosting):

```bash
npm run build
```

This will bundle and optimize all HTML, CSS, and image assets into a newly generated `dist` folder.

## 📂 Project Structure

- `index.html`: The Home Page.
- `about.html`: The 'About Doctor' Page.
- `services.html`: The 'Treatments & Services' Page.
- `contact.html`: The 'Book Appointment / Contact' Page.
- `package.json`: Contains project dependencies and scripts.
- `stitch_assets/`: The folder containing the design system guidelines (`design_system.json`) and raw design data.

## 🎨 Modifying Pages

The pages use **Tailwind CSS** via the CDN and a central configuration object inserted at the top of each HTML page. If you wish to change colors or styles, you can locate classes like `text-primary` or `bg-surface-container-low` which stem from the Etheric Health Design System located in `stitch_assets/design_system.json`.
