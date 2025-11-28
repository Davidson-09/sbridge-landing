import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "StrongBridgeMIS helps me stay on top of company operations and now I can better align my teams with business goals.",
      author: "Dr. Monsurat Iyabode",
      role: "CEO, Assetium Capital Management",
    },
    {
      quote:
        "StrongBridgeMIS is the most feature-rich yet easiest-to-use HR platform I have ever worked with.",
      author: "Lilian Nwachukwu",
      role: "COO, Regno Media",
    },
    {
      quote:
        "The StrongBridgeMIS software is very intuitive, I could onboard my whole team in a matter of minutes. It's easy to navigate and has all the features we need.",
      author: "RoseMary Enock",
      role: "HR Manager, Casalvoro Ltd.",
    },
  ]

  return (
    <section id="testimonials" className="relative py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ecf9ef] via-white to-[#ecf9ef]"></div>

      <div className="container relative px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl text-[#012d1f]">What Our Customers Say</h2>
          <p className="mb-16 text-lg text-gray-800">
            Don't just take our word for it - hear from some of our satisfied customers
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl border border-gray-800 bg-white p-6 backdrop-blur-sm"
            >
              <svg className="mb-4 h-8 w-8 text-[#012d1f]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="mb-6 flex-1 text-gray-800">{testimonial.quote}</p>
              <div className="flex items-center">
                {/* <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={48}
                  height={48}
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                /> */}
                <div>
                  <p className="font-bold text-gray-800">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
