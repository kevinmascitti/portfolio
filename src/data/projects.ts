export type Project = {
  slug: string
  titleKey: string
  categoryKey: string
  year: string
  image: string
  overviewKey: string
  aboutKey: string
  goalKey: string
  roleKey: string
  servicesKey: string
  /** Optional video URL; when set, it replaces the first two image slots at the top */
  video?: string
  /** Image URLs; when video is set, these are shown below the text; otherwise first two are top, rest in scroll */
  images: string[]
}

import { projectAssets } from "./projectAssets"

const projectsList: Project[] = [

  {
    slug: "televasion",
    titleKey: "project.televasion.title",
    categoryKey: "project.televasion.category",
    year: "2024",
    image: projectAssets.televasion.image,
    overviewKey: "project.televasion.overview",
    aboutKey: "project.televasion.about",
    goalKey: "project.televasion.goal",
    roleKey: "project.televasion.role",
    servicesKey: "project.televasion.services",
    video: projectAssets.televasion.video,
    images: projectAssets.televasion.images,
  },

  {
    slug: "connecting-nature",
    titleKey: "project.connecting-nature.title",
    categoryKey: "project.connecting-nature.category",
    year: "2024",
    image: projectAssets["connecting-nature"].image,
    overviewKey: "project.connecting-nature.overview",
    aboutKey: "project.connecting-nature.about",
    goalKey: "project.connecting-nature.goal",
    roleKey: "project.connecting-nature.role",
    servicesKey: "project.connecting-nature.services",
    video: projectAssets["connecting-nature"].video,
    images: projectAssets["connecting-nature"].images,
  },

  {
    slug: "outer-words",
    titleKey: "project.outer-words.title",
    categoryKey: "project.outer-words.category",
    year: "2024",
    image: projectAssets["outer-words"].image,
    overviewKey: "project.outer-words.overview",
    aboutKey: "project.outer-words.about",
    goalKey: "project.outer-words.goal",
    roleKey: "project.outer-words.role",
    servicesKey: "project.outer-words.services",
    video: projectAssets["outer-words"].video,
    images: projectAssets["outer-words"].images,
  },

  {
    slug: "arise-of-cosmos",
    titleKey: "project.arise-of-cosmos.title",
    categoryKey: "project.arise-of-cosmos.category",
    year: "2024",
    image: projectAssets["arise-of-cosmos"].image,
    overviewKey: "project.arise-of-cosmos.overview",
    aboutKey: "project.arise-of-cosmos.about",
    goalKey: "project.arise-of-cosmos.goal",
    roleKey: "project.arise-of-cosmos.role",
    servicesKey: "project.arise-of-cosmos.services",
    images: projectAssets["arise-of-cosmos"].images,
  },

  {
    slug: "zurg-attack",
    titleKey: "project.zurg-attack.title",
    categoryKey: "project.zurg-attack.category",
    year: "2022",
    image: projectAssets["zurg-attack"].image,
    overviewKey: "project.zurg-attack.overview",
    aboutKey: "project.zurg-attack.about",
    goalKey: "project.zurg-attack.goal",
    roleKey: "project.zurg-attack.role",
    servicesKey: "project.zurg-attack.services",
    video: projectAssets["zurg-attack"].video,
    images: projectAssets["zurg-attack"].images,
  },

  {
    slug: "andys-room",
    titleKey: "project.andys-room.title",
    categoryKey: "project.andys-room.category",
    year: "2022",
    image: projectAssets["andys-room"].image,
    overviewKey: "project.andys-room.overview",
    aboutKey: "project.andys-room.about",
    goalKey: "project.andys-room.goal",
    roleKey: "project.andys-room.role",
    servicesKey: "project.andys-room.services",
    images: projectAssets["andys-room"].images,
  },

  {
    slug: "rabbids-motorola-adv",
    titleKey: "project.rabbids-motorola-adv.title",
    categoryKey: "project.rabbids-motorola-adv.category",
    year: "2023",
    image: projectAssets["rabbids-motorola-adv"].image,
    overviewKey: "project.rabbids-motorola-adv.overview",
    aboutKey: "project.rabbids-motorola-adv.about",
    goalKey: "project.rabbids-motorola-adv.goal",
    roleKey: "project.rabbids-motorola-adv.role",
    servicesKey: "project.rabbids-motorola-adv.services",
    video: projectAssets["rabbids-motorola-adv"].video,
    images: projectAssets["rabbids-motorola-adv"].images,
  },

]

/** Progetti ordinati per anno decrescente; a parità di anno resta l'ordine di definizione. */
export const projects = [...projectsList].sort((a, b) => Number(b.year) - Number(a.year))