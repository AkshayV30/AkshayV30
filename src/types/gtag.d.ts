export {};

declare global {
  interface Window {
    dataLayer: unknown[];

    gtag: (
      command: string,
      eventNameOrDate: string | Date,
      config?: Record<string, unknown>,
    ) => void;
  }
}
