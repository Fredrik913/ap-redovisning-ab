import { references } from "../../content/references";

function References() {
  return (
    <section
      id="references"
      className="flex items-center w-full pt-6 pb-12 scroll-mt-[50px] md:min-h-[500px]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Referenser</h2>

        {/* 2 cards in row on tablet, 3 on large desktop */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
          {references.map((ref) => (
            <div
              key={ref.company}
              className="p-6 bg-white rounded-xl border-l-4 border-blue-600 shadow-lg shadow-gray-300 w-full"
            >
              <h3 className="text-lg font-semibold text-gray-800">{ref.company}</h3>
              <p className="text-gray-600 mt-1">Kontakt: {ref.contact}</p>
              <p className="text-gray-700 mt-1">
                <span className="font-semibold">Telefon:</span>{" "}
                <a href={`tel:${ref.phone.tel}`} className="text-black hover:underline">
                  {ref.phone.label}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default References;
