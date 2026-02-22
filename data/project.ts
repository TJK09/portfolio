export type Project = {
    slug: string,
    title: string,
    description: string,
    image: string,
    excerpt: string,
    technologies: string[],
    github: string,
    live?: string,
    learning?: string[]
    challenges?: string[],
};

export const projects: Project[] = [{
    slug: "deepheal-hms",
    title: "DeepHeal HMS",
    description: "A hospital management system built using React, Node.js, and MongoDB. It provides features such as patient registration, appointment scheduling, and medical record management.",
    image: "/images/deepheal-hms.png",
    excerpt: "A hospital management system built using React, Node.js, and MongoDB.",
    technologies: ["React", "Django", "PostgreSQL"],
    github: ""

},
{
    slug: "foodie",
    title: "Foodie",
    description: "A food delivery app built using React Native and Firebase. It allows users to browse restaurants, place orders, and track deliveries in real-time.",
    image: "/images/foodie.png",
    excerpt: "A food delivery app built using React Native and Firebase.",
    technologies: ["React Native", "Firebase"],
    github: ""
},
]