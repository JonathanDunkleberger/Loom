export const MediaItem = {
  id: null,              // e.g., 'tt0133093' from TMDb or 'OL22895234M' from Open Library
  type: '',              // 'movie', 'tv', 'game', or 'book'
  title: '',             // The main title
  imageUrl: '',          // A URL to the main poster, cover, or box art
  description: '',       // The plot summary, overview, or description
  releaseDate: '',       // The original release or publication date
  rating: 0,             // A score from 0-10 or 0-5, which you can standardize
  genres: [],            // An array of strings, e.g., ['Sci-Fi', 'Action']

  // Type-specific fields (optional)
  director: null,        // For 'movie' or 'tv'
  author: null,          // For 'book'
  developer: null,       // For 'game'
  pageCount: null,       // For 'book'
  platforms: [],         // For 'game', e.g., ['PC', 'PlayStation 5']
}