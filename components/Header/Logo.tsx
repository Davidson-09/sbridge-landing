import Link from "next/link"
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-bold text-xl focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md">
      <Image
        src={"/logo.png"}
        alt="logo"
        width={50}
        height={50}
        className="rounded-lg"
      />
      <span className="bg-gradient-to-r from-[#012d1f] to-green-600 bg-clip-text text-transparent">StrongBridge</span>
    </Link>
  )
}
