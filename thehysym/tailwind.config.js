export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // Tiny Text
        'xxs': '0.625rem',  // 10px
        
        // Standard Tailwind Sizes (Extended)
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '3.75rem',   // 60px
        '7xl': '4.5rem',    // 72px
        '8xl': '6rem',      // 96px
        '9xl': '8rem',      // 128px

        // Custom Giant Sizes
        '10xl': '10rem',    // 160px
        '11xl': '12rem',    // 192px
        '12xl': '14rem',    // 224px
        '13xl': '16rem',    // 256px
        '14xl': '18rem',    // 288px
        '15xl': '20rem',    // 320px
        
        // Pixel-Perfect Sizes
        'h1': '3.052rem',
        'h2': '2.441rem',
        'h3': '1.953rem',
        
        // Fluid Typography (Clamp)
        'fluid': 'clamp(2rem, 5vw, 5rem)'
      }
    }
  },
  plugins: [],
}