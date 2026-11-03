/**
 * Collection queries shared by pages. Centralizing draft filtering and sort
 * order means every listing applies the same rules.
 */
import { getCollection, type CollectionEntry } from 'astro:content';

type Draftable = 'work' | 'writing';

/** Drafts are visible in `astro dev` and hidden from production builds. */
const isVisible = <C extends Draftable>(entry: CollectionEntry<C>): boolean =>
  import.meta.env.DEV || !entry.data.draft;

export async function getWork(): Promise<CollectionEntry<'work'>[]> {
  const entries = await getCollection('work', isVisible);
  return entries.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
}

export async function getPosts(): Promise<CollectionEntry<'writing'>[]> {
  const entries = await getCollection('writing', isVisible);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPublications(): Promise<CollectionEntry<'publications'>[]> {
  const entries = await getCollection('publications');
  return entries.sort((a, b) => b.data.year - a.data.year);
}

/** Current role (no end date) first, then by most recent end date. */
export async function getExperience(): Promise<CollectionEntry<'experience'>[]> {
  const entries = await getCollection('experience');
  const endKey = (e: CollectionEntry<'experience'>) => e.data.end ?? '9999';
  return entries.sort((a, b) => endKey(b).localeCompare(endKey(a)));
}

export async function getEducation(): Promise<CollectionEntry<'education'>[]> {
  const entries = await getCollection('education');
  return entries.sort((a, b) => b.data.year - a.data.year);
}
