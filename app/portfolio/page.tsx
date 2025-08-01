import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "The Future of Electric Vehicle Charging Infrastructure",
    publication: "MotorGear Weekly",
    image: "https://www.shutterstock.com/image-vector/ev-charge-station-electric-car-260nw-2399501241.jpg?height=300&width=500",
    excerpt: "Exploring the rapid evolution of EV charging networks and their impact on automotive adoption.",
    category: "EV Tech",
    date: "March 2024",
  },
  {
    id: 2,
    title: "Restoring a 1967 Mustang Fastback: A Technical Deep Dive",
    publication: "Classic Car Enthusiast",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkGl9WUnnoc-G4LQ06NYgnrP3F98RTqrGbw&s?height=300&width=500",
    excerpt:
      "A comprehensive look at the challenges and rewards of bringing a classic American muscle car back to life.",
    category: "Classic Cars",
    date: "February 2024",
  },
  {
    id: 3,
    title: "MotoGP Technology: How Racing Innovations Reach Your Garage",
    publication: "Racing Tech Today",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8aCIMYnWwl5Eik5XEmk7EMvs5I7dAVPkfw&s?height=300&width=500",
    excerpt: "Tracing the path from cutting-edge racing technology to everyday automotive applications.",
    category: "Motorsports",
    date: "January 2024",
  },
  
]

const categories = ["All", "EV Tech", "Classic Cars", "Motorsports", "How-to Guides", "Industry Trends"]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2540] to-[#1a3a5c] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio & Published Work</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A comprehensive collection of automotive journalism projects showcasing technical expertise, engaging
              storytelling, and diverse coverage across the automotive industry.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-600 font-medium">Filter by category:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={
                    category === "All"
                      ? "bg-[#635BFF] hover:bg-[#5A52E8]"
                      : "border-gray-300 hover:border-[#635BFF] hover:text-[#635BFF]"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card
                key={article.id}
                className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#635BFF] text-white">{article.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <span className="text-[#635BFF] font-medium">For {article.publication}</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A2540] mb-3 group-hover:text-[#635BFF] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{article.excerpt}</p>
                  <Button asChild variant="ghost" className="text-[#635BFF] hover:text-[#5A52E8] p-0">
                    <Link href={`/articles/${article.id}`}>
                      Read Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4">By the Numbers</h2>
              <p className="text-lg text-gray-600">A snapshot of my automotive journalism impact and reach.</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#635BFF] mb-2">150+</div>
                <div className="text-gray-600">Articles Published</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#635BFF] mb-2">12+</div>
                <div className="text-gray-600">Publications</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#635BFF] mb-2">500K+</div>
                <div className="text-gray-600">Total Readership</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#635BFF] mb-2">3+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#0A2540] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Collaborate?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how my automotive journalism expertise can help tell your story and engage your audience.
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
              <Link href="/about">Learn About My Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
