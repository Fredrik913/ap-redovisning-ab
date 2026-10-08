import { useState } from "react";
import { services } from "../content/services";

function Services() {
  const [openService, setOpenService] = useState<number | null>(null);

  return (
    <section id="ourServices" className="w-full pt-16 pb-20 scroll-mt-[70px]">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Våra tjänster</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {services.map((service, i) => (
            <details
              key={service.title}
              open={openService === i}
              // ALLOW ONLY ONE DETAILS OPEN AT A TIME
              onToggle={(e) => {
                const isOpen = e.currentTarget.open;
                setOpenService((current) => (isOpen ? i : current === i ? null : current));
              }}
              className="group border border-gray-200 rounded-xl shadow-xs transition-all bg-white hover:shadow-md hover:border-gray-600"
            >
              <summary className="p-5 cursor-pointer text-lg font-semibold text-gray-800 list-none flex items-center justify-between">
                {service.title}
                <svg
                  className="w-5 h-5 text-gray-800 transition-all duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                </svg>
              </summary>

              <p className="-mt-2 px-5 pb-5 text-gray-600 leading-relaxed">{service.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
