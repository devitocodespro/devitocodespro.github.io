import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../data/site';

// RSS feed at /feed.xml (the URL the legacy site's <head> advertised). Lists
// published posts newest-first; drafts are excluded, matching the /blog index.
export async function GET(context) {
  const posts = (await getCollection('blog'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => +new Date(b.data.date) - +new Date(a.data.date));

  return rss({
    title: site.name,
    description: site.description,
    site: context.site,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description ?? p.data.subtitle ?? '',
      link: `/blog/${p.id}/`,
    })),
  });
}
