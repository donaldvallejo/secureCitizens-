# Rockademy

**[Click Here](https://dev-rockademy.herokuapp.com) to view the current dev deployment of this project**

## Developer Notes

---
---

### Deployment
CircleCI will build Docker images from the `develop` and `main` branches. When ready to release, approve the CircleCI deploy step or execute:
```
heroku login
heroku container:release web --app rockademy
```

### **Directory Structure:**
* `/pages` - every folder in this directory creates a new URL endpoint (ie. `/pages/lessons` is found at "`localhost:3000/lessons`" URL)

    * **NOTE:** nested directories and/or files create further URL endpoints, so any sub-components should be placed in the `/components` or `/containers` directories (depending on the nature of the component)

* `/components` and `/containers` both contain an `index.js` fild which exports all of the components within their respective directories. Please take note of the structure of these files, as well as the method of exporting each individual component from their nested directories

    * **NOTE:** These files do not use `export default`

* The NavBar, Footer and all Meta-Data are served by the `<Layout />` component found in the `/layout` directory. ALL PAGES NEEDING THESE ELEMENTS MUST BE WRAPPED IN THIS COMPONENT AT THEIR TOP LEVEL

### **CSS Notes:**

* All styling is accomplished through 'styled-components' using the tailwind classes

* Styling should be set up as follows:

```js
// all elements are designated as 'motion' elements
import { motion } from 'framer-motion' 
// required imports for tailwind styled-components
import tw, { styled, css } from 'twin.macro'  

// ============================ //
// STYLED / TAILWIND COMPONENTS //
// ============================ //
export const Container = styled(motion.div)(() => [
    // 'tw' is used to delineate tailwind classes
  tw` 
      flex
      flex-col
      items-center
      bg-gray-800
      text-white 
      px-4
      py-32`,
  tw`
      md:px-20
      lg:px-28
      `
])
```

### Common CSS to this project:
* `font-display` - this is the primary font tailwind-class for the site - it should be used as the basic font for all pages and components
* **Neumorphism**: These are the values being used to create the neumorphic effects through:

```css
border-radius: 22px;
background: #1f2937;
box-shadow:  5px 5px 10px #141a23,
             -5px -5px 10px #2a384b;
/* IF APPLYING TO INPUTS: */
box-shadow:  inset 5px 5px 10px #141a23,
             inset -5px -5px 10px #2a384b;
```
