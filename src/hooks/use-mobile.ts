import * as React from "react";

// Matches Tailwind's `lg` breakpoint: anything narrower is treated as "mobile"
// and gets the off-canvas sidebar instead of the persistent desktop aside.
const MOBILE_BREAKPOINT = 1024;
const QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`;

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

export function useIsMobile() {
  return React.useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    // No viewport on the server: render the desktop layout, then correct on
    // hydration.
    () => false
  );
}
