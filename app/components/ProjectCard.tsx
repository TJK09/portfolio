"use client";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../data/project";
import { useRouter } from "next/navigation";

export default function ProjectCard({ project }: { project: Project }) {
    const router = useRouter();
    return(
        <>
        <Link 
            href={`/project/${project.slug}`}
            className="group rounded-2xl bg-gray-300 shadow-sm">
                <div className="relative w-full h-48">
                    <Image src={project.image} alt={project.title} fill className="object-cover rounded" />
                </div>
                <h1 className="text-[20px] font-semibold ml-4 h-[40px]">{project.title}</h1>
                <p className="text-sm text-gray-600 ml-4 h-[40px]">{project.excerpt}</p>
                <button className="rounded-2xl w-48 bg-black text-white text-[20px] font-semibold hover:cursor-pointer mt-4 hover:bg-black/50 shadow-2xl ml-[100px] h-[50px]"
                    onClick={() =>router.push(`/project/${project.slug}`)}>Read More!</button>            
            </Link>
        </>
    )
}