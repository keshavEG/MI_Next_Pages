import { NextRequest, NextResponse } from 'next/server';

const API_KEY = process.env.API_KEY;

export async function POST(req: NextRequest) {
  try {
    const { data_type, continent, direction, pageIndex = 0, pageSize = 10 } = await req.json();

    // Send a request to the external API
    const response = await fetch("https://api-dp.ibnmarkit.com:443/api/v1/users/data-availability", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        data_type,
        continent,
        direction
      })
    });

    if (!response.ok) {
      throw new Error('API response was not ok');
    }

    const data = await response.json();

    // Filter the data based on the provided filters (if not done by the API)
    const filteredData = data.filter((item: any) => {
      return (
        (data_type ? item.data_type.toLowerCase() === data_type : true) &&
        (continent ? item.continent.toLowerCase() === continent : true) &&
        (direction ? item.direction.toLowerCase() === direction : true)
      );
    });

    // Implement pagination logic
    const start = pageIndex * pageSize;
    const paginatedData = filteredData.slice(start, start + pageSize);

    // Return paginated and filtered data along with the total count
    return NextResponse.json({
      data: paginatedData,
      total: filteredData.length, // Total items after filtering, before pagination
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
