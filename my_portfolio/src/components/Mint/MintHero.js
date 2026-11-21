import { contact, professionalSummary } from '@/constants/resume';
import { btnGhost, btnPrimary } from '@/lib/mint-styles';

export default function MintHero() {
  const summaryLead = professionalSummary[0].slice(contact.headline.length);

  return (
    <div className="hero-wrap">
      <div className="hero">
        <div className="hero-deco" aria-hidden>
          4+
        </div>

        <div className="hero-tag">Open to relocation · International opportunities</div>

        <h1 className="hero-title">
          Fritz Gerald
          <span className="name-green">Fegalan.</span>
        </h1>

        <p className="hero-sub">
          <strong>{contact.headline}</strong>
          {summaryLead} Based in <strong>{contact.location}</strong>
        </p>

        <div className="hero-cta">
          <a href={`mailto:${contact.email}`} className={btnPrimary}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,12 2,6" />
            </svg>
            Get in touch
          </a>
          <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer" className={btnGhost}>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
