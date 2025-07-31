import { Button } from "@/components/ui/button"
import { Mail, MapPin, Download } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "Long-form Features", href: "/portfolio" },
    { name: "Vehicle Reviews", href: "/portfolio" },
    { name: "Industry Analysis", href: "/portfolio" },
    { name: "Classic Cars", href: "/portfolio" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#635BFF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TT</span>
              </div>
              <span className="font-bold text-white text-lg">Toribio Turcios</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-md leading-relaxed">
              Freelance automotive journalist specializing in technical precision and engaging storytelling. From EV
              innovations to classic car restoration, I bring passion and expertise to every story.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-blue-100">
                <Mail className="h-4 w-4 mr-3" />
                <a href="mailto:toribioturcios506@gmail.com" className="hover:text-white transition-colors">
                  toribioturcios506@gmail.com
                </a>
              </div>
              <div className="flex items-center text-blue-100">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Flowery Branch, GA</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-blue-100 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Specialties</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-blue-100 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-blue-100 hover:text-white hover:bg-white/10 p-0"
              >
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 text-sm">© {new Date().getFullYear()} Toribio Turcios. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-blue-100 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-100 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
