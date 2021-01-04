import Head from 'next/head'

export default function Home() {
    return (
        <div className={"bg-gray-100 text-black"}>
            <Head>
                <title>Starter Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={"text-center p-12 min-h-screen flex items-center justify-center"}>
                <p>Next.js starter with Tailwind 1.9 (IE11 compatible)</p>
            </main>
        </div>
    )
}
