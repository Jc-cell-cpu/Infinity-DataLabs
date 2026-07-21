import Image from "next/image";
import { partners } from "@/lib/site-data";

// Partner logos as a continuous ribbon. Two copies of the list with a -50%
// translate give a seamless loop; one copy is wider than any viewport, so no gap
// ever shows. Each logo sits in an identical fixed-size chip with object-contain,
// so nothing is stretched or cropped whatever its aspect ratio — and because the
// supplied logos have mixed backgrounds (white, dark navy, transparent), one
// consistent light chip is the only surface that suits all of them.
// Sources are the pre-trimmed files in /public/logos, so each mark fills its chip.
export function PartnerWall() {
  const items = [...partners, ...partners];
  return (
    <div className="marquee-mask overflow-hidden" role="group" aria-label="Partners and clients">
      <div className="partner-track flex w-max items-center hover:[animation-play-state:paused]">
        {items.map((partner, index) => {
          const isClone = index >= partners.length;
          return (
            <span
              key={`${partner.file}-${index}`}
              title={partner.name}
              aria-hidden={isClone || undefined}
              className={`partner-chip relative mr-4 h-20 w-40 shrink-0 overflow-hidden rounded-2xl bg-white sm:h-24 sm:w-52${isClone ? " partner-clone" : ""}`}
            >
              {partner.wordmark ? (
                <span className="flex h-full w-full items-center justify-center gap-2 px-3">
                  <Image src={`/logos/${partner.file}`} alt="" width={215} height={280} className="h-8 w-auto shrink-0 sm:h-10" />
                  <span className="partner-wordmark whitespace-nowrap text-base leading-none sm:text-xl" style={{ backgroundImage: partner.wordmark.gradient }}>{partner.name}</span>
                </span>
              ) : (
                <Image
                  src={`/logos/${partner.file}`}
                  alt={isClone ? "" : partner.name}
                  fill
                  sizes="208px"
                  className="object-contain p-3 sm:p-4"
                />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}
