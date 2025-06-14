import { notion } from '@/lib/notion';

export async function getLandingContent() {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  const content: Record<string, string> = {};
  res.results.forEach((page: any) => {
    const key = page.properties.Name?.title?.[0]?.plain_text;
    const value = page.properties.Value?.rich_text?.[0]?.plain_text;
    if (key && value) content[key] = value;
  });

  return content;
}