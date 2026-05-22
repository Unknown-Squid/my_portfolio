import Image from 'next/image';
import { galleryImages } from '@/constants/gallery';
import { fade, heading, label, section, sectionHeader, wrap } from '@/lib/mint-styles';

export default function MintGallerySection() {
  return (
    <section id="gallery" className={section}>
      <div className={wrap}>
        <div className={`${sectionHeader} ${fade}`}>
          <div>
            <div className={label}>In the field</div>
            <h2 className={heading}>Gallery</h2>
          </div>
        </div>

        <div data-stagger className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className={`${fade} relative aspect-video overflow-hidden rounded-2xl border border-mp-g3 bg-mp-g1 transition hover:-translate-y-0.5 hover:border-mp-mint/35`}
            >
              <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
