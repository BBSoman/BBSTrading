import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const W = 1000;
const H = 500;
const GEOJSON_URL = 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson';

const HIGHLIGHTED = [
  { name: 'Oman',                  lon: 56.61, lat: 21.49, color: '#3B82F6', ring: '#93C5FD', labelDx: 14,  labelDy: -14 },
  { name: 'United Arab Emirates',  lon: 54.24, lat: 24.20, color: '#F59E0B', ring: '#FDE68A', labelDx: -78, labelDy: -16, label: 'UAE' },
  { name: 'Netherlands',           lon: 5.59,  lat: 52.16, color: '#10B981', ring: '#6EE7B7', labelDx: 12,  labelDy: -14 },
  { name: 'India',                 lon: 83.44, lat: 24.02, color: '#EF4444', ring: '#FCA5A5', labelDx: 10,  labelDy: -14 },
  { name: 'United Kingdom',        lon: -0.12, lat: 51.51, color: '#06B6D4', ring: '#67E8F9', labelDx: -70, labelDy: -14, label: 'London' },
];

function toX(lon: number) { return ((lon + 180) / 360) * W; }
function toY(lat: number) { return ((90 - lat) / 180) * H; }

type Coord = [number, number];
type Ring = Coord[];

function ringToD(ring: Ring): string {
  return ring.map(([lon, lat], i) => `${i === 0 ? 'M' : 'L'}${toX(lon).toFixed(1)},${toY(lat).toFixed(1)}`).join('') + 'Z';
}

function geometryToD(geometry: { type: string; coordinates: unknown }): string {
  if (geometry.type === 'Polygon') {
    return (geometry.coordinates as Ring[]).map(ringToD).join('');
  }
  if (geometry.type === 'MultiPolygon') {
    return (geometry.coordinates as Ring[][]).flatMap((poly) => poly.map(ringToD)).join('');
  }
  return '';
}

interface Feature {
  properties: { name: string };
  geometry: { type: string; coordinates: unknown };
}

export default function WorldMap() {
  const { t } = useLanguage();
  const [features, setFeatures] = useState<Feature[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(GEOJSON_URL)
      .then((r) => r.json())
      .then((data) => setFeatures(data.features))
      .catch(() => setError(true));
  }, []);

  const highlightMap = new Map(HIGHLIGHTED.map((c) => [c.name, c]));

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{t.worldMap.title}</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t.worldMap.subtitle}
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-950">
          {error ? (
            <div className="flex items-center justify-center h-64 text-slate-500">
              {t.worldMap.unableToLoad}
            </div>
          ) : (
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ background: 'linear-gradient(160deg,#0c1a2e 0%,#0f2240 50%,#0c1a2e 100%)' }}>
              <defs>
                {HIGHLIGHTED.map((c) => {
                  const gid = `hg-${c.name.replace(/\s+/g, '_')}`;
                  return (
                    <radialGradient key={gid} id={gid} cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor={c.color} stopOpacity="0.35" />
                      <stop offset="100%" stopColor={c.color} stopOpacity="0" />
                    </radialGradient>
                  );
                })}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Graticule */}
              {[-60, -30, 0, 30, 60].map((lat) => (
                <line key={`lat${lat}`} x1={0} y1={toY(lat)} x2={W} y2={toY(lat)}
                  stroke="#1e3a5f" strokeWidth="0.6" />
              ))}
              {[-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150].map((lon) => (
                <line key={`lon${lon}`} x1={toX(lon)} y1={0} x2={toX(lon)} y2={H}
                  stroke="#1e3a5f" strokeWidth="0.6" />
              ))}

              {/* Base countries (non-highlighted first, highlighted on top) */}
              {[...features.filter((f) => !highlightMap.has(f.properties.name)),
                ...features.filter((f) =>  highlightMap.has(f.properties.name))].map((f) => {
                const hl = highlightMap.get(f.properties.name);
                return (
                  <path
                    key={f.properties.name}
                    d={geometryToD(f.geometry)}
                    fill={hl ? hl.color : '#1e3a5f'}
                    fillOpacity={hl ? 0.85 : 0.9}
                    stroke={hl ? '#ffffff' : '#2d4e7a'}
                    strokeWidth={hl ? 0.5 : 0.4}
                    strokeOpacity={hl ? 0.35 : 1}
                  />
                );
              })}

              {/* Glow halos + markers for highlighted countries */}
              {HIGHLIGHTED.map((c) => {
                const cx = toX(c.lon);
                const cy = toY(c.lat);
                const lx = cx + c.labelDx;
                const ly = cy + c.labelDy;
                const displayName = c.label ?? c.name;
                const tw = displayName.length * 7.2 + 12;
                return (
                  <g key={c.name}>
                    <circle cx={cx} cy={cy} r={28} fill={`url(#hg-${c.name.replace(/\s+/g, '_')})`} />
                    {/* Pulse rings */}
                    <circle cx={cx} cy={cy} r={7} fill="none" stroke={c.ring} strokeWidth="1.5">
                      <animate attributeName="r" values="7;18;7" dur="2.2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.9;0;0.9" dur="2.2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={cx} cy={cy} r={11} fill="none" stroke={c.ring} strokeWidth="1">
                      <animate attributeName="r" values="11;24;11" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.6;0;0.6" dur="2.2s" begin="0.3s" repeatCount="indefinite" />
                    </circle>
                    {/* Dot */}
                    <circle cx={cx} cy={cy} r={4.5} fill={c.color} filter="url(#glow)" />
                    <circle cx={cx} cy={cy} r={2.5} fill="white" />
                    {/* Label */}
                    <line x1={cx} y1={cy} x2={lx + tw / 2} y2={ly + 9} stroke={c.color} strokeWidth="0.8" opacity="0.7" />
                    <rect x={lx} y={ly} width={tw} height={18} rx={4} fill="#0c1a2e" fillOpacity="0.85" stroke={c.color} strokeWidth="0.8" />
                    <text x={lx + 6} y={ly + 12.5} fontSize="10.5" fontWeight="600" fill="white" fontFamily="system-ui,sans-serif">
                      {displayName}
                    </text>
                  </g>
                );
              })}
            </svg>
          )}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {HIGHLIGHTED.map((c) => (
            <div key={c.name} className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-full flex-shrink-0 ring-2 ring-offset-2 ring-offset-slate-900"
                style={{ backgroundColor: c.color, ringColor: c.color }} />
              <span className="text-slate-300 text-sm font-medium">{c.label ?? c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
