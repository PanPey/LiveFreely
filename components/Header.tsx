// components/Header.tsx
import Link from 'next/link'

const Header = () => {
  return (
    <header className="p-6 bg-black text-white flex justify-between items-center border-b border-gray-700 shadow-md">
      <div className="text-2xl font-bold">Live Freely!</div>
      <nav className="flex space-x-6">
        <Link href="/pomo" className="hover:text-gray-300 transition">
          Pomo
        </Link>
        <Link href="/store" className="hover:text-gray-300 transition">
          Store
        </Link>
        <Link href="/meditation" className="hover:text-gray-300 transition">
          Meditation
        </Link>
      </nav>
    </header>
  )
}

export default Header
