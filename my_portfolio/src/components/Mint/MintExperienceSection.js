import { experienceEntries } from '@/constants/experience';
import { fade, heading, label, section, sectionHeader, tag, wrap } from '@/lib/mint-styles';

export default function MintExperienceSection() {
  return (
    <section id="experience" className={section}>
      <div className={wrap}>
        <div className={`${sectionHeader} ${fade}`}>
          <div>
            <div className={label}>Where I&apos;ve worked</div>
            <h2 className={heading}>Experience</h2>
          </div>
        </div>

        <div data-stagger className="flex flex-col">
          {experienceEntries.map((job) => (
            <div
              key={job.id}
              className={`${fade} grid gap-4 py-4 transition hover:bg-mp-mint/[0.02] md:grid-cols-[220px_1fr] md:gap-8`}
            >
              <div className="flex flex-col gap-2">
                <span className="text-[0.78rem] tracking-wide text-mp-muted">{job.date}</span>
                <span className="text-[0.9rem] font-medium text-mp-mint-light">{job.company}</span>
                <span className="text-[0.75rem] text-mp-dim">{job.location}</span>
              </div>
              <div>
                <div className="mb-1 font-syne text-xl font-bold text-mp-text">{job.title}</div>
                {job.note && <p className="mb-4 text-[0.78rem] italic text-mp-dim">{job.note}</p>}
                {!job.note && <div className="mb-4" />}
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {job.bullets.map((b, i) => (
                    <li
                      key={`${job.id}-${i}`}
                      className="exp-bullet relative pl-5 text-[0.88rem] leading-relaxed text-mp-muted"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {job.tags.map((t) => (
                    <span key={t} className={tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
