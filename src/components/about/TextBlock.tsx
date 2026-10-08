import type { TextBlockContent } from "../../content/about";

function TextBlock({ content }: { content: TextBlockContent }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-800">{content.heading}</h3>
      {content.paragraphs.map((text, i) => (
        <p key={i} className={`text-gray-700 leading-relaxed ${i === 0 ? "mt-2" : "mt-4"}`}>
          {text}
        </p>
      ))}
    </div>
  );
}

export default TextBlock;
