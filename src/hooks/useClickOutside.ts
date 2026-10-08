// Anropar onOutside när användaren klickar utanför alla element i refs.
// Används t.ex. för att stänga en meny när man klickar någon annanstans på sidan.
import { useEffect, useRef, type RefObject } from "react";

export function useClickOutside(refs: RefObject<HTMLElement | null>[], onOutside: () => void) {
  const onOutsideRef = useRef(onOutside);
  onOutsideRef.current = onOutside;

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (refs.every((ref) => !ref.current?.contains(target))) {
        onOutsideRef.current();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
}
