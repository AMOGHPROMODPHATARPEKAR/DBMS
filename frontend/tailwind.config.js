/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'work': "url('/src/assets/work.jpg')",
        'admin':"url('/src/assets/admin.jpg')",
        'inven':"url('/src/assets/inven.png')",
        'train':"url('/src/assets/source.png')",
        'home':"url('/src/assets/homeU.png')",
        'trainer':"url('/src/assets/trainer.png')",
        'met':"url('/src/assets/metric.png')",
        'in':"url('/src/assets/in.png')",
        'my':"url('/src/assets/my.png')",
        'best':"url('/src/assets/beast.png')",
        'prof':"url('/src/assets/profile.png')",
        'wk':"url('/src/assets/workout.jpg')",
        'metric':"url('/src/assets/met.png')",
        'stat':"url('/src/assets/stat.png')",
        'userAd':"url('/src/assets/us.jpg')",
        'AdU':"url('/src/assets/user.png')",
    
      }
    },
  },
  plugins: [],
}

