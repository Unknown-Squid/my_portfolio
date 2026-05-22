import { education } from '@/constants/resume';
import { fade, heading, label, section, sectionHeader, wrap } from '@/lib/mint-styles';

export default function MintEducationSection() {
  return (
    <section id="education" className={section}>
      <div className={wrap}>
        <div className={`${sectionHeader} ${fade}`}>
          <div>
            <div className={label}>Academic Background</div>
            <h2 className={heading}>Education</h2>
          </div>
        </div>

        <div
          className={`${fade} relative grid items-center gap-8 overflow-hidden rounded-[20px] border border-mp-mint/15 bg-mp-g1 p-10 after:pointer-events-none after:absolute after:-bottom-16 after:-right-16 after:h-44 after:w-44 after:rounded-full after:bg-[radial-gradient(circle,rgba(184,240,200,0.05)_0%,transparent_70%)] after:content-[''] md:grid-cols-[1fr_auto]`}
        >
          <div>
            <div className="font-syne text-[1.3rem] font-bold text-mp-text">
              {education.degree} ({education.major})
            </div>
            <div className="mt-2 text-[0.9rem] text-mp-mint">{education.school}</div>
            <div className="text-[0.8rem] text-mp-dim">{education.years}</div>
            <div className="mt-2 text-[0.78rem] leading-snug text-mp-dim">{education.gpaNote}</div>
          </div>
          <div className="min-w-[100px] rounded-xl border border-mp-mint/20 bg-mp-mint/[0.08] px-6 py-5 text-center">
            <div className="font-syne text-[1.8rem] font-extrabold leading-none text-mp-mint">{education.gpa}</div>
            <div className="mt-1 text-[0.7rem] uppercase tracking-wider text-mp-muted">GPA / 1.0</div>
          </div>
        </div>
      </div>
    </section>
  );
}
