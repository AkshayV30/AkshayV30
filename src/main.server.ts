import {
  bootstrapApplication,
  BootstrapContext,
} from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// For client-side only (no SSR/SSG):
// const bootstrap = () => bootstrapApplication(App, config);

/**
 * Bootstrap function for server-side rendering (SSR) and static generation (SSG).
 *
 * Angular Vite SSR requires a `BootstrapContext` argument per request.
 * This ensures Angular knows it’s running on the server and can handle hydration properly.
 */

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(App, config, context);

export default bootstrap;
