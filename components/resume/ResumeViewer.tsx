"use client";

import dynamic from "next/dynamic";
import { DownloadFab } from "./DownloadFab";

const PdfViewer = dynamic(
  () => import("./PdfViewer").then((m) => m.PdfViewer),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 items-center justify-center text-muted">
        Loading resume...
      </div>
    ),
  },
);

export function ResumeViewer() {
  return (
    <>
      <PdfViewer />
      <DownloadFab />
    </>
  );
}
