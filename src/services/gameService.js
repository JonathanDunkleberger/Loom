// In src/services/gameService.js

/**
 * Fetches top games by calling our own secure serverless function.
 * @returns {Promise<Array>} A promise that resolves to an array of game objects.
 */
export async function fetchTopGames() {
  try {
    // This calls the serverless function you created at /api/getGames.
    // It's the only line that makes a network request.
    const response = await fetch('/api/getGames');

    if (!response.ok) {
      // If the serverless function had an error, this will catch it.
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch games from our API.");
    }

    const games = await response.json();
    return games;

  } catch (error) {
    console.error("Error fetching games:", error.message);
    return []; // Return an empty array on error
  }
}