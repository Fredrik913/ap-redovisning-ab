import { about } from "../../content/about";
import Experience from "./Experience";
import TextBlock from "./TextBlock";

function About() {
  return (
    <section id="aboutUs" className="w-full pt-16 pb-20 scroll-mt-[60px]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">{about.heading}</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bilden */}
          <div className="flex justify-center">
            <img
              src={about.image.src}
              alt={about.image.alt}
              className="w-64 h-64 object-cover rounded-full shadow-lg border border-blue-400/30"
            />
          </div>

          {/* Textblock */}
          <div className="space-y-6">
            <TextBlock content={about.intro} />
            <Experience content={about.experience} />
            <TextBlock content={about.background} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
