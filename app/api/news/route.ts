// app/api/news/route.ts
import { NextResponse } from 'next/server';
import { notion } from '@/lib/notion';

export async function GET() {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_NEWS_TABLE_ID!,
  });

  const items = res.results.map((item: any) => ({
    id: item.id,
    title: item.properties.title?.title?.[0]?.plain_text || '',
    content: item.properties.content?.rich_text?.[0]?.plain_text || '',
  }));

  return NextResponse.json(items);
}
