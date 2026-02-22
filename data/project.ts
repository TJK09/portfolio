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
    technologies: ["Next.js", "Django"],
    github: ""
},
{
    slug: "travel-tourism",
    title:"Travel & Tourism Website",
    description: "A travel and tourism website built using Next.js and Tailwind CSS. It features a responsive design, interactive maps, and a booking system for hotels and tours.",
    image: "/images/travel-tourism.png",
    excerpt: "A travel and tourism website built using React Js and Tailwind CSS. And for the backend we used Django and its Rest Framework.",
    technologies: ["React Js", "Django"],
    github: ""
},
{
    slug: "e-commerce",
    title: "E-commerce Platform",
    description: "An e-commerce platform built using React, Node.js, and MongoDB. It includes features such as product listings, shopping cart functionality, and secure payment processing.",
    image: "/images/e-commerce.png",
    excerpt: "An e-commerce platform built using Next Js and Tailwind CSS.",
    technologies: ["React", "Django"],
    github: ''
},
{
    slug:"job-board",
    title: "Job Board",
    description: "A job board website built using Tailwind CSS and Laravel PHP. It allows employers to post job listings and job seekers to search and apply for jobs.",
    image: "/images/job-board.png",
    excerpt: "A job board website built using Tailwind CSS and Laravel PHP.",
    technologies: ["Tailwind CSS", "Laravel PHP"],
    github: ''
},
{
    slug:"car-rental",
    title: "Car Rental Service",
    description: "A car rental service website built using Next.js, Node.js(Nest.js)(Typescript), and MongoDB. It provides features such as vehicle listings, reservation management, and payment processing.",
    image: "/images/car-rental.png",
    excerpt: "A car rental service website built using Next.js, Nest.js, and MongoDB.",
    technologies: ["Next.js", "TypeScript", "Nest.js" ,"MongoDB"],
    github: ''
}
]