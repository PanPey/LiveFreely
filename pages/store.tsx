// pages/store.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Store: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Head>
        <title>Store</title>
        <meta name="description" content="Store placeholder" />
      </Head>
      <Header />
      <div className="flex items-center justify-center h-[calc(100vh-64px)]">
        <h1 className="text-4xl">Store Coming Soon</h1>
      </div>
    </div>
  )
}

export default Store
