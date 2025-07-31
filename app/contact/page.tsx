"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the form data to a server
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-[#F6F9FC]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0A2540] to-[#1a3a5c] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Drive Your Content Forward</h1>
            <p className="text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Ready to collaborate on your next automotive journalism project? Whether you need technical deep-dives,
              engaging features, or industry analysis, I'm here to help tell your story with precision and passion.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-6 w-6 text-[#635BFF] mr-3" />
                  <h2 className="text-2xl font-bold text-[#0A2540]">Send a Message</h2>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-[#0A2540] mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#0A2540] font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-[#635BFF] focus:ring-[#635BFF]"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#0A2540] font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-gray-300 focus:border-[#635BFF] focus:ring-[#635BFF]"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-[#0A2540] font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-gray-300 focus:border-[#635BFF] focus:ring-[#635BFF]"
                        placeholder="Project inquiry, collaboration, etc."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-[#0A2540] font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="border-gray-300 focus:border-[#635BFF] focus:ring-[#635BFF] resize-none"
                        placeholder="Tell me about your project, timeline, and how I can help..."
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-[#635BFF] hover:bg-[#5A52E8] text-white py-3">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Get in Touch</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-[#635BFF] mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-[#0A2540]">Email</p>
                        <a
                          href="mailto:toribioturcios506@gmail.com"
                          className="text-[#635BFF] hover:text-[#5A52E8] transition-colors"
                        >
                          toribioturcios506@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-[#635BFF] mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-[#0A2540]">Location</p>
                        <p className="text-gray-600">Flowery Branch, GA</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-[#635BFF] mr-4 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-[#0A2540]">Response Time</p>
                        <p className="text-gray-600">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-4">What I Can Help With</h3>
                  <ul className="space-y-3">
                    {[
                      "Long-form automotive features and investigations",
                      "Vehicle reviews and technical analysis",
                      "Industry trend reporting and analysis",
                      "Classic car and motorsports coverage",
                      "Technical writing and documentation",
                      "Content strategy for automotive brands",
                    ].map((service, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-[#635BFF] rounded-full mr-3 mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-[#635BFF] to-[#5A52E8] text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Current Availability</h3>
                  <p className="mb-4">
                    I'm currently accepting new projects for Q2 2024. Whether you need a single article or ongoing
                    content partnership, let's discuss how we can work together.
                  </p>
                  <div className="bg-white/20 rounded-lg p-4">
                    <p className="text-sm">
                      <strong>Typical turnaround:</strong> 3-7 days for standard articles, 1-2 weeks for in-depth
                      features
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Common questions about working together on automotive journalism projects.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  question: "What types of automotive content do you specialize in?",
                  answer:
                    "I cover the full spectrum of automotive topics, from technical deep-dives on EV technology to classic car restoration features, motorsports analysis, and industry trend reporting.",
                },
                {
                  question: "What's your typical turnaround time?",
                  answer:
                    "Standard articles typically take 3-7 days, while comprehensive features and investigations may require 1-2 weeks. Rush projects can often be accommodated with advance notice.",
                },
                {
                  question: "Do you provide images and multimedia?",
                  answer:
                    "Yes, I can source high-quality images, create technical diagrams, and coordinate multimedia elements as needed for your publication's requirements.",
                },
                {
                  question: "What's your rate structure?",
                  answer:
                    "I offer competitive rates based on project scope, complexity, and timeline. Contact me with your specific requirements for a detailed quote tailored to your needs and budget.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-[#0A2540] mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
