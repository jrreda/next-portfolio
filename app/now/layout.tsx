import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now | Portfolio",
  description: "What I am doing right now.",
};

export default function NowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>{children}</div>
  )
}
