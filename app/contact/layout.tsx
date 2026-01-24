import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Contact me for any questions or inquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>{children}</div>
  )
}
