import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Steps to Building Your Personal Brand",
      category: "Career",
      date: "May 15, 2023",
      author: "Priya Sharma",
      description:
        "Learn how to establish a strong personal brand that opens doors to new opportunities and helps you stand out in your field.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Finding Balance: Work, Life, and Everything in Between",
      category: "Lifestyle",
      date: "June 2, 2023",
      author: "Aisha Johnson",
      description:
        "Practical strategies for maintaining balance in a busy, demanding world without sacrificing your wellbeing or goals.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "The Power of Community in Personal Growth",
      category: "Personal Development",
      date: "June 18, 2023",
      author: "Maya Patel",
      description:
        "How connecting with others can accelerate your journey to becoming your best self and overcome challenges.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Financial Independence: A Woman's Guide to Investing",
      category: "Finance",
      date: "July 5, 2023",
      author: "Sarah Chen",
      description:
        "Breaking down the basics of investing and building wealth, specifically addressing the unique challenges women face.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Navigating Career Transitions with Confidence",
      category: "Career",
      date: "July 22, 2023",
      author: "Priya Sharma",
      description:
        "Strategies for successfully changing careers or roles, from assessing your skills to negotiating your new position.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Self-Care Isn't Selfish: Prioritizing Your Wellbeing",
      category: "Health",
      date: "August 10, 2023",
      author: "Aisha Johnson",
      description:
        "Why self-care is essential for sustainable success and how to incorporate it into your daily routine.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#c53a1a] to-[#c53a1a]/80 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">The Abbakka Brigade Blog</h1>
            <p className="max-w-[700px] text-white/90 md:text-xl">
              Insights, advice, and stories to inspire your personal and professional journey.
            </p>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex w-full max-w-sm items-center space-x-2">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button type="submit" variant="secondary" size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="career">Career</TabsTrigger>
              <TabsTrigger value="personal">Personal Development</TabsTrigger>
              <TabsTrigger value="health">Health</TabsTrigger>
              <TabsTrigger value="lifestyle">Lifestyle</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className="w-fit bg-[#f3db03]/20 text-[#c53a1a] hover:bg-[#f3db03]/30">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{post.date}</span>
                      </div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <CardDescription>By {post.author}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600">{post.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="link" className="text-[#c53a1a] p-0">
                        <Link href={`/blog/${post.id}`}>Read More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="career" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts
                  .filter((post) => post.category === "Career")
                  .map((post) => (
                    <Card key={post.id} className="overflow-hidden flex flex-col">
                      <div className="relative h-48 w-full">
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className="w-fit bg-[#f3db03]/20 text-[#c53a1a] hover:bg-[#f3db03]/30">
                            {post.category}
                          </Badge>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                        <CardTitle className="text-xl">{post.title}</CardTitle>
                        <CardDescription>By {post.author}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-gray-600">{post.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button asChild variant="link" className="text-[#c53a1a] p-0">
                          <Link href={`/blog/${post.id}`}>Read More</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>
            {/* Similar TabsContent for other categories */}
          </Tabs>

          <div className="flex justify-center mt-12">
            <Button variant="outline" className="border-[#c53a1a] text-[#c53a1a] hover:bg-purple-50">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="w-full py-12 md:py-24 bg-[#f3db03]/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter text-[#c53a1a] md:text-3xl">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-gray-600 md:text-lg">
                Get the latest articles, resources, and community updates delivered directly to your inbox.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2 mx-auto lg:mx-0 lg:ml-auto">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit" className="bg-[#c53a1a] hover:bg-[#c53a1a]/90">
                  Subscribe
                </Button>
              </form>
              <p className="text-xs text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
