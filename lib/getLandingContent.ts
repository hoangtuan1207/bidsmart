// import { notion } from './notion';

// export async function getLandingContent(databaseId: string) {
//   const res = await notion.databases.query({
//     database_id: databaseId,
//   });

//   const content: Record<string, string> = {};
//   res.results.forEach((page: any) => {
//     const key = page.properties.Name?.title?.[0]?.plain_text;
//     const value = page.properties.Value?.rich_text
//       ?.map((t: any) => t.plain_text)
//       .join("") || "";
//     if (key && value) content[key] = value;
//   });

//   return content;
// }

import { notion } from './notion';

export async function getLandingContent(databaseId: string) {
  const res = await notion.databases.query({
    database_id: databaseId,
  });

  const content: Record<string, string> = {};
  res.results.forEach((page: any) => {
    const key = page.properties.Name?.title?.[0]?.plain_text;
    const prop = page.properties.Value;

    if (!prop?.rich_text?.length) return;

    const lines: string[] = [];

    let currentLine = "";
    prop.rich_text.forEach((t: any) => {
      const plain = t.plain_text.trim();
      const href = t.href || t.text?.link?.url;

      if (plain === "-") {
        if (currentLine) lines.push(currentLine);
        currentLine = "- ";
      } else {
        currentLine += href ? `${plain}: ${href}` : plain;
      }
    });

    if (currentLine) lines.push(currentLine);

    const value = lines.join("\n");
    if (key && value) content[key] = value;
  });

  return content;
}