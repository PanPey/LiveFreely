// pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>Pomodoro App</title>
        <meta name="description" content="Minimal Pomodoro app with a modern dark design" />
      </Head>
      <Header />
      <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-4">
        <h1 className="text-6xl font-bold mb-6">Pomodoro App</h1>
        <p className="text-xl text-gray-300">
          Boost your productivity with a sleek, minimal timer.
        </p>
      </div>
    </div>
  )
}

export default Home
