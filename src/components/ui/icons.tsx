type IconProps = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.7, viewBox: "0 0 24 24", "aria-hidden": true };
export function SearchIcon({ className }: IconProps) { return <svg {...base} className={className}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>; }
export function HeartIcon({ className }: IconProps) { return <svg {...base} className={className}><path d="M20.8 4.7a5.5 5.5 0 0 0-7.8 0L12 5.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z" /></svg>; }
export function BagIcon({ className }: IconProps) { return <svg {...base} className={className}><path d="M5 8.5h14l-1 12H6l-1-12Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></svg>; }
export function ArrowIcon({ className }: IconProps) { return <svg {...base} className={className}><path d="M5 12h14M14 7l5 5-5 5" /></svg>; }
