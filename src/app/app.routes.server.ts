import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  // { path: '', renderMode: RenderMode.Prerender }, // Home → SSG
  // { path: 'about', renderMode: RenderMode.Prerender }, // About → SSG
  // { path: 'blog/:id', renderMode: RenderMode.Server }, // Blog → SSR
  { path: '**', renderMode: RenderMode.Server }, // Catch-all → SSR

  // {
  //   path: '**',
  //   renderMode: RenderMode.Prerender,
  // },
];
