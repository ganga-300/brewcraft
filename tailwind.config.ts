import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
            extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
                coffee: {
          50: "#faf8f5",
          100: "#f4f0e8",
          200: "#e8ddd0",
          300: "#d9c4a9",
          400: "#c8a882",
          500: "#b8916a",
          600: "#a67c5a",
          700: "#8a654a",
          800: "#6f523f",
          900: "#5a4335",
          950: "#2e221b",
        },
        espresso: {
          50: "#f9f7f4",
          100: "#f1ebe3",
          200: "#e3d5c5",
          300: "#d0b89e",
          400: "#bc9675",
          500: "#ad7f5a",
          600: "#9f6d4f",
          700: "#855742",
          800: "#6b463a",
          900: "#563a30",
          950: "#2d1f19",
        },
        gold: {
          50: "#fffdf7",
          100: "#fffaeb",
          200: "#fff3c6",
          300: "#ffe697",
          400: "#ffd558",
          500: "#ffc62f",
          600: "#f0a90a",
          700: "#cc7a06",
          800: "#a15d09",
          900: "#854d0b",
          950: "#4a2600",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
