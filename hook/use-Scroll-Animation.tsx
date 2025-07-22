
import { useRef, useEffect, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options?: UseScrollAnimationOptions) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update isVisible based on whether the element is currently intersecting
        // This will set isVisible to true when it enters, and false when it leaves,
        // allowing the CSS transition to re-apply on re-entry.
        setIsVisible(entry.isIntersecting);
      },
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Clean up the observer when the component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]); // Depend on options to re-create observer if they change

  return { ref, isVisible };
};
