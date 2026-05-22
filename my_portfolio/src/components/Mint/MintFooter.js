import SocialConnect from '@/components/Mint/SocialConnect';
import { contact } from '@/constants/resume';
import { wrapTight } from '@/lib/mint-styles';

export default function MintFooter() {
  return (
    <footer
      id="contact"
      className={`${wrapTight} flex flex-col items-center justify-between gap-4 border-t border-mp-g3 py-10 md:flex-row`}
    >
      <p className="m-0 text-center text-[0.78rem] text-mp-dim md:text-left">
        © {new Date().getFullYear()} {contact.name} — {contact.headline}
      </p>

      <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
        <SocialConnect variant="footer" />
        <span className="text-[0.78rem] text-mp-mint">Built with care · Dasmariñas, Cavite 🇵🇭</span>
      </div>
    </footer>
  );
}
