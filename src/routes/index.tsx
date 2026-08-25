import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/HomePage";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kitap — English Language Centre in Ashgabat" },
      {
        name: "description",
        content:
          "Kitap Bilim Merkezi — English courses for children, teens and adults following CEFR international standards.",
      },
      { property: "og:title", content: "Kitap Bilim Merkezi" },
      { property: "og:description", content: "English courses following CEFR standards." },
    ],
  }),
  component: HomePage,
});

