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
  location: "Canada",
  /** Canonical site URL. This is a user site, so it is served at the domain root. */
  url: "https://itserod.github.io",
  description:
    "Ethan in Canada. PC gaming, computers, and a few public projects.",

  hero: {
    tagline: "PC gaming and computers, from Canada.",
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
      "I'm Ethan. I live in Canada, work mostly in productivity, and spend the rest of my time on IT, computers, and PC gaming.",
      "On Steam I'm Erod. The profile thebigrod has been up since December 2016 and is level 80. Most of the hours are in Overwatch (150) and Deadlock (105), with WARDOGS next. The public summary is two PC Building Simulator icons: a GPU and a case.",
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
    lede: "A MacBook for daily work, and a separate PC for games. Hardware specs are still open.",
    items: [
      {
        name: "MacBook",
        summary:
          "The machine I use day to day. The model, chip, and memory are not written down here yet.",
        specs: [],
      },
      {
        name: "Gaming setup",
        summary:
          "The PC I play on. Steam lists 336 games. The case, display, and peripherals are not on the public profile.",
        specs: [
          { label: "Library", value: "336 games" },
          { label: "Most played", value: "Overwatch, Deadlock" },
          { label: "Also played", value: "WARDOGS" },
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
