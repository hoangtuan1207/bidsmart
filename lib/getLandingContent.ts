import { notion } from './notion';

export async function getLandingContent(databaseId: string) {
  const res = await notion.databases.query({
    database_id: databaseId,
  });

  const content: Record<string, string> = {};
  res.results.forEach((page: any) => {
    const key = page.properties.Name?.title?.[0]?.plain_text;
    const value = page.properties.Value?.rich_text
      ?.map((t: any) => t.plain_text)
      .join("") || "";
    if (key && value) content[key] = value;
  });

  return content;
}