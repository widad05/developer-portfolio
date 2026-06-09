import { useEffect, useState } from "react";

const CursorDot = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
      }}
    >
      <div
  className="w-2.5 h-2.5 bg-[#FFB86B] rounded-full -translate-x-1/2 -translate-y-1/2 blur-[0.5px] opacity-90"
></div>
    </div>

    
  );
};

export default CursorDot;