"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function SocialProof() {
  const companies = [
    { name: "Assetium", logo: "https://c4tcbnykdm.ufs.sh/f/xvkOl1HPZOfLVk20DRQbSACUzc3GIx81kavJFtNpLYeXRVum" },
    { name: "Regno media", logo: "https://c4tcbnykdm.ufs.sh/f/xvkOl1HPZOfLHIFlncTI5TqF2kpr8LDiMYSK4l7OQywUadGe" },
    { name: "LASAA", logo: "https://c4tcbnykdm.ufs.sh/f/xvkOl1HPZOfLDDCy8ZttHUIAK8YxNvQj1VTyMporRduWhJza" },
    // { name: "Notion", logo: "https://cdn.simpleicons.org/notion" },
    // { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
    // { name: "Trello", logo: "https://cdn.simpleicons.org/trello" },
  ]

  const stats = [
    { value: "10k+", label: "Manged Records" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ecf9ef] to-[#ecf9ef]"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-500 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container relative px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-lg text-black font-medium mb-2">Trusted by professionals from top brands </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#012d1f]">Join the growing list of tech savvy managers boosting productivity</h2>
        </div>

        {/* Company logos */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="transition-all duration-300"
              variants={itemVariants}
            >
              <div className="rounded-lg p-4  flex items-center justify-center">
                <Image
                  src={company.logo || "/placeholder.svg"}
                  alt={company.name}
                  width={100}
                  height={80}
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-green-600 to-green-600 opacity-30 blur-sm"></div>
                <div className="relative bg-gray-100 rounded-lg p-6 border border-gray-800">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#023021] to-[#012d1f] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-800">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
