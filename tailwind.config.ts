import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        terracotta: '#8B3A2F',
        or: '#D4AF37',
        orClair: '#E8C974',
        os: '#F5EFE6',
        minuit: '#0B3D2E',
        creme: '#EDE4D3',
        cafe: '#2A1F1A',
      },
      boxShadow: {
        'terracotta': '0 20px 60px -15px rgba(139,58,47,0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
