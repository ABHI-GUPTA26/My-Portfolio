import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import reactimage from '../assets/reactimage.png'
import tailwind from '../assets/tailwind.png'
import dsa from '../assets/dsa.png'
import expressimage from '../assets/expressimage.png'
import mongodb from '../assets/mongodb.png'
import c from '../assets/c.png'

const Experience = () => {
    const links=[
        {
            id:1,
            src:html,
            title:'Html',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'Css',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:github,
            title:'Github',
            style:'shadow-gray-500'
        },
        {
            id:4,
            src:javascript,
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:5,
            src:node,
            title:'Node Js',
            style:'shadow-green-500'
        },
        {
            id:6,
            src:reactimage,
            title:'React',
            style:'shadow-sky-600'
        },
        {
            id:7,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-cyan-400'
        },
        {
            id:8,
            src:c,
            title:'C++',
            style:'shadow-blue-500'
        },
        {
            id:9,
            src:expressimage,
            title:'Express Js',
            style:'shadow-gray-400'
        },
        {
            id:10,
            src:mongodb,
            title:'Mongo Db',
            style:'shadow-green-800'
        },
        {
            id:11,
            src:dsa,
            title:'DSA',
            style:'shadow-sky-400'
        },
    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen" >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div className="mt-40 sm:mt-20">
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">Experience</p>
            <p className="py-6">These are the technologies I've worked with</p>

        </div>
        <div className="w-half grid grid-cols-3 sm:grid-cols-4
        gap-8 text-center py-8 px-12 sm:px-0 ">
            
        {links.map(({id,src,title,style})=>(
            <div 
            key={id}
            className={`shadow-md hover: scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt=""  className="w-20 mx-auto"/>
            <p className="mt-4">{title}</p>
         </div>
        ))

        }    
            
            
        </div>
      </div>
    </div>
  )
}

export default Experience
