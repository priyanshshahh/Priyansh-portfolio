import Link from "next/link";

export function DownloadFab() {
  return (
    <Link
      href="/resume.pdf"
      download="Priyansh_Shah_Resume.pdf"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-medium text-background shadow-lg transition-transform hover:scale-105"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
      Download PDF
    </Link>
  );
}
