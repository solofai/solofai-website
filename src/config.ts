/**
 * Site-wide constants. Single source of truth for identity, contact links,
 * and navigation so no component hard-codes these values.
 */
export const SITE = {
  name: 'Lori Pickering',
  domain: 'solofai.com',
  title: 'Lori Pickering',
  description:
    'Lori Pickering builds and studies AI systems with an eye to safety and verification: machine learning, systems-theoretic security analysis, and formal methods.',
  email: 'sol@solofai.com',
  locale: 'en-US',
} as const;

export const SOCIAL = [
  { label: 'Email', href: `mailto:${SITE.email}` },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lori-pickering-b46841155/' },
  { label: 'GitHub', href: 'https://github.com/solofai' },
] as const;

export interface NavItem {
  label: string;
  href: string;
  /** Collection that must have published entries for the item to show. */
  requires?: 'writing';
}

export const NAV: readonly NavItem[] = [
  { label: 'Work', href: '/work/' },
  { label: 'Writing', href: '/writing/', requires: 'writing' },
  { label: 'Research', href: '/research/' },
  { label: 'About', href: '/about/' },
];
