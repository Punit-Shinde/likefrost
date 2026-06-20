import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const blogs = await getCollection('blog');
  const docs = await getCollection('docs');

  // Format the index using the standardized markdown profile for LLMs
  let markdownMarkdown = `# Your Platform Documentation Index\n\n`;
  markdownMarkdown += `> Direct reference specifications for machine ingestion, RAG setups, and agentic queries.\n\n`;

  markdownMarkdown += `## Core System Documentation\n`;
  docs.forEach(doc => {
    markdownMarkdown += `- [${doc.data.title}](/docs/${doc.slug}): ${doc.data.description}\n`;
  });

  markdownMarkdown += `\n## Recent Features and Updates\n`;
  blogs.slice(0, 10).forEach(post => {
    markdownMarkdown += `- [${post.data.title}](/blog/${post.slug}): ${post.data.primarySummary}\n`;
  });

  return new Response(markdownMarkdown, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
