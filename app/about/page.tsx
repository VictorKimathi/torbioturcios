import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, GraduationCap, ArrowRight, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const experience = [
  {
    title: "Freelance Automotive Journalist",
    period: "2021 - Present",
    description:
      "Independent automotive content creation for various publications, specializing in technical analysis, vehicle reviews, and industry trend reporting.",
    highlights: [
      "Published 150+ articles",
      "Collaborated with 12+ publications",
      "Covered major auto shows and launches",
    ],
  },
  {
    title: "Content Contributor - MotorGear Weekly",
    period: "2020 - 2021",
    description:
      "Regular contributor focusing on EV technology, classic car features, and motorsports coverage for a digital publication with 100K+ monthly readers.",
    highlights: [
      "Weekly column on EV innovations",
      "Interviewed industry executives",
      "Increased reader engagement by 35%",
    ],
  },
  {
    title: "Technical Writing Intern - Piston Dynamics Garage",
    period: "2019 - 2020",
    description:
      "Created technical documentation, repair guides, and educational content for automotive service professionals.",
    highlights: [
      "Authored 50+ technical guides",
      "Streamlined documentation process",
      "Trained on advanced diagnostics",
    ],
  },
]

const skills = [
  "Automotive Journalism",
  "Vehicle Engineering Literacy",
  "CMS (WordPress, Ghost)",
  "AP Style",
  "SEO Best Practices",
  "Deadline-driven Editing",
  "Interview-based Feature Writing",
  "Digital Publishing Workflows",
]

const interests = [
  { name: "Classic Car Restoration", icon: "🔧" },
  { name: "MotoGP and Endurance Racing", icon: "🏁" },
  { name: "Road Safety Advocacy", icon: "🛡️" },
  { name: "Chassis Tuning and Performance Builds", icon: "⚙️" },
  { name: "Writing About Things That Smell Like 10W-30 and Nostalgia", icon: "✍️" },
]

const values = [
  {
    title: "Readers First",
    description:
      "Every piece I write prioritizes audience understanding and engagement, making complex automotive topics accessible to enthusiasts and newcomers alike.",
  },
  {
    title: "Meticulous in My Craft",
    description:
      "Attention to detail in research, sourcing, and AP Style adherence ensures every article meets the highest professional standards.",
  },
  {
    title: "Curious & Resilient",
    description:
      "The investigative nature of automotive journalism requires adaptability to emerging technologies and persistent pursuit of the story.",
  },
  {
    title: "Delivering Impactful Content",
    description:
      "Focus on producing well-sourced, high-engagement stories that inform, educate, and inspire automotive communities.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2540] to-[#1a3a5c] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKLFJnA8-LSY7w-h-lwvhcjM1nNWsLUmwumQ&s?height=150&width=150"
              alt="Toribio Turcios"
              width={150}
              height={150}
              className="rounded-full mx-auto mb-8 border-4 border-[#635BFF]"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Toribio Turcios</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Freelance automotive writer with over three years of experience crafting technical precision with
              editorial voice, writing with enthusiasts, tinkerers, and first-time buyers in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <div className="flex items-center text-blue-100">
                <MapPin className="h-5 w-5 mr-2" />
                Flowery Branch, GA
              </div>
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

      {/* Philosophy & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">
                My Approach to Automotive Journalism
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Blending technical precision with editorial voice, I create content that resonates with diverse
                automotive audiences while maintaining the highest standards of accuracy and engagement.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-[#0A2540] mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-[#F6F9FC]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">Professional Journey</h2>
              <p className="text-lg text-gray-600">
                A timeline of my growth in automotive journalism and technical writing.
              </p>
            </div>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <Card key={index} className="border-l-4 border-l-[#635BFF] shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-[#0A2540]">{job.title}</h3>
                      <div className="flex items-center text-[#635BFF] font-medium">
                        <Calendar className="h-4 w-4 mr-2" />
                        {job.period}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                    <div className="space-y-2">
                      {job.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-[#635BFF] rounded-full mr-3 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Education */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Skills */}
              <div>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Skills & Expertise</h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-[#635BFF]/10 text-[#635BFF] hover:bg-[#635BFF] hover:text-white transition-colors px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Education</h2>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <GraduationCap className="h-6 w-6 text-[#635BFF] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-[#0A2540]">Associate of Applied Science</h3>
                        <p className="text-gray-600">Automotive Technology</p>
                        <p className="text-sm text-gray-500">Lanier Technical College • Graduated 2018</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20 bg-[#F6F9FC]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-6">Beyond the Keyboard</h2>
            <p className="text-lg text-gray-600 mb-12">
              My passion for automotive culture extends far beyond writing, fueling authentic perspectives in every
              story.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {interests.map((interest, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-3">{interest.icon}</div>
                    <h3 className="font-semibold text-[#0A2540]">{interest.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#0A2540] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Create Something Great Together</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Ready to bring technical precision and engaging storytelling to your automotive content?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#635BFF] hover:bg-[#5A52E8] text-white px-8 py-3">
              <Link href="/contact">
                Start a Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[#0A2540] px-8 py-3 bg-transparent"
            >
              <Link href="/portfolio">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
