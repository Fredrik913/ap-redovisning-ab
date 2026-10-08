import { services } from "../../content/services";

function Services() {
  return (
    <section id="ourServices" className="w-full pt-16 pb-20 scroll-mt-[70px]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Våra tjänster</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-xs"
            >
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
