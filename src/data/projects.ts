export type ProjectLink = {
  label: string;
  url: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string[];
  techStack: string[];
  highlights: string[];
  links: ProjectLink[];
  screenshots: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    slug: 'irakhay',
    name: 'Irakhay',
    category: 'Multi-lingual e-commerce platform',
    summary:
      'Full-stack marketplace with multi-role access, automated workflows, and integrated payments.',
    description: [
      'Built a production-grade platform supporting user, admin, and super-admin workflows.',
      'Implemented Stripe and Yomoney payments with automated email flows and cart cleanup jobs.',
      'Integrated Telegram chat support and deployed the system across AWS and Yandex servers.',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'MySQL', 'AWS', 'Stripe', 'Yomoney'],
    highlights: [
      'Multi-role interfaces and permissioned dashboards.',
      'Automated cart cleanup with CRON jobs and email automation.',
      'Third-party integrations for payments and support workflows.',
    ],
    links: [{ label: 'Live Site', url: 'https://irakhay.com' }],
    screenshots: [],
  },
  {
    slug: 'thevanko',
    name: 'TheVanko',
    category: 'Content & classifieds platform',
    summary:
      'Content publishing and subscription platform with admin tooling and multilingual support.',
    description: [
      'Implemented content posting flows, admin dashboards, and multilingual interfaces.',
      'Designed database schema and server-side validators for reliable content operations.',
      'Built subscription billing and scheduled email automation workflows.',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'MariaDB', 'AWS'],
    highlights: [
      'Admin dashboards and content moderation tooling.',
      'Subscription billing with automation for renewals and notifications.',
      'Multilingual UX and structured content workflows.',
    ],
    links: [{ label: 'Live Site', url: 'https://thevanko.com' }],
    screenshots: [],
  },
  {
    slug: 'flight-booking-management',
    name: 'Flight Booking Management',
    category: 'Internal multi-portal booking system',
    summary:
      'Multi-tenant booking system with hierarchical access control for portal admins and agents.',
    description: [
      'Designed a multi-tenant model where super-admins manage portals, admins, and agents.',
      'Implemented server routing, access controls, and portal-specific workflows.',
    ],
    techStack: ['Node.js', 'Express', 'MySQL', 'Role-based Access Control'],
    highlights: [
      'Hierarchical access control with portal-level tenancy.',
      'Admin tooling for portal configuration and agent oversight.',
    ],
    links: [],
    screenshots: [],
  },
];

export const featuredProjects = projects.slice(0, 2);
