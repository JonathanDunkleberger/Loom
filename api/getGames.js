// In api/getGames.js

export default async function handler(request, response) {
  const clientId = process.env.VITE_TWITCH_CLIENT_ID;
  const accessToken = process.env.TWITCH_ACCESS_TOKEN;

  if (!clientId || !accessToken) {
    return response.status(500).json({ error: "Server configuration error: Missing API credentials." });
  }

  try {
    const igdbResponse = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': clientId,
        'Authorization': `Bearer ${accessToken}`,
      },
      // UPDATED to ask for screenshots (for backdrop) and cover (for poster)
      body: 'fields name, cover.image_id, screenshots.image_id, summary, first_release_date, total_rating, genres.name, involved_companies.company.name; where total_rating > 85 & cover != null & summary != null & screenshots != null; sort total_rating desc; limit 15;'
    });

    if (!igdbResponse.ok) {
      throw new Error(`IGDB API request failed: ${igdbResponse.statusText}`);
    }

    const rawGames = await igdbResponse.json();
    
    const cleanGames = rawGames.map(game => ({
      id: game.id,
      type: 'game',
      title: game.name,
      // Map both image types
      backdropUrl: `https://images.igdb.com/igdb/image/upload/t_screenshot_big/${game.screenshots[0]?.image_id}.jpg`,
      posterUrl: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.jpg`,
      description: game.summary,
      releaseDate: game.first_release_date ? new Date(game.first_release_date * 1000).getFullYear().toString() : 'N/A',
      rating: game.total_rating ? (game.total_rating / 10).toFixed(1) : 0,
      genres: game.genres ? game.genres.map(g => g.name) : [],
      developer: game.involved_companies ? game.involved_companies[0].company.name : 'N/A',
    }));

    return response.status(200).json(cleanGames);

  } catch (error) {
    console.error("Error in getGames serverless function:", error);
    return response.status(500).json({ error: error.message });
  }
}