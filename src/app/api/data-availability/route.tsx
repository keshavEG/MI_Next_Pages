import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.API_KEY;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch("https://api-dp.ibnmarkit.com:443/api/v1/users/data-availability", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error('API response was not ok');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}