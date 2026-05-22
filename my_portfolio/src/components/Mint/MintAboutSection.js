import { contact, professionalSummary } from '@/constants/resume';
import { fade, heading, label, section, sectionHeader, wrap } from '@/lib/mint-styles';

const infoRows = [
  { label: 'Location', value: contact.location },
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'Phone', value: contact.phone, href: 'tel:+639918847001' },
  {
    label: 'LinkedIn',
    value: 'fritz-gerald-fegalan',
    href: contact.linkedIn,
    external: true,
  },
  { label: 'GitHub', value: 'Unknown-Squid', href: 'https://github.com/Unknown-Squid?tab=repositories', external: true },
  { label: 'Portfolio', value: 'gerald-portfolio-beryl.vercel.app', href: contact.portfolio, external: true },
  { label: 'Resume', value: 'Download PDF', href: '/resume/Gerald Fegalan Resume.pdf', download: true },
  { label: 'Role', value: contact.role, highlight: true },
];

export default function MintAboutSection() {
  return (
    <section id="about" className={section}>
      <div className={wrap}>
        <div className={`${sectionHeader} ${fade}`}>
          <div>
            <div className={label}>Who I am</div>
            <h2 className={heading}>Profile</h2>
          </div>
        </div>

        <div className={`${fade} grid items-start gap-16 lg:grid-cols-[1fr_380px]`}>
          <div className="space-y-5 text-[1.05rem] leading-relaxed text-mp-muted">
            {professionalSummary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl border border-mp-g3 bg-mp-g3">
            {infoRows.map((row) => (
              <div key={row.label} className="flex items-start gap-3 bg-mp-g1 px-5 py-4">
                <span className="min-w-[70px] pt-0.5 text-[0.72rem] uppercase tracking-wider text-mp-dim">{row.label}</span>
                <span className={`flex-1 break-all text-[0.85rem] ${row.highlight ? 'text-mp-mint' : 'text-mp-text'}`}>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="text-mp-mint no-underline hover:underline"
                      target={row.external ? '_blank' : undefined}
                      rel={row.external ? 'noopener noreferrer' : undefined}
                      download={row.download || undefined}
                    >
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
