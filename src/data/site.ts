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
  /** Replace with the live site URL when you have a domain. */
  url: "https://example.com",
  description:
    "[Placeholder] One sentence about you for search results and link previews.",

  hero: {
    tagline: "[Placeholder] Replace this with your tagline.",
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
      "[Placeholder] Write a short bio. Starting points you already shared: you are based in Toronto, you work mostly in productivity, and you are into PC gaming, IT, and computers.",
      "[Placeholder] Add a second paragraph if you want one — how you work, what you are learning, or what this site is for. Delete it if you do not.",
    ],
  },

  projects: {
    heading: "Projects",
    lede: "[Placeholder] A sentence about the work or builds you want to show.",
    items: [
      {
        title: "[Placeholder] Project title",
        year: "[Placeholder]",
        summary:
          "[Placeholder] What you built, what you used, and why it is here.",
        tags: ["[Placeholder]"],
        href: "",
        linkLabel: "View project",
      },
      {
        title: "[Placeholder] Build title",
        year: "[Placeholder]",
        summary:
          "[Placeholder] Another card. Replace this text, or delete the card in site.ts.",
        tags: ["[Placeholder]"],
        href: "",
        linkLabel: "View project",
      },
      {
        title: "[Placeholder] Project title",
        year: "[Placeholder]",
        summary:
          "[Placeholder] A third card if you need it. Delete any card you do not want.",
        tags: ["[Placeholder]"],
        href: "",
        linkLabel: "View project",
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
        summary: "[Placeholder] What you play, or how the desk is set up.",
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
    lede: "[Placeholder] Say how you would like to hear from people.",
    email: "you@example.com",
    emailNote: "[Placeholder] Replace you@example.com with your real email.",
    socials: [
      {
        label: "GitHub",
        handle: "[Placeholder] your-handle",
        href: "https://example.com",
      },
      {
        label: "LinkedIn",
        handle: "[Placeholder] your-handle",
        href: "https://example.com",
      },
    ] satisfies SocialLink[],
  },
};
