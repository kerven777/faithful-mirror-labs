import { createFileRoute } from "@tanstack/react-router";
import { DownloadGuidePage } from "@/components/site/DownloadGuide";

export const Route = createFileRoute("/download-guide")({
  head: () => ({
    meta: [
      { title: "Download Guide — Kitap" },
      {
        name: "description",
        content: "Step-by-step guide to download the Kitap project codebase.",
      },
      { property: "og:title", content: "Download Guide — Kitap" },
      { property: "og:description", content: "Step-by-step guide to download the Kitap project codebase." },
    ],
  }),
  component: DownloadGuidePage,
});
