'use client';

import { useEffect, useRef } from 'react';

export default function VisitorGlobe() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    container.innerHTML = '';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'mapmyvisitors';
    script.src = '//mapmyvisitors.com/map.js?d=VtG6Ok6uCsUcZnKFYJFb3Gac14VsJDHpzA0M2TkQ_i0&cl=ffffff&w=a';

    container.appendChild(script);

    const resizeObserver = window.setInterval(() => {
      const widget = container.querySelector('iframe, canvas, img, div');
      if (!(widget instanceof HTMLElement)) {
        return;
      }

      widget.style.maxWidth = '220px';
      widget.style.width = '220px';
      widget.style.minHeight = '140px';
      widget.style.height = '140px';
      widget.style.display = 'block';
      widget.style.margin = '0 auto';
      window.clearInterval(resizeObserver);
    }, 300);

    return () => {
      window.clearInterval(resizeObserver);
      container.innerHTML = '';
    };
  }, []);

  return (
    <div className="mt-4 flex justify-center">
      <div
        ref={containerRef}
        className="w-[220px] min-h-[140px] overflow-hidden"
      />
    </div>
  );
}
