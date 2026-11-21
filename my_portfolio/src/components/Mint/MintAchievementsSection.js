import { achievements } from '@/constants/achievements';
import { card, fade, heading, label, section, sectionHeader, wrap } from '@/lib/mint-styles';

export default function MintAchievementsSection() {
  return (
    <section id="achievements" className={section}>
      <div className={wrap}>
        <div className={`${sectionHeader} ${fade}`}>
          <div>
            <div className={label}>Impact delivered</div>
            <h2 className={heading}>Key Achievements</h2>
          </div>
        </div>

        <div data-stagger className="grid grid-cols-1 gap-6 md:grid-cols-2 md:max-xl:[&>*:last-child:nth-child(odd)]:col-span-2 xl:grid-cols-3 xl:[&>*:last-child:nth-child(3n+1)]:col-span-3">
          {achievements.map((a) => (
            <div key={a.number + a.text.slice(0, 20)} className={`${card} ${fade} hover:border-mp-mint/30`}>
              <div className="font-syne text-[2.8rem] font-extrabold leading-none text-mp-mint">{a.number}</div>
              <p className="mt-2 text-[0.88rem] leading-snug text-mp-muted">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
