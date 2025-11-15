import { Activity, Lock, Users, Zap, BarChart3, Clock } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Intuitive Dashboard",
      description: "Get a complete overview of your business with our easy-to-use dashboard.",
      icon: <BarChart3 className="h-6 w-6" color="green"/>,
    },
    {
      title: "Advanced Analytics",
      description: "Make data-driven decisions with comprehensive analytics and reporting.",
      icon: <Activity className="h-6 w-6" color="green"/>,
    },
    {
      title: "Team Collaboration",
      description: "Work seamlessly with your team members in real-time.",
      icon: <Users className="h-6 w-6" color="green"/>,
    },
    {
      title: "Automation Tools",
      description: "Save time by automating repetitive tasks and workflows.",
      icon: <Zap className="h-6 w-6" color="green"/>,
    },
    {
      title: "Secure Storage",
      description: "Keep your data safe with enterprise-grade security measures.",
      icon: <Lock className="h-6 w-6" color="green"/>,
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it with our dedicated support team.",
      icon: <Clock className="h-6 w-6" color="green"/>,
    },
  ]

  return (
    <section id="features" className="relative py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ecf9ef] to-[#ecf9ef]"></div>

      <div className="container relative px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-[#012d1f]">Powerful Features</h2>
          <p className="mb-16 text-lg text-gray-800">Everything you need to manage your business efficiently</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-gray-800 bg-white p-6 transition-all hover:border-green-500 hover:bg-gray-200"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#ecf9ef] text-purple-400">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#012d1f]">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
