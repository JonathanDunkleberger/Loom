// In src/types.js

/**
 * Represents any media item on the Loom platform.
 * Now includes separate URLs for wide (backdrop) and tall (poster) images.
 */
export const MediaItem = {
  id: null,
  type: '',
  title: '',
  backdropUrl: '', // For the wide 16x9 posters
  posterUrl: '',   // For the tall portrait posters
  description: '',
  releaseDate: '',
  rating: 0,
  genres: [],

  // Type-specific fields (optional)
  director: null,
  author: null,
  developer: null,
  pageCount: null,
  platforms: [],
};