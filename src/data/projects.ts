export type Project = {
  slug: string
  title: string
  category: string
  year: string
  image: string
  overview?: string
  about?: string
  goal?: string
  role?: string
  services?: string[]
  images: string[]
}

export const projects: Project[] = [

  {
    slug: "inventory-system",
    title: "Inventory System",
    category: "Gamified 3D tool",
    year: "2024",
    image: "/vite.svg",
    overview:
      "A gamified 3D-inspired internal tool to manage inventory with fast flows and a clear spatial hierarchy of information.",
    about:
      "Instead of a flat table, this concept explores a more visual way to browse items, highlighting states and transitions so that problems stand out at a glance.",
    goal:
      "Make repetitive operations feel lighter through motion, micro-interactions and feedback, while keeping the interface precise and reliable.",
    role: "3D & UX Designer",
    services: ["Interaction Design", "UI Animation", "Gamification"],
    images: ["/vite.svg", "/vite.svg", "/vite.svg", "/vite.svg", "/vite.svg"],
  },

  {
    slug: "booking-platform",
    title: "Booking Platform",
    category: "Interactive experience",
    year: "2024",
    image: "/vite.svg",
    overview:
      "A booking flow treated almost like a small game, with subtle animations and feedback to guide people through each step.",
    about:
      "The project focuses on how motion, timing and sound design can reduce the perceived complexity of a multi-step experience, keeping users oriented from start to finish.",
    goal:
      "Turn a rigid form into a fluid, reassuring journey: fewer dead ends, clearer states and an experience that feels calm rather than stressful.",
    role: "Interaction & Frontend Developer",
    services: ["UI Engineering", "UX Prototyping", "Micro-interactions"],
    images: ["/vite.svg", "/vite.svg", "/vite.svg", "/vite.svg"],
  },

  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    category: "Data storytelling",
    year: "2023",
    image: "/vite.svg",
    overview:
      "A dashboard that treats metrics as a visual narrative, helping people follow trends rather than stare at raw numbers.",
    about:
      "The interface explores more expressive charts, focused highlights and progressive disclosure so that the most important signals always feel foregrounded.",
    goal:
      "Balance density and clarity: pack a lot of information in, but keep the experience scannable, smooth and aesthetically coherent.",
    role: "Data Viz & Frontend Developer",
    services: ["Data Visualization", "Interaction Design"],
    images: ["/vite.svg", "/vite.svg", "/vite.svg"],
  },

]