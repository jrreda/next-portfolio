import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Career | Portfolio',
    description: 'A page about my career journey and the milestones that shaped my expertise in building exceptional digital products.',
}

export default function CareerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>{children}</>
    )
}