"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    AOS?: {
      init: (options?: {
        duration?: number;
        easing?: string;
        once?: boolean;
        offset?: number;
      }) => void;
      refresh?: () => void;
      refreshHard?: () => void;
    };
  }
}

const initAOS = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (!window.AOS) {
    return false;
  }

  window.AOS.init({
    duration: 800,
    easing: "ease-out-cubic",
    once: true,
    offset: 80,
  });

  return true;
};

export function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    let attempts = 0;
    let timer: number | undefined;

    const tryInit = () => {
      attempts += 1;
      if (initAOS()) {
        return;
      }
      if (attempts < 8) {
        timer = window.setTimeout(tryInit, 250);
      }
    };

    tryInit();

    return () => {
      if (timer) {
        window.clearTimeout(timer);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window.AOS?.refreshHard) {
      window.AOS.refreshHard();
      return;
    }
    window.AOS?.refresh?.();
  }, [pathname]);

  return null;
}
