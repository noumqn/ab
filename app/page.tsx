import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, ShoppingBag, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[#c53a1a] to-[#c53a1a]/80 text-white">
        <div className="container px-4 md:px-6 relative z-10 m-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="inline-flex bg-[#f3db03] text-[#c53a1a] hover:bg-[#f3db03]/90">
                  Join Our Community
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Empowering Women to Rise Together
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Abbakka Brigade is a supportive community dedicated to helping women achieve personal and professional
                  growth through connection, resources, and empowerment.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-[#f3db03] text-[#c53a1a] hover:bg-[#f3db03]/90">
                  <Link href="/community">
                    Join Our Community
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop"
                alt="Diverse group of women standing together in empowering poses"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#c53a1a]/80 to-transparent mix-blend-multiply" />
      </section>

      {/* Featured Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#c53a1a]">Featured Articles</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, advice, and stories to inspire your personal and professional journey.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "10 Steps to Building Your Personal Brand",
                category: "Career",
                description: "Learn how to establish a strong personal brand that opens doors to new opportunities.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "Finding Balance: Work, Life, and Everything in Between",
                category: "Lifestyle",
                description: "Practical strategies for maintaining balance in a busy, demanding world.",
                image: "/placeholder.svg?height=200&width=300",
              },
              {
                title: "The Power of Community in Personal Growth",
                category: "Personal Development",
                description: "How connecting with others can accelerate your journey to becoming your best self.",
                image: "/placeholder.svg?height=200&width=300",
              },
            ].map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <Badge className="w-fit bg-[#f3db03]/20 text-[#c53a1a] hover:bg-[#f3db03]/30">{post.category}</Badge>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{post.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="text-[#c53a1a] p-0">
                    <Link href="/blog">Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
              <Link href="/blog">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Highlights */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f3db03]/10">
        <div className="container px-4 md:px-6 m-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#c53a1a]">Community Highlights</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what's happening in our vibrant community of empowered women.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <Users className="h-8 w-8 text-[#c53a1a]" />
                <div>
                  <CardTitle>Active Members</CardTitle>
                  <CardDescription>5,000+ and growing</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Join thousands of women supporting each other through challenges and celebrating victories together.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-[#c53a1a] p-0">
                  <Link href="/community">Join Now</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <Calendar className="h-8 w-8 text-[#c53a1a]" />
                <div>
                  <CardTitle>Upcoming Events</CardTitle>
                  <CardDescription>Virtual & In-person</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Workshops, networking sessions, and speaker series designed to inspire and connect.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-[#c53a1a] p-0">
                  <Link href="/community">View Calendar</Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="bg-white">
              <CardHeader className="flex flex-row items-center gap-4">
                <ShoppingBag className="h-8 w-8 text-[#c53a1a]" />
                <div>
                  <CardTitle>Shop Impact</CardTitle>
                  <CardDescription>Support women entrepreneurs</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every purchase supports women-owned businesses and contributes to our community initiatives.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="text-[#c53a1a] p-0">
                  <Link href="/shop">Shop Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#c53a1a] to-[#c53a1a]/80 text-white">
        <div className="container px-4 md:px-6 m-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join the Abbakka Brigade Today</h2>
              <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                Connect with like-minded women, access exclusive resources, and be part of a movement that's changing
                lives.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
              <Button asChild size="lg" className="bg-[#f3db03] text-[#c53a1a] hover:bg-[#f3db03]/90">
                <Link href="/community">
                  Join Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
