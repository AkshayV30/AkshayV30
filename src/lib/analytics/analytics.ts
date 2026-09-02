declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: string,
      target: string | Date,
      params?: Record<string, unknown>,
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined") {
    return;
  }

  if (!window.gtag) {
    return;
  }

  window.gtag("event", eventName, params);
}

export function trackButtonClick(buttonName: string, location?: string) {
  trackEvent("button_click", {
    button_name: buttonName,
    location,
  });
}

export function trackFormSubmit(formName: string) {
  trackEvent("form_submit", {
    form_name: formName,
  });
}

export function trackProjectView(projectName: string) {
  trackEvent("project_view", {
    project_name: projectName,
  });
}

export function trackProjectGithubClick(projectName: string) {
  trackEvent("project_github_click", {
    project_name: projectName,
  });
}

export function trackProjectDemoClick(projectName: string) {
  trackEvent("project_demo_click", {
    project_name: projectName,
  });
}

export function trackResumeDownload(location?: string) {
  trackEvent("resume_download", {
    location,
  });
}

export function trackSocialClick(platform: string) {
  trackEvent("social_click", {
    platform,
  });
}

export function trackSectionView(sectionName: string) {
  trackEvent("section_view", {
    section_name: sectionName,
  });
}

type VerifiedProfileEvent = "verified_profile_click";

function trackVerifiedProfileEvent(
  eventName: VerifiedProfileEvent,
  profileName: string,
) {
  trackEvent(eventName, {
    profile_name: profileName,
  });
}

export function trackVerifiedProfileClick(profileName: string) {
  trackVerifiedProfileEvent("verified_profile_click", profileName);
}
