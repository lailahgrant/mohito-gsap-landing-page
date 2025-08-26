import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div>
            <h1 className="text-3xl text-green-300">Hello GSAP from TailwindCSS</h1>
        </div>
    )
}

export default App
