// This service handles all communication with the IGDB API.

/**
 * Fetches an access token from Twitch, then uses it to fetch the top-rated
 * games from the IGDB API. It transforms the raw API data into our clean,
 * universal MediaItem format.
 * @returns {Promise<Array>} A promise that resolves to an array of game objects.
 */
export async function fetchTopGames() {
  // Get your Twitch/IGDB credentials from the .env file
  const clientId = import.meta.env.VITE_TWITCH_CLIENT_ID;
  const accessToken = import.meta.env.VITE_TWITCH_ACCESS_TOKEN;

  // Check if credentials are set
  if (!clientId || !accessToken) {
    console.error("Twitch/IGDB credentials are not set in the .env file.");
    return []; // Return empty array if keys are missing
  }

  try {
    // Use the access token to call the IGDB API
    const igdbResponse = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Client-ID': clientId,
        'Authorization': `Bearer ${accessToken}`,
      },
      // APICalypse query to get top-rated games with necessary fields
      body: 'fields name, cover.image_id, summary, first_release_date, total_rating, genres.name, involved_companies.company.name; where total_rating > 85 & cover != null & summary != null; sort total_rating desc; limit 15;'
    });

    if (!igdbResponse.ok) {
      throw new Error(`IGDB API request failed: ${igdbResponse.statusText}`);
    }

    const rawGames = await igdbResponse.json();

    // Transform the raw data to match your MediaItem blueprint
    const cleanGames = rawGames.map(game => ({
      id: game.id,
      type: 'game',
      title: game.name,
      imageUrl: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.jpg`,
      description: game.summary,
      releaseDate: game.first_release_date ? new Date(game.first_release_date * 1000).getFullYear().toString() : 'N/A',
      rating: game.total_rating ? (game.total_rating / 10).toFixed(1) : 0, // Standardize rating to be out of 10
      genres: game.genres ? game.genres.map(g => g.name) : [],
      developer: game.involved_companies ? game.involved_companies[0].company.name : 'N/A',
      // Ensure all other MediaItem properties have default values
      director: null,
      author: null,
      pageCount: null,
      platforms: [],
    }));

    return cleanGames;
  } catch (error) {
    console.error("Failed to fetch top games:", error);
    return []; // Return an empty array on error to prevent crashes
  }
}