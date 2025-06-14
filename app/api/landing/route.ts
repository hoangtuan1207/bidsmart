// import { NextResponse } from 'next/server';
// import { notion } from '@/lib/notion';

import { notion } from "@/lib/notion";
import { NextRequest, NextResponse } from "next/server";

// export async function GET() {
//   try {
//     const res = await notion.databases.query({
//       database_id: process.env.NOTION_DATABASE_ID!,
//     });

//     const content: Record<string, string> = {};
//     res.results.forEach((page: any) => {
//       const key = page.properties.Name?.title?.[0]?.plain_text;
//       const value = page.properties.Value?.rich_text?.[0]?.plain_text;
//       if (key && value) content[key] = value;
//     });

//     return NextResponse.json(content);
//   } catch (error) {
//     console.error('🔥 API Error:', error); // log để thấy trong terminal
//     return new NextResponse(
//       JSON.stringify({ message: 'Internal Server Error', error }),
//       { status: 500 }
//     );
//   }
// }


// app/api/landing/route.ts
let cache: Record<string, any> = {};
let cacheTimestamp = 0;
const DEFAULT_DATABASE_ID = process.env.NOTION_DATABASE_ID;
export async function GET(req: NextRequest) {
  const databaseId = req.nextUrl.searchParams.get('db') || DEFAULT_DATABASE_ID;
  if (!databaseId) return NextResponse.json({ error: 'Missing database ID' }, { status: 400 });

  const cacheDuration = 60 * 1000; // cache 1 phút (hoặc dài hơn)

  if (cache[databaseId] && Date.now() - cacheTimestamp < cacheDuration) {
    return NextResponse.json(cache[databaseId]);
  }

  try {
    const res = await notion.databases.query({ database_id: databaseId });
    const content: Record<string, string> = {};

    res.results.forEach((page: any) => {
      const key = page.properties.Name?.title?.[0]?.plain_text;
      const value = page.properties.Value?.rich_text?.[0]?.plain_text;
      if (key && value) content[key] = value;
    });

    cache[databaseId] = content;
    cacheTimestamp = Date.now();

    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error', error }, { status: 500 });
  }
}
// app/api/landing/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { notion } from '@/lib/notion';

// export async function GET(req: NextRequest) {
//   const databaseId = req.nextUrl.searchParams.get('db');

//   if (!databaseId) {
//     return NextResponse.json({ error: 'Missing database ID' }, { status: 400 });
//   }

//   try {
//     const res = await notion.databases.query({ database_id: databaseId });

//     const content: Record<string, string> = {};
//     res.results.forEach((page: any) => {
//       const key = page.properties.Name?.title?.[0]?.plain_text;
//       const value = page.properties.Value?.rich_text?.[0]?.plain_text;
//       if (key && value) content[key] = value;
//     });

//     return NextResponse.json(content);
//   } catch (error: any) {
//     return NextResponse.json(
//       { message: 'Internal Server Error', error },
//       { status: 500 }
//     );
//   }
// }