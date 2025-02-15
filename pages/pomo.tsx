// pages/pomo.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import PomodoroTimer from '../components/PomodoroTimer'

const Pomo: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>Pomodoro Timer</title>
        <meta name="description" content="Pomodoro Timer" />
      </Head>
      <Header />
      <main className="flex flex-col items-center justify-center h-[calc(100vh-64px)]">
        <PomodoroTimer />
      </main>
    </div>
  )
}

export default Pomo
