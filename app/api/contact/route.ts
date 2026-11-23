import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const apiUrl = process.env.API_URL ?? 'http://localhost:4000';

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Requête invalide' },
      { status: 400 }
    );
  }

  try {
    const res = await fetch(`${apiUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      cache: 'no-store',
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Le service de contact est momentanément indisponible' },
      { status: 502 }
    );
  }
}