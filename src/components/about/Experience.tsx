import type { ExperienceContent } from "../../content/about";

function Experience({ content }: { content: ExperienceContent }) {
  return (
    <div className="border-l-4 border-blue-500 pl-4">
      <p className="text-sm uppercase tracking-wide text-gray-500">{content.label}</p>
      <p className="mt-1 text-gray-800 font-semibold">{content.title}</p>
      <p className="mt-1 text-gray-600 text-sm">{content.text}</p>
    </div>
  );
}

export default Experience;
