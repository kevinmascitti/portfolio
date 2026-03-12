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
    category: "Web Application",
    year: "2024",
    image: "/vite.svg",
    overview:
      "A product-focused internal tool designed to manage inventory with fast flows and clear information hierarchy.",
    about:
      "This project was built to streamline warehouse operations and reduce manual steps across the whole workflow.",
    goal:
      "Create a clean UI system, improve data density without losing readability, and ship an interface that feels fast.",
    role: "UI Designer",
    services: ["UI Animation", "Type Design"],
    images: ["/vite.svg", "/vite.svg", "/vite.svg", "/vite.svg", "/vite.svg"],
  },

  {
    slug: "booking-platform",
    title: "Booking Platform",
    category: "Fullstack App",
    year: "2024",
    image: "/vite.svg",
    overview:
      "A booking experience with a strong emphasis on micro-interactions, accessibility, and a calm visual rhythm.",
    about:
      "The product explores ways to make multi-step booking feel effortless, with instant feedback and clear states.",
    goal:
      "Reduce friction and uncertainty: fewer surprises, stronger guidance, and a UI that stays out of the way.",
    role: "Frontend Developer",
    services: ["UI Engineering", "UX Prototyping"],
    images: ["/vite.svg", "/vite.svg", "/vite.svg", "/vite.svg"],
  },

  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    category: "Data Visualization",
    year: "2023",
    image: "/vite.svg",
    overview:
      "A data-heavy dashboard optimized for scanning, comparisons, and quick drill-down across metrics.",
    about:
      "The layout was designed around common analysis tasks: spot anomalies, compare time ranges, then dig deeper.",
    goal:
      "Keep charts readable, build trust with consistent formatting, and maintain performance with large datasets.",
    role: "Frontend Developer",
    services: ["Data Viz", "Design Systems"],
    images: ["/vite.svg", "/vite.svg", "/vite.svg"],
  },

]