import { styled } from "styled-components";
import { useIsClient, useLocalStorage } from "@uidotdev/usehooks";

const storageKey = "cookie-notice-dismissed";

const Notice = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 20;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  gap: 1rem;
  width: min(calc(100% - 2rem), 42rem);
  padding: 1rem 1.1rem;
  border: 1px solid var(--line);
  border-radius: 1.35rem;
  background: rgba(255, 250, 241, 0.9);
  box-shadow: var(--shadow);
  backdrop-filter: blur(2px);

  p {
    margin: 0;
    color: var(--muted);
    font-size: 0.96rem;
    line-height: 1.6;
  }

  a {
    color: var(--accent);
  }

  html[data-theme="dark"] & {
    background: rgba(34, 28, 22, 0.96);
  }

  @media (max-width: 720px) {
    left: 1rem;
    right: 1rem;
    bottom: 1rem;
    width: auto;
    grid-template-columns: 1fr;
  }
`;

const DismissButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.1rem;
  border: 1px solid transparent;
  border-radius: 999px;
  background: var(--accent);
  color: #fff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 120ms ease,
    background-color 120ms ease;

  &:hover {
    background: var(--accent-strong);
    transform: translateY(-1px);
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export function CookieNotice() {
  const isClient = useIsClient();
  const [dismissed, setDismissed] = useLocalStorage(storageKey, false);
  const isVisible = isClient && !dismissed;

  if (!isVisible) {
    return null;
  }

  return (
    <Notice aria-label="Cookie notice" aria-live="polite" role="status">
      <p>
        This website uses cookies, to understand traffic and improve the site.
        Read the <a href="/privacy-policy/">Privacy Policy</a>.
      </p>
      <DismissButton
        onClick={() => {
          setDismissed(true);
        }}
        type="button"
      >
        Dismiss
      </DismissButton>
    </Notice>
  );
}
