import { socialLinks } from '@/constants/social';
import { GmailIcon, ViberIcon, WhatsAppIcon } from '@/components/icons/SocialIcons';

const items = [
  { key: 'viber', Icon: ViberIcon, iconClass: 'h-5 w-[19px]' },
  { key: 'whatsapp', Icon: WhatsAppIcon, iconClass: 'h-5 w-5' },
  { key: 'email', Icon: GmailIcon, iconClass: 'h-[11px] w-[14px]' },
];

export default function SocialConnect({ variant = 'hero' }) {
  const isHero = variant === 'hero';
  const isFooter = variant === 'footer';
  const links = isFooter ? items.filter(({ key }) => key !== 'email') : items;

  return (
    <div className={isHero ? 'hero-connect' : 'footer-connect'}>
      {isHero && <p className="hero-connect-label">Connect with me</p>}
      <div className="connect-icons">
        {links.map(({ key, Icon, iconClass }) => {
          const { href, label } = socialLinks[key];
          return (
            <a
              key={key}
              href={href}
              target={key === 'email' ? undefined : '_blank'}
              rel={key === 'email' ? undefined : 'noopener noreferrer'}
              className="connect-icon-btn"
              aria-label={label}
              title={label}
            >
              <Icon className={iconClass} />
              {isHero && <span className="connect-icon-label">{label}</span>}
            </a>
          );
        })}
      </div>
    </div>
  );
}
