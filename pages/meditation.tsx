// pages/meditation.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Meditation: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Meditation Quotes</title>
        <meta name="description" content="Inspiring meditation quotes" />
      </Head>
      <Header />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-4">
        <h1 className="text-6xl font-bold mb-6">Meditation Quotes</h1>
        <p className="text-xl text-gray-300 max-w-2xl text-center">
          "Meditation is not evasion; it is a serene encounter with reality." - Thích Nhất Hạnh
        </p>
      </div>
    </div>
  )
}

export default Meditation
