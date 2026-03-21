import { useEffect, useMemo, useRef, useState } from "react";

type NavItem = {
  href: string;
  label: string;
  active: boolean;
};

type IndicatorStyle = {
  width: number;
  x: number;
  opacity: number;
};

type NavMenuProps = {
  items: NavItem[];
};

export function NavMenu({ items }: NavMenuProps) {
  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef(new Map<string, HTMLAnchorElement>());
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [indicator, setIndicator] = useState<IndicatorStyle>({
    width: 0,
    x: 0,
    opacity: 0,
  });

  const activeHref = useMemo(
    () => items.find((item) => item.active)?.href ?? items[0]?.href ?? "/",
    [items],
  );

  useEffect(() => {
    const updateIndicator = (href: string | null) => {
      const targetHref = href ?? activeHref;
      const nav = navRef.current;
      const target = itemRefs.current.get(targetHref);

      if (!nav || !target) {
        return;
      }

      setIndicator({
        width: target.offsetWidth - 5,
        x: target.offsetLeft,
        opacity: 1,
      });
    };

    updateIndicator(hoveredHref);

    const handleResize = () => {
      updateIndicator(hoveredHref);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeHref, hoveredHref]);

  return (
    <nav
      aria-label="Main navigation"
      className="site-nav"
      onMouseLeave={() => setHoveredHref(null)}
      ref={navRef}
    >
      <span
        aria-hidden="true"
        className="site-nav-lavalamp"
        style={{
          transform: `translateX(${indicator.x}px)`,
          width: `${indicator.width}px`,
          opacity: indicator.opacity,
        }}
      />
      {items.map((item) => (
        <a
          aria-current={item.active ? "page" : undefined}
          className={item.active ? "is-active" : undefined}
          href={item.href}
          key={item.href}
          onFocus={() => setHoveredHref(item.href)}
          onMouseEnter={() => setHoveredHref(item.href)}
          ref={(node) => {
            if (node) {
              itemRefs.current.set(item.href, node);
            } else {
              itemRefs.current.delete(item.href);
            }
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
