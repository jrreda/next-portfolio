import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";
import PageBody from "@/components/PageBody";
import NowItems from "@/components/feature/NowItems";

const LAST_UPDATED = new Date("2026-02-07");

export default function NowPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Now
            </Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              What I am doing <span className="text-gradient">right now</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Inspired by{" "}
              <a
                href="https://nownownownow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                /now
              </a>{" "}
              movement. This page is updated regularly to reflect my current
              focus and activities.
            </p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Last updated:{" "}
              {LAST_UPDATED.toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <PageBody>
        <section className="py-20 max-w-6xl mx-auto">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Current Focus</h2>
              <p className="text-lg text-muted-foreground mb-8">
                I&apos;m currently focused on building AI-powered applications
                mainly using Nextjs and the Vercel AI SDK. My main goal is to
                create practical, real-world products that combine my software
                engineering skills with modern AI capabilities.
              </p>

              <div className="mx-auto w-full max-w-5xl px-4 py-8">
                <NowItems />
              </div>
            </div>
          </div>
        </section>
      </PageBody>
    </div>
  );
}
