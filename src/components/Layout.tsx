import React from 'react'

type Props = {
    children: React.ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <main className="flex min-h-screen flex-col items-center gap-24 p-2 py-24 lg:p-24  text-white font-bold text-2xl lg:text-5xl">
            {children}
            <div className='fixed bottom-10 text-lg bg-love p-4 rounded-xl'>Made with ❤️ by <a href="https://matthys.dev" className='text-slate-400'>Matthys</a> & <a href="https://lucashochart.fr" className='text-slate-400'>Lucas</a></div>
        </main>
    )
}