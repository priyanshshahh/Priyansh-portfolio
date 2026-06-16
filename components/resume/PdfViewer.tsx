"use client";

import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export function PdfViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [width, setWidth] = useState(800);

  useEffect(() => {
    const update = () => {
      setWidth(Math.min(window.innerWidth - 48, 800));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Document
        file="/resume.pdf"
        onLoadSuccess={({ numPages: n }) => setNumPages(n)}
        loading={
          <div className="flex h-96 items-center justify-center text-muted">
            Loading resume...
          </div>
        }
        error={
          <div className="flex h-96 items-center justify-center text-red-400">
            Failed to load resume.
          </div>
        }
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page
            key={`page_${i + 1}`}
            pageNumber={i + 1}
            width={width}
            className="mb-4 overflow-hidden rounded-lg border border-border shadow-lg"
          />
        ))}
      </Document>
    </div>
  );
}
