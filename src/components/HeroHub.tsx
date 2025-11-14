import { motion } from 'motion/react';

export function HeroHub() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 600 600" className="w-full h-full">
        <defs>
          <linearGradient id="hubGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-cyan)" />
            <stop offset="100%" stopColor="var(--accent-plasma)" />
          </linearGradient>
          <linearGradient id="limeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-lime)" />
            <stop offset="100%" stopColor="var(--accent-cyber-lime)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Central Hexagon */}
        <motion.path
          d="M300 150 L400 200 L400 300 L300 350 L200 300 L200 200 Z"
          fill="none"
          stroke="url(#hubGradient)"
          strokeWidth="3"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        {/* Inner Hexagon */}
        <motion.path
          d="M300 200 L350 225 L350 275 L300 300 L250 275 L250 225 Z"
          fill="var(--accent-cyan)"
          fillOpacity="0.1"
          stroke="var(--accent-cyan)"
          strokeWidth="2"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '300px 250px' }}
        />

        {/* Central Core */}
        <motion.circle
          cx="300"
          cy="250"
          r="20"
          fill="url(#limeGradient)"
          filter="url(#glow)"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Data Nodes */}
        {[
          { x: 300, y: 50, delay: 0 },
          { x: 500, y: 150, delay: 0.2 },
          { x: 500, y: 350, delay: 0.4 },
          { x: 300, y: 450, delay: 0.6 },
          { x: 100, y: 350, delay: 0.8 },
          { x: 100, y: 150, delay: 1.0 },
        ].map((node, idx) => (
          <g key={idx}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill="var(--accent-lime)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1, 1], opacity: [0, 1, 0.8] }}
              transition={{ delay: node.delay, duration: 1 }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="15"
              fill="none"
              stroke="var(--accent-lime)"
              strokeWidth="1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                delay: node.delay,
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </g>
        ))}

        {/* Connection Lines */}
        {[
          { x1: 300, y1: 50, x2: 300, y2: 150 },
          { x1: 500, y1: 150, x2: 400, y2: 200 },
          { x1: 500, y1: 350, x2: 400, y2: 300 },
          { x1: 300, y1: 450, x2: 300, y2: 350 },
          { x1: 100, y1: 350, x2: 200, y2: 300 },
          { x1: 100, y1: 150, x2: 200, y2: 200 },
        ].map((line, idx) => (
          <motion.line
            key={idx}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="var(--accent-cyan)"
            strokeWidth="1"
            strokeDasharray="5,5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ delay: idx * 0.2, duration: 1.5 }}
          />
        ))}

        {/* Floating Metrics */}
        {[
          { x: 300, y: 30, text: '+247%', delay: 1 },
          { x: 520, y: 150, text: '98%', delay: 1.2 },
          { x: 520, y: 350, text: '+42%', delay: 1.4 },
          { x: 300, y: 470, text: '3.2x', delay: 1.6 },
          { x: 80, y: 350, text: '< 1s', delay: 1.8 },
          { x: 80, y: 150, text: '99.9%', delay: 2 },
        ].map((metric, idx) => (
          <motion.text
            key={idx}
            x={metric.x}
            y={metric.y}
            className="data-font"
            fill="var(--accent-lime)"
            fontSize="14"
            textAnchor="middle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: metric.delay }}
          >
            {metric.text}
          </motion.text>
        ))}

        {/* Orbiting Particles */}
        {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
          <motion.circle
            key={idx}
            cx="300"
            cy="250"
            r="2"
            fill="var(--accent-cyan)"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              delay: idx * 0.5,
            }}
            style={{
              transformOrigin: '300px 250px',
              x: Math.cos((angle * Math.PI) / 180) * 120,
              y: Math.sin((angle * Math.PI) / 180) * 120,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
