import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Portfolio",
  description: "A collection of projects I've worked on, from web applications to open-source contributions.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
