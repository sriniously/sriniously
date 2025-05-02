"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  const shouldShowProgress =
    pathname?.includes("/blog/") || pathname?.includes("/musings/");

  useEffect(() => {
    if (!shouldShowProgress) return;

    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const scrollPercent = (scrollTop / documentHeight) * 100;
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener("scroll", calculateProgress);
    calculateProgress();

    return () => window.removeEventListener("scroll", calculateProgress);
  }, []);

  if (!shouldShowProgress) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-blue-500 transition-all duration-200"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
