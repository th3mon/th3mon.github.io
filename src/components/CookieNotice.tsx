import { useEffect, useState } from "react";

const storageKey = "cookie-notice-dismissed";

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // TODO: Add custom hook on localSctorage
    const isDismissed = window.localStorage.getItem(storageKey) === "true";

    setIsVisible(!isDismissed);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      aria-label="Cookie notice"
      aria-live="polite"
      className="cookie-notice"
      role="status"
    >
      <p>
        This website uses cookies, to understand traffic and improve the site.
        Read the <a href="/privacy-policy/">Privacy Policy</a>.
      </p>
      <button
        className="cookie-notice-button"
        onClick={() => {
          window.localStorage.setItem(storageKey, "true");
          setIsVisible(false);
        }}
        type="button"
      >
        Dismiss
      </button>
    </div>
  );
}
