import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Portfolio',
  description: 'A page about me',
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
