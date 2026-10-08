import { useState } from "react";
import { copyToClipboard } from "../../utils/clipboard";

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Kopierat" : label}
      title={copied ? "Kopierat" : label}
      className="inline-flex items-center justify-center w-8 h-8 -my-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
    >
      {copied ? (
        <svg
          aria-hidden="true"
          className="w-4 h-4 text-brand-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"
          />
        </svg>
      )}
      <span className="sr-only" aria-live="polite">
        {copied ? "Kopierat" : ""}
      </span>
    </button>
  );
}

export default CopyButton;
