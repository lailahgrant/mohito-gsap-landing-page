import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <div>
            App
        </div>
    )
}

export default App
