import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  provideRouter, // Sets up Angular Router at root level
  withComponentInputBinding, // Auto-bind route/query params → component @Input()
  withRouterConfig, // Extra router configuration (e.g., param inheritance)
} from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration, // Enables hydration for SSR → CSR transition
  withEventReplay, // Preserves user input (clicks, typing) during hydration
} from '@angular/platform-browser';

/**
 * Application configuration for Zoneless Angular v20
 *
 * Key features:
 * - Zoneless change detection (signal-based, no Zone.js)
 * - Global error handling
 * - Router setup with param inheritance
 * - Client-side hydration for SSR/SSG
 */

export const appConfig: ApplicationConfig = {
  providers: [
    // 1. Global error handling
    provideBrowserGlobalErrorListeners(),

    // 2. Zoneless change detection
    //    Uses signals to trigger updates, no Zone.js patches required
    provideZonelessChangeDetection(),

    // 3. Configure Router
    provideRouter(
      routes, // App-level route definitions
      withComponentInputBinding(), // Map route params → component inputs automatically
      withRouterConfig(
        { paramsInheritanceStrategy: 'always' } // Child routes inherit parent route params
      )
    ),

    // 4. Client-side hydration for SSR → CSR
    //    `withEventReplay` ensures any user interactions during hydration are preserved
    provideClientHydration(withEventReplay()),
  ],
};
