/**
 * All editable site content lives in this file.
 *
 * Search for "[Placeholder]" and replace those strings with real details.
 * Name, city, focus areas, and the two setup names below are filled in from
 * what Ethan already shared. Everything else is waiting on him.
 * Delete a card or paragraph instead of inventing a fact.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  year: string;
  summary: string;
  tags: string[];
  /** Full URL, or "" until there is a real link. */
  href: string;
  linkLabel: string;
};

export type Spec = {
  label: string;
  value: string;
};

export type GearItem = {
  name: string;
  summary: string;
  specs: Spec[];
};

export type SocialLink = {
  label: string;
  /** Shown under the network name. */
  handle: string;
  /** Full profile URL. example.com is a stand-in, not a real profile. */
  href: string;
};

export const site = {
  name: "Ethan",
  location: "Toronto",
  /** Canonical site URL. This is a user site, so it is served at the domain root. */
  url: "https://itserod.github.io",
  description:
    "Ethan in Toronto. PC gaming, computers, and a few public projects.",

  hero: {
    tagline: "PC gaming and computers, from Toronto.",
    /**
     * Topics Ethan shared. Edit or remove any that should not be on the site.
     */
    focuses: ["Productivity", "IT", "Computers", "PC gaming"],
    primaryAction: { label: "View projects", href: "#projects" },
    secondaryAction: { label: "Get in touch", href: "#contact" },
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Setup", href: "#setup" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],

  about: {
    heading: "About",
    paragraphs: [
      "Based in Toronto, working mostly in productivity, and into IT, computers, and PC gaming. On Steam he is Erod (thebigrod): member since December 2016, level 80, with Ontario, Canada on the profile.",
      "Most of the recorded playtime is Overwatch (150 hours) and Deadlock (105 hours). The public Steam summary is two PC Building Simulator icons, a GPU and a case.",
    ],
  },

  projects: {
    heading: "Projects",
    lede: "Steam Workshop items from the public profile, and this site.",
    items: [
      {
        title: "AWP 1v1 to 5v5",
        year: "Counter-Strike 2",
        summary:
          "A Steam Workshop map. The description on the item says it was his first map, and asks what people want added.",
        tags: ["Steam Workshop", "Map"],
        href: "https://steamcommunity.com/sharedfiles/filedetails/?id=1545168136",
        linkLabel: "View on Steam",
      },
      {
        title: "R6S Snow Glaz",
        year: "Wallpaper Engine",
        summary: "A Wallpaper Engine item described as Glaz during snow combat.",
        tags: ["Steam Workshop", "Wallpaper"],
        href: "https://steamcommunity.com/sharedfiles/filedetails/?id=1403886346",
        linkLabel: "View on Steam",
      },
      {
        title: "Personal site",
        year: "2026",
        summary:
          "This page. A static site for Ethan, hosted on GitHub Pages at the domain root.",
        tags: ["Astro", "GitHub Pages"],
        href: "https://github.com/ItsErod/ItsErod.github.io",
        linkLabel: "View repository",
      },
    ] satisfies Project[],
  },

  gear: {
    heading: "Setup",
    lede: "[Placeholder] Specs below are waiting on the real details.",
    items: [
      {
        name: "MacBook",
        summary: "[Placeholder] What you use this machine for.",
        specs: [
          { label: "Model", value: "[Placeholder]" },
          { label: "Chip", value: "[Placeholder]" },
          { label: "Memory", value: "[Placeholder]" },
          { label: "Storage", value: "[Placeholder]" },
        ],
      },
      {
        name: "Gaming setup",
        summary:
          "Steam playtime is mostly Overwatch and Deadlock. The PC, display, and peripherals are not on the public profile.",
        specs: [
          { label: "PC", value: "[Placeholder]" },
          { label: "Display", value: "[Placeholder]" },
          { label: "Peripherals", value: "[Placeholder]" },
          { label: "Audio", value: "[Placeholder]" },
        ],
      },
    ] satisfies GearItem[],
  },

  contact: {
    heading: "Contact",
    lede: "GitHub and Steam are filled in. Email and LinkedIn are still placeholders.",
    email: "you@example.com",
    emailNote: "[Placeholder] Replace you@example.com with your real email.",
    socials: [
      {
        label: "GitHub",
        handle: "ItsErod",
        href: "https://github.com/ItsErod",
      },
      {
        label: "Steam",
        handle: "Erod",
        href: "https://steamcommunity.com/id/thebigrod/",
      },
      {
        label: "LinkedIn",
        handle: "[Placeholder] Add your profile URL",
        href: "",
      },
    ] satisfies SocialLink[],
  },
};
