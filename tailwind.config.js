/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        //night - cold
        "night-cold-sm": "url('/src/assets/backgrounds/night_cold_sm.png')",
        "night-cold-md": "url('/src/assets/backgrounds/night_cold_md.png')",
        "night-cold-lg": "url('/src/assets/backgrounds/night_cold_lg.png')",
        //night - warm
        "night-warm-sm": "url('/src/assets/backgrounds/night_warm_sm.png')",
        "night-warm-md": "url('/src/assets/backgrounds/night_warm_md.png')",
        "night-warm-lg": "url('/src/assets/backgrounds/night_warm_lg.png')",
        //night - sunny
        "night-sunny-sm": "url('/src/assets/backgrounds/night_sunny_sm.png')",
        "night-sunny-md": "url('/src/assets/backgrounds/night_sunny_md.png')",
        "night-sunny-lg": "url('/src/assets/backgrounds/night_sunny_lg.png')",

        //day - cold
        "day-cold-sm": "url('/src/assets/backgrounds/day_cold_sm.png')",
        "day-cold-md": "url('/src/assets/backgrounds/day_cold_md.png')",
        "day-cold-lg": "url('/src/assets/backgrounds/day_cold_lg.png')",
        //day - warm
        "day-warm-sm": "url('/src/assets/backgrounds/day_warm_sm.png')",
        "day-warm-md": "url('/src/assets/backgrounds/day_warm_md.png')",
        "day-warm-lg": "url('/src/assets/backgrounds/day_warm_lg.png')",
        //day - sunny
        "day-sunny-sm": "url('/src/assets/backgrounds/day_sunny_sm.png')",
        "day-sunny-md": "url('/src/assets/backgrounds/day_sunny_md.png')",
        "day-sunny-lg": "url('/src/assets/backgrounds/day_sunny_lg.png')",
      },
    },

    colors: {
      "bright-sun": {
        50: "#fefbe8",
        100: "#fdf4c4",
        200: "#fce88c",
        300: "#facd30",
        400: "#f7bc18",
        500: "#e7a30b",
        600: "#c77d07",
        700: "#9f5809",
        800: "#834610",
        900: "#703913",
        950: "#411c07",
      },

      white: "#fff",
      black: "#000",
      saved: "#34c759",
      remove: "#ff3b30",
      blue: "#99ffff",
    },
  },
  plugins: [],
  safelist: [
    "bg-day-cold-sm",
    "bg-day-cold-md",
    "bg-day-cold-lg",
    "bg-night-cold-sm",
    "bg-night-cold-md",
    "bg-night-cold-lg",
    "bg-day-warm-sm",
    "bg-day-warm-md",
    "bg-day-warm-lg",
    "bg-night-warm-sm",
    "bg-night-warm-md",
    "bg-night-warm-lg",
    "bg-day-sunny-sm",
    "bg-day-sunny-md",
    "bg-day-sunny-lg",
    "bg-night-sunny-sm",
    "bg-night-sunny-md",
    "bg-night-sunny-lg",
  ],
};
