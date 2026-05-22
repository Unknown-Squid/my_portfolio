import { fade, wrapTight } from '@/lib/mint-styles';

export default function MintStats() {
  const stats = [
    ['2+', 'Years Experience'],
    ['6+', 'Client Projects'],
    ['95+', 'SEO Score'],
  ];

  return (
    <div className={`${wrapTight} pb-0 pt-0`}>
      <div className={`${fade} mx-auto mb-24 grid max-w-content grid-cols-1 gap-px overflow-hidden rounded-2xl border border-mp-g3 bg-mp-g3 md:grid-cols-3`}>
        {stats.map(([num, lbl]) => (
          <div key={lbl} className="bg-mp-g1 px-10 py-8 text-center">
            <div className="font-syne text-5xl font-extrabold leading-none text-mp-mint">{num}</div>
            <div className="mt-1.5 text-[0.8rem] uppercase tracking-wider text-mp-muted">{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
