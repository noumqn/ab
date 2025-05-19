import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#c53a1a] to-[#c53a1a]/80 text-white">
        <div className="container px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Abbakka Brigade</h1>
            <p className="max-w-[700px] text-white/90 md:text-xl">
            Abbakka Brigade was born out of a desire to foster a strong, supportive space for the women of Bengaluru—a community where women can uplift one another and build lasting connections.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 m-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Women in a collaborative workshop setting"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-[#c53a1a]">Our Mission</h2>
              <p className="text-gray-500 md:text-lg">
              To create a powerful community of women supporting women in Karnataka, inspired by the legendary Queen Abbakka's
              courage and resilience. We provide a safe, empowering space where women can connect, 
              learn, and stand together against any challenge.
              </p>
              <p className="text-gray-500 md:text-lg">Our community focuses on four key pillars:</p>
              <ul className="space-y-2 text-gray-500 md:text-lg">
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-[#c53a1a] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#c53a1a]">Safety & Support:</strong> Offering immediate assistance during emergencies, 
                    safe housing options, and unwavering solidarity when you need it most.
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-[#c53a1a] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#c53a1a]">Legal Empowerment :</strong>  Equipping women with knowledge of their rights 
                    through workshops on BNS, BSS, POSH, and providing assistance with legal processes.
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-[#c53a1a] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#c53a1a]">Skill Development:</strong> Creating opportunities for personal and professional 
                    growth through awareness workshops about government schemes, entrepreneurship support, and networking.
                  </span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="mr-2 h-5 w-5 text-[#c53a1a] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#c53a1a]">Community Building:</strong> Fostering meaningful connections through 
                    regular gatherings, creating a trusted circle of strong, like-minded women who uplift each other.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f3db03]/10">
        <div className="container px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-[#c53a1a]">Our Story</h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              The journey of Abbakka Brigade began with a simple idea and a powerful vision.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr] lg:gap-12 items-center">
            <div className="space-y-4">
              <p className="text-gray-600 md:text-lg">
                Inspired by the legendary Queen Abbakka Chowta of Ullal, a trailblazing leader who fiercely defended Coastal Karnataka against invaders while ruling a prosperous kingdom, we seek to channel her spirit of resilience, courage, and unity. Her legacy runs deep in Karnataka's history, and we draw from her indomitable strength in everything we do.
              </p>
              <p className="text-gray-600 md:text-lg">
                In the same spirit, Abbakka Brigade is led by women who embody Queen Abbakka’s boldness, dedication, and passion for making a difference. Our leadership ensures the group reaches its milestones while staying true to our mission: building a safe, empowering environment for women who want to give back to society.
              </p>
              <p className="text-gray-600 md:text-lg">
                To uphold the safety and trust within our community, every member is carefully verified before joining. This ensures your personal information, conversations, and contributions stay secure within our circle of strong, like-minded women.
              </p>
              <p className="text-gray-600 md:text-lg">
                As part of Abbakka Brigade, you’ll have the chance to engage in regular online and offline events that connect, inspire, and empower. And if you ever find yourself in a challenging situation—whether it’s in Bengaluru or elsewhere in Karnataka—Abbakka Brigade has your back. Just reach out, and your community of sisters will be there to support you.
              </p>
            </div>
            <div className="relative h-[300px] sm:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Founder Priya Sharma speaking at an event"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-[#c53a1a]">Meet the Team</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              The passionate individuals behind Abbakka Brigade who work tirelessly to support our community.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Priya Sharma",
                role: "Founder & CEO",
                bio: "Former corporate executive with a passion for women's empowerment and community building.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Aisha Johnson",
                role: "Community Director",
                bio: "Community building expert with 10+ years experience in creating inclusive spaces for growth.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Maya Patel",
                role: "Content & Education Lead",
                bio: "Educator and writer dedicated to creating accessible learning resources for women.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Sarah Chen",
                role: "Partnerships & Outreach",
                bio: "Relationship builder connecting Abbakka Brigade with organizations that share our mission.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64 w-full bg-gray-100">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-[#c53a1a]">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#c53a1a] to-[#c53a1a]/80 text-white">
        <div className="container px-4 md:px-6 m-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Be Part of Our Story</h2>
              <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                Join Abbakka Brigade today and become part of a community that's changing the narrative for women
                everywhere.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
              <Button asChild size="lg" className="bg-[#f3db03] text-[#c53a1a] hover:bg-[#f3db03]/90">
                <Link href="/community">
                  Join Our Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
