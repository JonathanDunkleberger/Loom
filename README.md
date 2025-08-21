# Loom - A Unified Media Hub

## Overview
Loom is an evolving platform that unifies all your media interests—movies, TV, anime, video games, and books—into one intelligent hub. Instead of juggling multiple apps and lists, Loom lets enthusiasts discover, track, and explore everything from cinematic universes and franchise timelines to game completion stats and author bibliographies.

## Vision
Create the most insightful, cross‑media discovery engine. Loom will understand relationships across formats (e.g., "If you enjoyed this cyberpunk RPG, read this graphic novel"), surface deep metadata (time to beat, genres, themes, platforms, ISBN links, release chronology), and maintain a single, personalized Library & Queue spanning every medium you care about.

## Key Functionalities

Current (MVP foundation):

- Auth: Sign In / Sign Up (Firebase)
- Browse & search screen media (movies / series) via TMDB
- Unified personal lists: My List, Liked, Watched
- Detail & playback launch pages (trailers / external sources)
- Profile & basic activity history

Planned / In Progress:

- Cross‑media Library (movies | series | anime | games | books)
- Smart unified queue & backlog prioritization
- Game data: platforms, genres, play modes, aggregated ratings, time-to-beat (IGDB + HowLongToBeat style aggregation)
- Book data: authors, series ordering, page counts, editions (Google Books API)
- Anime metadata & mapping (Anilist / alternative provider – evaluation phase)
- Relationship graph: similar titles across media types (content-based + collaborative signals)
- Advanced search & filters (tags, themes, release year ranges, completion status)
- Progress tracking (episodes watched, chapters read, hours played)
- Recommendation engine (hybrid: genre overlap, vector similarity, user affinity)
- Collection builder (franchises, trilogies, author runs, platform exclusives)
- Release radar & calendar (upcoming games / films / volumes)
- Social layer (optional): share lists, compare overlap, lightweight activity feed
- Offline-friendly PWA shell & optimistic syncing

## Technologies Used

Current Stack:

- React (migrating toward Next.js 14+)
- JavaScript (transition path to TypeScript)
- Firebase (Auth, Firestore)
- TMDB API (screen media data)
- Axios
- Tailwind CSS + SCSS modules
- Swiper.js / react-youtube (media UI components)

Target / Planned Stack Enhancements:

- Next.js 14+ (App Router, Server Actions, Image Optimization)
- TypeScript everywhere (strict mode)
- Edge + ISR hybrid data fetching
- TanStack Query (server state) & Zustand or Redux Toolkit (client domain state)
- Modular domain-driven folder architecture
- Testing: Vitest + Playwright (E2E) + Storybook for component docs
- Analytics & telemetry abstractions

Planned Data Sources & Integrations:

- IGDB (video game catalog, via authenticated API)
- Google Books API (books & series)
- (Evaluating) Anilist / Kitsu / Jikan (anime metadata)
- HowLongToBeat (playtime aggregation – via compliant scraping/proxy or user-sourced data)
- Open Library (fallback book metadata)

## Roadmap (High-Level)

1. Stabilize current movie/series features & refactor to TypeScript
2. Migrate to Next.js 14 (App Router) + introduce modular data layer
3. Add IGDB integration & unified media schema
4. Add Google Books + normalization layer
5. Implement cross-media recommendation graph
6. Progress tracking + timeline UI
7. Social & sharing features
8. Performance hardening, offline support, accessibility polish

## Screenshots

Placeholder: Updated multi-media UI previews coming soon.

## Mobile Experience

Placeholder: Responsive mobile flows (Library, Detail, Queue) in design.

## Description

Loom is not just another streaming-style interface—it is a knowledge and tracking layer over your entire media life. By unifying disparate APIs and enriching them with user context, Loom aims to become the canonical source for what to watch, play, and read next—grounded in your taste, progress, and curiosity.

## Live Link

Coming soon (deployment pending rebrand & Next.js migration).

## Contributing (Early Phase)

Refactor & migration help is welcome once the Next.js + TypeScript branch is opened. Issue templates & contribution guidelines will be added before public contributions are enabled.

## License

This repository inherits its existing license (see LICENSE). Future data-source specific compliance (TMDB, IGDB, Google Books) will be documented.
