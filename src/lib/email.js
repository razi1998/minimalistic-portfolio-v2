const MOBILE_DEVICE_PATTERN = /Android|iPhone|iPad|iPod|Mobile/i;

export const isMobileDevice = () =>
  typeof navigator !== "undefined" && MOBILE_DEVICE_PATTERN.test(navigator.userAgent);

export const openEmailComposer = (event, composeUrls) => {
  if (typeof window === "undefined") return;

  event.preventDefault();

  if (isMobileDevice()) {
    // Mobile operating systems route mailto links to the user's mail app.
    window.location.href = composeUrls.mobile;
    return;
  }

  // Desktop browsers can open Gmail's compose screen without requiring a local mail client.
  window.open(composeUrls.web, "_blank", "noopener,noreferrer");
};
