export function Logo({ className = "h-10" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Hexagon Logo with Hive Pattern */}
      <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Outer Hexagon */}
        <path
          d="M24 2L42 13V35L24 46L6 35V13L24 2Z"
          fill="url(#gold-gradient)"
          stroke="#FFD700"
          strokeWidth="2"
        />
        {/* Inner Hexagon Pattern */}
        <path
          d="M24 12L32 17V27L24 32L16 27V17L24 12Z"
          fill="#1A1A1A"
          stroke="#FFC000"
          strokeWidth="1.5"
        />
        {/* Hive Cells */}
        <circle cx="24" cy="22" r="2" fill="#FFD700" />
        <circle cx="20" cy="19" r="1.5" fill="#FFC000" />
        <circle cx="28" cy="19" r="1.5" fill="#FFC000" />
        <circle cx="20" cy="25" r="1.5" fill="#FFC000" />
        <circle cx="28" cy="25" r="1.5" fill="#FFC000" />
        
        <defs>
          <linearGradient id="gold-gradient" x1="24" y1="2" x2="24" y2="46">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFC000" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Text Logo */}
      <div className="flex flex-col leading-none">
        <span className="text-2xl font-bold text-[#FFD700]">HIVE</span>
        <span className="text-xs tracking-wider text-[#808080]">TECH SOLUTIONS</span>
      </div>
    </div>
  );
}
