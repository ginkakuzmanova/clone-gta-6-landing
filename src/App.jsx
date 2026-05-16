import React from 'react'
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Hero from "./sections/Hero.jsx";
import VideoJasonDuval from "./sections/VideoJasonDuval.jsx";
import Jason from "./sections/Jason.jsx";
import VideoLuciaCamino from "./sections/VideoLuciaCamino.jsx";
import Lucia from "./sections/Lucia.jsx";
import PostCard from "./sections/PostCard.jsx";
import Final from "./sections/Final.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
    return (
        <main>
            <nav>
                <img src="/images/nav-logo.svg" alt="logo" className={'scale-90'}/>
                <img src="/images/menu.svg" alt="menu" className={'w-10'}/>
            </nav>
            <Hero/>
            <VideoJasonDuval/>
            <Jason/>
            <VideoLuciaCamino/>
            <Lucia/>
            <PostCard/>
            <Final/>
        </main>
    )
}
export default App
