import { skillCategories, softSkills } from '@/constants/skills';
import { card, fade, heading, label, pill, section, sectionHeader, wrap } from '@/lib/mint-styles';

export default function MintSkillsSection() {
  return (
    <section id="skills" className={section}>
      <div className={wrap}>
        <div className={`${sectionHeader} ${fade}`}>
          <div>
            <div className={label}>What I work with</div>
            <h2 className={heading}>Skills</h2>
          </div>
        </div>

        <p className={`${fade} -mt-4 mb-8 text-[0.88rem] uppercase tracking-wider text-mp-dim`}>Technical Skills</p>

        <div data-stagger className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className={`${card} ${fade} before:pointer-events-none before:absolute before:-right-10 before:-top-10 before:h-24 before:w-24 before:rounded-full before:bg-[radial-gradient(circle,rgba(184,240,200,0.06)_0%,transparent_70%)] before:content-['']`}
            >
              <div className="mb-4 font-syne text-[0.95rem] font-bold tracking-wide text-mp-text">{cat.title}</div>
              <div className="flex flex-wrap gap-1.5">
                {cat.pills.map((p) => (
                  <span key={p} className={pill}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className={`${fade} mb-4 text-[0.88rem] uppercase tracking-wider text-mp-dim`}>Soft Skills</p>
        <div className={`${fade} flex flex-wrap gap-2`}>
          {softSkills.map((skill) => (
            <span key={skill} className={pill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
