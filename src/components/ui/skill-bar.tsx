import { useRef, useEffect, useState } from "react";

interface SkillBarProps {
  name: string;
  percentage: number;
}

export function SkillBar({ name, percentage }: SkillBarProps) {
  const barRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [animated]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-slate-700">{name}</span>
        <span className="text-primary">{percentage}%</span>
      </div>
      <div 
        ref={barRef}
        className="relative h-2 w-full bg-slate-200 rounded-full overflow-hidden"
      >
        <div 
          className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: animated ? `${percentage}%` : '0%' }}
        />
      </div>
    </div>
  );
}
