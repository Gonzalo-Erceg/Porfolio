
import AstroIcon from "./AstroIcon.astro"
import Nextjs from "./Nextjs.astro"
import Tailwind from "./Tailwind.astro"
import React from "./React.astro"
import Express from "./Express.astro"
import Node from "./Node.astro"
import HTMLICON from "./HTML.astro"
import CSSICON from "./CSS.astro"
import THREEJS from "./Threejs.astro"
import VITE from "./Vite.astro"
export const TAGS = {
    NEXT: {
        title:"Next js",
        icon:Nextjs ,
        color:"bg-gray-950 text-slate-50"

    },
    TAILWIND: {
        title:"Tailwind",
        icon:Tailwind,
        color:"bg-teal-800 "
    },
    ASTRO: {
        title: "Astro",
        icon:AstroIcon,
        color:"bg-orange-950 text-slate-50"
    },
    REACT:{
        title: "React",
        icon: React,
        color:"bg-blue-950 text-slate-50"
    },
    EXPRESS:{
        title:"Express",
        icon:Express,
        color:"bg-gray-950 text-slate-50"
    },
    NODE:{
        title: "Node",
        icon:Node,
        color:"bg-green-600"
    },
    HTML:{
        title:"HTML",
        icon:HTMLICON,
        color:"bg-orange-600 text-slate-50"
    },
    CSS:{
        title: "CSS",
        icon:CSSICON,
        color:"bg-teal-800 "
    },
    THREEJS:{
        title:"Three js",
        icon:THREEJS,
        color:"bg-teal-600"
    },
    VITE:{
        title:"Vite",
        icon:VITE,
        color:"bg-yellow-950 text-slate-50"
    }



}
