import { contact } from "../../content/contact";
import { hero } from "../../content/hero";

function Hero() {
  return (
    <div className="relative flex justify-center items-center -mt-[73px] pt-[97px] pb-8 border-b border-black/20 h-[80vh]">
      <picture className="absolute inset-0 w-full h-full">
        <source srcSet={hero.image.mobile} media="(max-width: 640px)" type="image/jpeg" />
        <source srcSet={hero.image.desktop} media="(min-width: 641px)" type="image/jpeg" />
        <img src={hero.image.desktop} alt={hero.image.alt} className="w-full h-full object-cover" />
      </picture>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
          {hero.heading}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 text-balance">{hero.subheading}</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${contact.phone.tel}`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-brand-800 bg-brand-800 text-white font-semibold shadow-md hover:bg-brand-700 hover:border-brand-700 transition-colors"
          >
            {hero.callLabel} {contact.phone.label}
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-900 bg-gray-900 text-white font-semibold shadow-md hover:bg-gray-800 hover:border-gray-800 transition-colors"
          >
            {hero.emailLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
