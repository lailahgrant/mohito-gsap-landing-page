## Web Animations Full Course 2025 _ Build an Awwwards Website _ Master GSAP by Adrian (JavaScript Mastery)

> Web Animations enable web developers build `experiences`.

<div align="center">
    <a href="https://gsap-crash-course.vercel.app" target="_blank">
      <img src="public/preview.png" alt="Project Banner">
    </a>
  <h3 align="center">Landinag Page</h3>
</div>

##  <br /> 📋 <a name="table">Table of Contents</a>

- ✨ [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 🔋  [Features](#features)
- 🚀 [Quick Start](#quick-start)
- ⚙️ [How to Animate using GSAP](#animate-using-gsap)

##  <br /> <a name="introduction">✨ Introduction</a>

Simple GSAP workshop showcasing various primary animations. GSAP (GreenSock Animation Platform) is a framework-agnostic JavaScript animation library used to create fluid and engaging animations.


##  <br /> <a name="tech-stack">⚙️ Tech Stack</a>

#### To Use
- [x] GSAP
- [x] React
- [x] Vite
- [x] TailwindCSS

- [**React**](https://react.dev/reference/react) is a popular JavaScript library for building user interfaces, particularly single-page applications where data changes over time. React's component-based architecture allows developers to create reusable UI components, making development more efficient and the codebase easier to maintain. 

- [**GSAP**](https://gsap.com/resources/) (GreenSock Animation Platform) is a powerful JavaScript library for creating high-performance animations. It excels in animating HTML elements with smoothness and precision, making it ideal for enhancing user interfaces and web experiences. GSAP's robust API allows developers to create complex animations easily, leveraging timelines and plugins for advanced control and customization. Its efficient rendering engine ensures animations run smoothly across different browsers and devices, providing a seamless user experience.

- [**Vite**](https://vitejs.dev/guide/) is a modern frontend build tool known for fast ES Module imports, efficient bundling, and quick development server startup times. It supports frameworks like Vue.js and React, optimizing workflow and performance compared to traditional bundlers.


## ✨ Why GSAP?
- [x] What is GSAP?
- [x] Why is it so powerful?
- [x] Pro tips, tricks
- [x] Common mistakes
- [x] How to integrate GSAP with Reactjs, Vuejs, Nextjs or any other frontend framework

[Ultimate GSAP Animations Course](https://www.jsmastery.pro)


### GSAP Basics
- [x] How to animate elements using `from()` `to()` `fromTo()` methods
- [x] How to control animations with `ScrollTrigger() `
- [x] How to **stagger animations** for maximum visual impact
- [x] How to animate text using `SplitText` plugin
- [x] How to sequence animations one after another with `gsap.timeline()`


## <br /> <a name="features">🔋 Features</a>
👉 **SplitText Animations**: Create impactful text reveals using GSAP’s SplitText for dynamic intros and section highlights.

👉 **ScrollTrigger Effects**: Power scroll-based animations and timeline control with GSAP’s ScrollTrigger.

👉 **Parallax Scrolling**: Add immersive depth with smooth parallax effects that respond to user scroll.

👉 **Pinned Sections**: Lock sections in view while animating content for engaging scroll experiences.

👉 **Scroll-Synced Video Playback**: Sync video progress with scroll position for cinematic storytelling.

👉 **Image Masking Effects**: Use scroll-triggered pins and masks for visually striking image transitions.

👉 **Custom Carousel**: Build a fully customized carousel with multiple navigation options and animated slides.

👉 **Seamless Timeline Animations**: Craft smooth animation timelines that span across multiple sections.

👉 **Responsive Design**: Ensure fluid UI and adaptive GSAP animations across all screen sizes.

And many more, including enhanced security and optimized video performance!


## <br /> <a name="quick-start">🚀 Quick Start</a>


Follow these steps to start the new project on your local machine.


<br/>**Prerequisites**


Make sure you have the following installed on your machine:


- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

<br/>**Installation**

Let's install a new react project in the current repo:

```bash
npm create vite@latest ./
```

<br/>**Now Run**

```bash
npm install
```

<br/>**Running the Project**

Installation will take a minute or two, but once that's done, you should be able to run the following command:

```bash
npm run dev
```

Open [`http://localhost:5173`](http://localhost:5173) in your browser to view the project.


<br/>**Install GSAP**

Use the following command to start adding the **GSAP animations** and **react responsiveness**:

```bash
npm install gsap @gsap/react
```

**Use GSAP**
- By using it's 2 plugins
- Use these plugins in the `App.jsx` file

```jsx
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

```

- [x] `ScrollTrigger` - this plugin allows us to animate things based on the **scroll position**.
- [x] `SplitText` - this plugin allows us to break text into individual words or characters for detailed text animation

<br/> **Setup Tailwind CSS**

Installing Tailwind CSS as a Vite plugin is the most seamless way to integrate it  React Router.

- Install Tailwind CSS

```bash
npm install tailwindcss @tailwindcss/vite
```

- Configure the Vite plugin

Add the `@tailwindcss/vite` plugin to your Vite configuration in the `vite.config.js` file.

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- Import Tailwind CSS

Add an @import to your CSS file that imports Tailwind CSS `index.css` file.

```css
@import "tailwindcss";
```





