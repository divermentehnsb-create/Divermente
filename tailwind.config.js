module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        deepblue: '#0B1F5B',
        tealbright: '#1BBBCF',
        skysoft: '#DFF6FF',
        purplegentle: '#7B4AE2',
        warmgold: '#F6C445',
        inclusive: '#76C043',
        coralsoft: '#F76C8C'
      },
      boxShadow: {
        soft: '0 24px 80px rgba(11, 31, 91, 0.08)',
        glow: '0 0 40px rgba(27, 187, 207, 0.18)'
      },
      backgroundImage: {
        'hero-wave': 'radial-gradient(circle at top left, rgba(27,187,207,0.15), transparent 32%), radial-gradient(circle at bottom right, rgba(247,108,140,0.14), transparent 30%)'
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Nunito', 'system-ui', 'sans-serif']
      },
      borderRadius: {
        xl2: '28px'
      }
    }
  },
  plugins: []
};
