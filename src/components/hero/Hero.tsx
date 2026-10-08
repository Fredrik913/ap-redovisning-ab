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
      <div className="relative z-10 text-center px-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-100 leading-tight">
          {hero.heading}
        </h1>
      </div>
    </div>
  );
}

export default Hero;
