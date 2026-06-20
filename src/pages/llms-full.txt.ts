import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const blogs = await getCollection('blog');
  const docs = await getCollection('docs');

  let markdown = `# Full Knowledge Base Dump\n\n`;

  markdown += `## Documentation\n\n`;
  for (const doc of docs) {
    markdown += `### ${doc.data.title}\n${doc.body}\n\n`;
  }

  markdown += `## Blog Posts\n\n`;
  for (const post of blogs) {
    markdown += `### ${post.data.title}\n${post.body}\n\n`;
  }

  return new Response(markdown, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
