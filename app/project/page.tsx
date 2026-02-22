"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "../../data/project";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/Navbar";

const techfilters = ["All", "React", "Next.js", "TypeScript","Django", "Laravel PHP"];

export default function Project(){
    const [filter, setFilter] = useState("All");

    const filtered = projects.filter((p) =>filter === "All" ? true : p.technologies.includes(filter));

    return(
        <section className="flex flex-col">
 /           <h1 className= "text-[30px] font-semibold mt-10">My Projects</h1>

        {/* Filter */}
            <h1 className="text-[20px] font-semibold mt-10">Filters</h1>
            <div className="flex">
                
                {techfilters.map((t) => (
                    <button className={`px-4 py-2 rounded ${filter === t ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`} 
                        onClick={() => setFilter(t)}
                         key={t}>
                      {t}  
                    </button>
                ))}
            </div>
            {/*Cards Grid*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mx-10  ">
                {filtered.map((p) => (
                    <ProjectCard project={p} key={p.slug} />
                ))}
            </div>
        </section>
    )
}