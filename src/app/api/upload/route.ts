import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ error: 'Local uploads need a configured object storage provider.' }, { status: 501 });
}
