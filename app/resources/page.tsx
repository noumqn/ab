import Image from "next/image"
import Link from "next/link"
import { Book, Headphones, Video, FileText, Download, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ResourcesPage() {
  const books = [
    {
      id: 1,
      title: "Lean In: Women, Work, and the Will to Lead",
      author: "Sheryl Sandberg",
      description:
        "Sheryl Sandberg examines why women's progress in achieving leadership roles has stalled, explains the root causes, and offers solutions to empower women to achieve their full potential.",
      image: "/placeholder.svg?height=300&width=200",
      link: "#",
    },
    {
      id: 2,
      title: "Becoming",
      author: "Michelle Obama",
      description:
        "In her memoir, Michelle Obama chronicles the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work.",
      image: "/placeholder.svg?height=300&width=200",
      link: "#",
    },
    {
      id: 3,
      title: "Untamed",
      author: "Glennon Doyle",
      description:
        "In her most revealing and powerful memoir yet, Glennon Doyle explores the joy and peace we discover when we stop striving to meet others' expectations and start trusting the voice deep within us.",
      image: "/placeholder.svg?height=300&width=200",
      link: "#",
    },
    {
      id: 4,
      title: "Atomic Habits",
      author: "James Clear",
      description:
        "No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
      image: "/placeholder.svg?height=300&width=200",
      link: "#",
    },
  ]

  const podcasts = [
    {
      id: 1,
      title: "Women at Work",
      host: "Harvard Business Review",
      description:
        "Conversations about the workplace, and women's place in it. Hosted by Amy Bernstein, Amy Gallo, and Emily Caulfield.",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
    {
      id: 2,
      title: "The Marie Forleo Podcast",
      host: "Marie Forleo",
      description:
        "Marie Forleo shares actionable advice on how to create a business and life you love. Topics range from entrepreneurship and productivity to creativity and personal growth.",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
    {
      id: 3,
      title: "Unlocking Us",
      host: "Brené Brown",
      description:
        "Conversations that unlock the deeply human part of who we are, so that we can live, love, parent, and lead with more courage and heart.",
      image: "/placeholder.svg?height=300&width=300",
      link: "#",
    },
  ]

  const courses = [
    {
      id: 1,
      title: "Negotiation Mastery for Women",
      provider: "Abbakka Brigade",
      description:
        "Learn effective negotiation techniques specifically tailored to help women overcome common challenges in professional settings.",
      duration: "4 weeks",
      level: "Intermediate",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      id: 2,
      title: "Personal Branding: Crafting Your Professional Identity",
      provider: "Abbakka Brigade",
      description:
        "Develop a strong personal brand that authentically represents who you are and helps you stand out in your field.",
      duration: "6 weeks",
      level: "Beginner",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
    {
      id: 3,
      title: "Financial Independence for Women",
      provider: "Abbakka Brigade",
      description:
        "Take control of your financial future with this comprehensive course on budgeting, investing, and building wealth.",
      duration: "8 weeks",
      level: "All Levels",
      image: "/placeholder.svg?height=200&width=400",
      link: "#",
    },
  ]

  const tools = [
    {
      id: 1,
      title: "Career Planning Workbook",
      description:
        "A comprehensive workbook to help you map out your career goals and create an actionable plan to achieve them.",
      type: "PDF",
      icon: <FileText className="h-10 w-10 text-purple-700" />,
      link: "#",
    },
    {
      id: 2,
      title: "Salary Negotiation Script Templates",
      description: "Ready-to-use templates to help you prepare for salary negotiations and ask for what you're worth.",
      type: "PDF",
      icon: <FileText className="h-10 w-10 text-purple-700" />,
      link: "#",
    },
    {
      id: 3,
      title: "Personal Development Tracker",
      description: "A tool to track your personal and professional growth goals and celebrate your progress.",
      type: "Spreadsheet",
      icon: <FileText className="h-10 w-10 text-purple-700" />,
      link: "#",
    },
    {
      id: 4,
      title: "Networking Conversation Starters",
      description: "A guide with conversation starters and follow-up questions to help you network with confidence.",
      type: "PDF",
      icon: <FileText className="h-10 w-10 text-purple-700" />,
      link: "#",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#c53a1a] to-[#c53a1a]/80 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Resources for Growth</h1>
            <p className="max-w-[700px] text-white/90 md:text-xl">
              Curated books, courses, podcasts, and tools to support your personal and professional journey.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="books" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="books" className="flex items-center gap-2">
                <Book className="h-4 w-4" />
                Books
              </TabsTrigger>
              <TabsTrigger value="podcasts" className="flex items-center gap-2">
                <Headphones className="h-4 w-4" />
                Podcasts
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <Video className="h-4 w-4" />
                Courses
              </TabsTrigger>
              <TabsTrigger value="tools" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Tools
              </TabsTrigger>
            </TabsList>

            {/*  />
                Tools
              </TabsTrigger>
            </TabsList>
            
            {/* Books Tab */}
            <TabsContent value="books" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {books.map((book) => (
                  <Card key={book.id} className="overflow-hidden flex flex-col">
                    <div className="relative h-64 w-full flex justify-center p-4 bg-gray-50">
                      <Image
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        width={150}
                        height={225}
                        className="object-contain"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{book.title}</CardTitle>
                      <CardDescription>By {book.author}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600 line-clamp-4">{book.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#c53a1a] text-[#c53a1a] hover:bg-[#f3db03]/10"
                      >
                        <Link href={book.link} className="flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Find Book
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild variant="outline" className="border-[#c53a1a] text-[#c53a1a] hover:bg-[#f3db03]/10">
                  <Link href="#">View All Recommended Books</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Podcasts Tab */}
            <TabsContent value="podcasts" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {podcasts.map((podcast) => (
                  <Card key={podcast.id} className="overflow-hidden flex flex-col">
                    <div className="relative h-64 w-full bg-gray-100">
                      <Image
                        src={podcast.image || "/placeholder.svg"}
                        alt={podcast.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl">{podcast.title}</CardTitle>
                      <CardDescription>Hosted by {podcast.host}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600">{podcast.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-[#c53a1a] hover:bg-[#c53a1a]/90">
                        <Link href={podcast.link} className="flex items-center gap-2">
                          <Headphones className="h-4 w-4" />
                          Listen Now
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild variant="outline" className="border-[#c53a1a] text-[#c53a1a] hover:bg-[#f3db03]/10">
                  <Link href="#">View All Recommended Podcasts</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden flex flex-col">
                    <div className="relative h-48 w-full">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge className="w-fit bg-purple-100 text-purple-900 hover:bg-purple-100/80">
                          {course.level}
                        </Badge>
                        <span className="text-sm text-gray-500">{course.duration}</span>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription>By {course.provider}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-600">{course.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-[#c53a1a] hover:bg-[#c53a1a]/90">
                        <Link href={course.link}>Enroll Now</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild variant="outline" className="border-[#c53a1a] text-[#c53a1a] hover:bg-[#f3db03]/10">
                  <Link href="#">View All Courses</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Tools Tab */}
            <TabsContent value="tools" className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tools.map((tool) => (
                  <Card key={tool.id} className="overflow-hidden flex flex-col">
                    <CardHeader className="flex flex-col items-center text-center">
                      {tool.icon}
                      <CardTitle className="mt-4 text-xl">{tool.title}</CardTitle>
                      <Badge className="mt-2">{tool.type}</Badge>
                    </CardHeader>
                    <CardContent className="flex-grow text-center">
                      <p className="text-gray-600">{tool.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full bg-[#c53a1a] hover:bg-[#c53a1a]/90">
                        <Link href={tool.link} className="flex items-center gap-2 justify-center">
                          <Download className="h-4 w-4" />
                          Download
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild variant="outline" className="border-[#c53a1a] text-[#c53a1a] hover:bg-[#f3db03]/10">
                  <Link href="#">View All Tools</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Resource Request */}
      <section className="w-full py-12 md:py-24 bg-[#f3db03]/10">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter text-[#c53a1a] md:text-3xl">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-gray-600 md:text-lg">
                Let us know what resources would be most helpful for your journey, and we'll do our best to add them to
                our collection.
              </p>
            </div>
            <div className="w-full max-w-md space-y-2 mx-auto lg:mx-0 lg:ml-auto">
              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm"
                />
                <textarea
                  placeholder="What resource would you like to see added?"
                  className="w-full rounded-md border border-gray-300 p-2 text-sm min-h-[100px]"
                />
                <Button type="submit" className="bg-[#c53a1a] hover:bg-[#c53a1a]/90">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Member Exclusive */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#c53a1a] to-[#c53a1a]/80 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Exclusive Resources for Members</h2>
              <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                Join Abbakka Brigade to access our full library of premium resources, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Masterclass recordings from industry experts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Exclusive e-books and workbooks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Member-only courses and workshops</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Personalized resource recommendations</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-end">
              <Button asChild size="lg" className="bg-[#f3db03] text-[#c53a1a] hover:bg-[#f3db03]/90">
                <Link href="/community">Join Now</Link>
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
