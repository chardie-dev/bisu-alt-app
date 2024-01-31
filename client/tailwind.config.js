/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },

        // NEUTRAL
        neutral: {
          50: "#F5F5F5",
          100: "#EBEBEB",
          200: "#E0E0E0",
          300: "#D6D6D6",
          400: "#C2C2C2",
          500: "#ADADAD",
          600: "#858585",
          700: "#5C5C5C",
          800: "#333333",
          900: "#1F1F1F",
        },
      
        // PRIMARY
        primary: {
          50: "#EFD2D7",
          100: "#8F1FFF",
          300: "#7000E0",
          500: "#5200A3",
          700: "#330066",
        },
      
        // SECONDARY
        secondary: {
          50: "#FDF9D8",
          100: "#FBF3B2",
          300: "#F8ED8C",
          500: "#F5E663",
          700: "#D3BF0D",
        },
      
        // TERTIARY
        tertiary: {
          50: "#FFF4EB",
          100: "#FFDDC2",
          300: "#FFC799",
          500: "#FFAD69",
          700: "#FF8F33",
        },
      
        // SUCCESS
        success: {
          50: "#C8FFE6",
          100: "#85FFC7",
          300: "#1DFF97",
          500: "#2DE591",
          700: "#12A763",
        },
      
        // ERROR
        error: {
          50: "#FFEE94",
          100: "#FFDB1C",
          300: "#FF994F",
          500: "#FD3E3E",
          700: "#BF3232",
        },
      
        // WARNING
        warning: {
          50: "#FDBFB1",
          100: "#FD957E",
          300: "#FF7759",
          500: "#FD603E",
          700: "#CC4E32",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif']
    }
  },
  plugins: [require("tailwindcss-animate")],
}