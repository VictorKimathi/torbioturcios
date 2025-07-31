import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


const services = [
  {
    title: "Long-form Features",
    description:
      "In-depth automotive journalism that explores complex topics with technical precision and engaging storytelling.",
    icon: "📝",
  },
  {
    title: "Vehicle Reviews & Diagnostics",
    description: "Comprehensive vehicle assessments combining technical analysis with real-world usability insights.",
    icon: "🔧",
  },
  {
    title: "Industry Trends & EV Technologies",
    description: "Forward-looking analysis of automotive innovations, from electric powertrains to autonomous systems.",
    icon: "⚡",
  },
  {
    title: "Classic Cars & Motorsports",
    description: "Passionate coverage of automotive heritage, restoration projects, and competitive racing.",
    icon: "🏁",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#1a3a5c] text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10 bg-cover bg-center" />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Accelerating Stories: Expert Automotive Journalism
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Blending technical precision with an enthusiast's voice to cover vehicle technology, classic cars,
                motorsports, and engineering trends.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-[#635BFF] hover:bg-[#5A52E8] text-white px-8 py-3 text-lg">
                <Link href="/portfolio">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#0A2540] px-8 py-3 text-lg bg-transparent"
              >
                <Link href="/contact">Contact Toribio</Link>
              </Button>
            </div>
            <div className="pt-8">
              <Button asChild variant="ghost" className="text-blue-100 hover:text-white hover:bg-white/10">
                <Link href="/resume.docx" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">Core Writing Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized automotive journalism services tailored for publications, brands, and enthusiast communities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-[#0A2540] mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

  

      {/* Profile Snippet */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="Toribio Turcios"
                width={120}
                height={120}
                className="rounded-full mx-auto mb-6 border-4 border-[#635BFF]"
              />
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
              "Writing with enthusiasts, tinkerers, and first-time buyers in mind, I produce clean, well-sourced content
              under tight deadlines."
            </blockquote>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                As a freelance automotive journalist with over three years of experience, I specialize in translating
                complex automotive technologies into engaging, accessible content. From EV powertrains to classic car
                restoration, I bring technical precision and genuine enthusiasm to every story.
              </p>
              <Button asChild size="lg" className="bg-[#635BFF] hover:bg-[#5A52E8] text-white">
                <Link href="/about">
                  Learn More About My Approach
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#0A2540] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Drive Your Content Forward?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's collaborate on your next automotive journalism project. From technical deep-dives to engaging
            features, I'm here to help tell your story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#635BFF] hover:bg-[#5A52E8] text-white px-8 py-3">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#0A2540] px-8 py-3 bg-transparent"
            >
              <Link href="/portfolio">Explore My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
