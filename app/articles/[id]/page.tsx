import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, Building2, Target, Lightbulb, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Mock data - in a real app, this would come from a database or CMS
const articleData: { [key: string]: any } = {
  "1": {
    title: "The Future of Electric Vehicle Charging Infrastructure",
    publication: "MotorGear Weekly",
    date: "March 2024",
    category: "EV Tech",
    image: "/placeholder.svg?height=400&width=800",
    overview:
      "An in-depth analysis of the rapidly evolving EV charging landscape, examining current challenges, emerging technologies, and the infrastructure investments shaping the future of electric mobility.",
    challenge:
      "With EV adoption accelerating globally, the charging infrastructure has become a critical bottleneck. Range anxiety, charging speed limitations, and network reliability issues continue to hinder widespread EV acceptance.",
    role: "As a freelance automotive journalist, I conducted extensive research into charging technologies, interviewed industry executives, and analyzed market data to provide readers with a comprehensive understanding of this pivotal moment in automotive history.",
    approach: [
      "Researched emerging charging technologies including ultra-fast DC charging and wireless charging systems",
      "Conducted interviews with charging network operators, automakers, and infrastructure investors",
      "Analyzed government policy impacts on charging infrastructure development",
      "Tested various charging networks to provide first-hand user experience insights",
    ],
    keyInsights: [
      "Ultra-fast charging (350kW+) will reduce charging times to under 15 minutes for most EVs by 2025",
      "Wireless charging technology is moving from concept to commercial viability for both stationary and dynamic applications",
      "Government incentives are driving $50+ billion in charging infrastructure investments globally",
      "Standardization efforts are finally addressing the fragmented charging network landscape",
    ],
    visuals: [
      {
        src: "/placeholder.svg?height=300&width=600",
        caption: "Interactive map showing the growth of fast-charging networks across major highways",
      },
      {
        src: "/placeholder.svg?height=300&width=600",
        caption: "Comparison of charging speeds across different technologies and vehicle types",
      },
    ],
    results:
      "The article generated significant engagement, with over 15,000 views and 200+ social shares. It was referenced by industry analysts and helped establish MotorGear Weekly as a trusted source for EV infrastructure coverage.",
    liveUrl: "https://motorgearweekly.com/ev-charging-future",
    nextArticle: { id: "2", title: "Restoring a 1967 Mustang Fastback: A Technical Deep Dive" },
    prevArticle: { id: "9", title: "Autonomous Vehicle Sensors: The Eyes and Ears of Self-Driving Cars" },
  },
}

interface ArticlePageProps {
  params: {
    id: string
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articleData[params.id]

  if (!article) {
    return (
      <div className="min-h-screen bg-[#F6F9FC] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A2540] mb-4">Article Not Found</h1>
          <Button asChild>
            <Link href="/portfolio">Return to Portfolio</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button asChild variant="ghost" className="text-[#635BFF] hover:text-[#5A52E8]">
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="bg-[#635BFF] text-white mb-4">{article.category}</Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4 leading-tight">
                {article.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center">
                  <Building2 className="h-4 w-4 mr-2" />
                  <span className="font-medium text-[#635BFF]">For {article.publication}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {article.date}
                </div>
              </div>
            </div>
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              width={800}
              height={400}
              className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Overview */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Target className="h-6 w-6 text-[#635BFF] mr-3" />
                  <h2 className="text-2xl font-bold text-[#0A2540]">Project Overview</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{article.overview}</p>
              </CardContent>
            </Card>

            {/* Challenge */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed">{article.challenge}</p>
              </CardContent>
            </Card>

            {/* My Role */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A2540] mb-4">My Role</h2>
                <p className="text-gray-700 leading-relaxed">{article.role}</p>
              </CardContent>
            </Card>

            {/* Research & Approach */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-6 w-6 text-[#635BFF] mr-3" />
                  <h2 className="text-2xl font-bold text-[#0A2540]">Research & Approach</h2>
                </div>
                <ul className="space-y-3">
                  {article.approach.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#635BFF] rounded-full mr-4 mt-2 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Key Insights */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Key Insights & Content</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {article.keyInsights.map((insight: string, index: number) => (
                    <div key={index} className="bg-[#F6F9FC] p-6 rounded-lg">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-[#635BFF] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 leading-relaxed">{insight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Visual Showcase */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Visual Showcase</h2>
                <div className="space-y-8">
                  {article.visuals.map((visual: any, index: number) => (
                    <figure key={index} className="text-center">
                      <Image
                        src={visual.src || "/placeholder.svg"}
                        alt={visual.caption}
                        width={600}
                        height={300}
                        className="w-full h-64 object-cover rounded-lg shadow-md"
                      />
                      <figcaption className="text-gray-600 mt-3 italic">{visual.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[#635BFF] mr-3" />
                  <h2 className="text-2xl font-bold text-[#0A2540]">Results & Impact</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">{article.results}</p>
                <Button asChild className="bg-[#635BFF] hover:bg-[#5A52E8] text-white">
                  <Link href={article.liveUrl} target="_blank">
                    Read Full Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex flex-col md:flex-row justify-between gap-4 pt-8">
              {article.prevArticle && (
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-[#635BFF] text-[#635BFF] hover:bg-[#635BFF] hover:text-white bg-transparent"
                >
                  <Link href={`/articles/${article.prevArticle.id}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Previous: {article.prevArticle.title}
                  </Link>
                </Button>
              )}
              {article.nextArticle && (
                <Button
                  asChild
                  variant="outline"
                  className="flex-1 border-[#635BFF] text-[#635BFF] hover:bg-[#635BFF] hover:text-white bg-transparent"
                >
                  <Link href={`/articles/${article.nextArticle.id}`}>
                    Next: {article.nextArticle.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#0A2540] to-[#1a3a5c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Similar Content?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can create engaging, well-researched automotive content for your publication or brand.
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
              <Link href="/portfolio">View More Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
