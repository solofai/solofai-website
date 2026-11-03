/**
 * Pure formatting helpers. No Astro imports, so they are trivially testable
 * and reusable from any component or page.
 */
import { SITE } from '@/config';

const monthYear = new Intl.DateTimeFormat(SITE.locale, { month: 'short', year: 'numeric', timeZone: 'UTC' });
const fullDate = new Intl.DateTimeFormat(SITE.locale, { dateStyle: 'long', timeZone: 'UTC' });

/** "2026-11-02" -> "November 2, 2026". UTC avoids off-by-one days from the build machine's zone. */
export function formatDate(date: Date): string {
  return fullDate.format(date);
}

/** "2025-10" -> "Oct 2025"; "2022" -> "2022". */
export function formatYearMonth(value: string): string {
  const [year, month] = value.split('-').map(Number);
  return month ? monthYear.format(new Date(Date.UTC(year, month - 1))) : String(year);
}

/** Range for a role or project; a missing end reads as "Present". */
export function formatRange(start: string, end?: string): string {
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : 'Present'}`;
}

/** Matches the site owner's name in author lists regardless of initials used. */
export function isSiteOwner(author: string): boolean {
  return /\bPickering$/.test(author.trim());
}

export function doiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}

/** Display labels for work status, shared by listings and detail pages. */
export const WORK_STATUS_LABEL = {
  concept: 'Concept',
  prototype: 'Prototype',
  live: 'Live',
  research: 'Research',
  archived: 'Archived',
} as const satisfies Record<string, string>;
