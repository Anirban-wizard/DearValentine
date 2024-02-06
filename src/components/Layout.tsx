import React from 'react'

type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <main className="flex min-h-screen flex-col items-center gap-24 p-24  text-white font-bold text-5xl">
            {children}
        </main>
    )
}