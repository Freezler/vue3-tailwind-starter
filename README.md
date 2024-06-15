## set up Vue3 app

- 1. Create new vue app with create-vite.

```
npx create-vite@latest my-vue-app
```
to use the install wizard or:
```
npx create-vite@latest my-vue-app --template vue

```
- 2. cd into my-vue-app and install the dependencies.
```
~/my-vue-app -> npm i
```
- 3. Now install and initialize tailwindCSS, postcss and autoprefixer.
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- 4. This generates the tailwind.config.js and postcss.config.js files, add the following to the tailwind.config.js file: 
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```
- 5. Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
you will have to make this file in the src folder
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- 6. Now run the build command
```
npm run dev
```
- 7. Visit http://localhost:5137 in your browser to see if it works. or take a look at the terminal output.
```
VITE v5.3.1  ready in 140 ms
-> Local: http://localhost:5173/
-> Network: use --host to expose
-> press h + enter to show help
```
- 8. Adding and Implementing Vue Router 4

```
npm install vue-router@4
```
- 9. Create a new router file
```
// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import components for routing
import HomeComponent from '../components/HomeComponent.vue'
import AboutComponent from '../components/AboutComponent.vue'

// Define routes
const routes = [
  { path: '/', component: HomeComponent },
  { path: '/about', component: AboutComponent }
]

// Create router instance
const router = create
Router({
  history: createWebHistory(),
  routes
})

export default router
```
- 10. To include and use the router to your vue Instance add the following to your main.js file
```
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
```
- 11. Add the router-view and router-links to your App.vue file.
```
<template>
  <div id="app">
    <h1>My Vue App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
```
- 12. to see it in action, run the build command and go to http://localhost:5137.
```
npm run dev
```
