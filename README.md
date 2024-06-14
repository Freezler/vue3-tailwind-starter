## set up Vue3 app

- 1. Create new vue app with create-vite.

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
. 4. This generates the tailwind.config.js and postcss.config.js files, add the following to the tailwind.config.js file: 
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
. 5. Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.
you will have to make this file in the src folder
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
. 6. Now run the build command
```
npm run dev
```
. 7. Visit http://localhost:5137 in your browser to see if it works.

work in progress!!

