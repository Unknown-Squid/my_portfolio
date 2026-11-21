import { fade } from '@/lib/mint-styles';

export default function MintStats() {
  // [big text, label, optional small note]
  const stats = [
    ['4+', 'Years Experience'],
    ['15+', 'Client Systems Delivered'],
    ['15+', 'Enterprise Drupal Sites'],
    ['AI', 'Driven Development'],
  ];

  return (
    <div className={`${fade} mt-10 grid w-full max-w-content grid-cols-2 gap-px overflow-hidden rounded-2xl border border-mp-g3 bg-mp-g3 md:grid-cols-4`}>
      {stats.map(([num, lbl, note]) => (
        <div key={lbl} className="bg-mp-g1 px-6 py-7 text-center md:px-8">
          <div className="font-syne text-4xl font-extrabold leading-none text-mp-mint md:text-5xl">{num}</div>
          <div className="mt-1.5 text-[0.75rem] uppercase tracking-wider text-mp-muted">{lbl}</div>
          {note && <div className="mt-1 text-[0.7rem] text-mp-dim">{note}</div>}
        </div>
      ))}
    </div>
  );
}
