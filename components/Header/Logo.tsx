import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-xl focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-green-600 to-green-400 text-white shadow-md">S</div>
      <span className="bg-gradient-to-r from-green-400 to-green-400 bg-clip-text text-transparent">StrongBridgeMIS</span>
    </Link>
  )
}
