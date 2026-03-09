'use client'
import { useState, useEffect } from 'react'

interface DnaSliderProps {
  targetSelector?: string  // CSS selector for the element to update. Default: '#vel-home'
  defaultHue?: number      // Default: 258
}

export default function DnaSlider({ targetSelector = '#vel-home', defaultHue = 258 }: DnaSliderProps) {
  const [hue, setHue] = useState(defaultHue)

  useEffect(() => {
    const el = document.querySelector(targetSelector) as HTMLElement | null
    if (el) el.style.setProperty('--vel-dna-hue', String(hue))
  }, [hue, targetSelector])

  return (
    <div className="vsite-dna-strip">
      <span className="vsite-dna-label">--vel-dna-hue</span>
      <input
        type="range"
        min={0}
        max={360}
        value={hue}
        onChange={e => setHue(Number(e.target.value))}
        className="vsite-dna-slider"
        aria-label="DNA hue"
      />
      <span className="vsite-dna-swatch" style={{ background: `oklch(65% 0.21 ${hue})` }} />
      <span className="vsite-dna-val">{hue}</span>
    </div>
  )
}
