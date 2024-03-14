
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
import Javascript from "./Javascript.astro"
import Figma from "./Figma.astro"
import Gimp from "./Gimp.astro"
import MongoDB from "./MongoDB.astro"
import SQL from "./SQL.astro"
import Postgress from "./Postgress.astro"
import Firebase from "./Firebase.astro"
import Neflify from "./Neflify.astro"
import Typescript from "./Typescript.astro"
interface Technologies {
    title: string;
    icon: any; 
    color: string;
  }
  
interface Tags{
    [key:string]: Technologies
}

export const TAGS: Tags = {
    HTML: {
      title: "HTML",
      icon: HTMLICON,
      color: "bg-orange-600 text-slate-50"
    },
    CSS: {
      title: "CSS",
      icon: CSSICON,
      color: "bg-teal-800"
    },
    JS: {
      title: "Javascript",
      icon: Javascript,
      color: "bg-yellow-950 text-slate-50"
    },
    TYPESCRIPT:{
      title:"Typescript",
      icon:Typescript,
      color:"bg-blue-950 text-slate-50"
    }
    ,
    REACT: {
      title: "React",
      icon: React,
      color: "bg-blue-950 text-slate-50"
    },
    NEXT: {
      title: "Next js",
      icon: Nextjs,
      color: "bg-gray-950 text-slate-50"
    },
    TAILWIND: {
      title: "Tailwind",
      icon: Tailwind,
      color: "bg-teal-800"
    },
    THREEJS: {
      title: "Three js",
      icon: THREEJS,
      color: "bg-teal-600"
    },
    VITE: {
      title: "Vite",
      icon: VITE,
      color: "bg-yellow-950 text-slate-50"
    },
    NODE: {
      title: "Node",
      icon: Node,
      color: "bg-green-950"
    },
    EXPRESS: {
      title: "Express",
      icon: Express,
      color: "bg-gray-950 text-slate-50"
    },
    ASTRO: {
      title: "Astro",
      icon: AstroIcon,
      color: "bg-orange-950 text-slate-50"
    },
    FIGMA:{
      title:"Figma",
      icon:Figma,
      color:"bg-orange-950 text-slate-50"
    },
    GIMP:{
      title:"Gimp",
      icon:Gimp,
      color:"bg-orange-950 text-slate-50"
    },
    MONGODB:{
      title:"MongoDB",
      icon:MongoDB,
      color:"bg-green-950"
    },
    SQL:{
      title:"SQL",
      icon:SQL,
      color:"bg-teal-800"
    },
    POSTGRESQL:{
      title:"PostgreSQL",
      icon:Postgress,
      color:"bg-teal-800"
    },
    FIREBASE:{
      title:"Firebase",
      icon:Firebase,
      color:"bg-orange-950 text-slate-50"
    },
    NETLIFY:{
      title:"Netlify",
      icon:Neflify,
      color:"bg-teal-800"
    }
  };
  