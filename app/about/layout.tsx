import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Portfolio',
  description: 'A page about me and my journey in the world of web development and technology.',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>{children}</>
  )
}
