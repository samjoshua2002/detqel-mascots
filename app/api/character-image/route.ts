import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || '';
  const series = searchParams.get('series') || '';
  const force = searchParams.get('force') === 'true';

  if (!name) {
    return NextResponse.json({ error: 'Missing name' }, { status: 400 });
  }

  // 1. Try Backend Server New /api/character-art
  try {
    const targetUrl = `https://guidetalk.onrender.com/api/character-art?name=${encodeURIComponent(name)}&series=${encodeURIComponent(series)}${force ? '&force=true' : ''}`;
    const res = await fetch(targetUrl, { signal: AbortSignal.timeout(4000) });
    if (res.ok) {
      const data = await res.json();
      if (data.imageUrl && !data.imageUrl.includes('questionmark')) {
        return NextResponse.json(data);
      }
    }
  } catch {}

  // 2. Direct AniList GraphQL Query (Ultra HD, official anime artwork)
  try {
    const query = `
      query ($search: String) {
        Character(search: $search) {
          id
          name { full native }
          image { large }
          media(perPage: 2) {
            nodes {
              coverImage { extraLarge large }
              bannerImage
            }
          }
        }
      }
    `;
    const aniRes = await fetch('https://graphql.anilist.co', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ query, variables: { search: name } }),
      signal: AbortSignal.timeout(4000)
    });

    if (aniRes.ok) {
      const data = await aniRes.json();
      const char = data?.data?.Character;
      if (char?.image?.large && !char.image.large.includes('default.jpg')) {
        const candidates = [char.image.large];
        for (const node of (char.media?.nodes || [])) {
          if (node.coverImage?.extraLarge) candidates.push(node.coverImage.extraLarge);
        }
        return NextResponse.json({
          name: char.name?.full || name,
          series,
          imageUrl: char.image.large,
          bannerUrl: char.media?.nodes?.[0]?.bannerImage || null,
          candidates,
          source: 'anilist_direct_hd',
          hd: true
        });
      }
    }
  } catch {}

  // 3. Fallback to DiceBear
  const fallback = `https://api.dicebear.com/9.x/adventurer/png?seed=${encodeURIComponent(name)}&backgroundColor=1e293b`;
  return NextResponse.json({ imageUrl: fallback, candidates: [fallback] });
}
