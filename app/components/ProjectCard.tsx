import Image from "next/image";
import Link from "next/link";
import { Project } from "../../data/project";

export default function ProjectCard({ project }: { project: Project }) {
    return(
        <>
        <Link 
            href={`/project/${project.slug}`}
            className="group rounded">
                <div className="relative w-full h-48">
                    <Image src={project.image} alt={project.title} fill className="object-cover rounded" />
                </div>
                <h1>Hello</h1>
            
            </Link>
        </>
    )
}