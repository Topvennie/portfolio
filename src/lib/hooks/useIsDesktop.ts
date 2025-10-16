import { useState, useEffect } from "react";

export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 1024; // Tailwind lg
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    setIsDesktop(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return isDesktop;
}
