import Image from "next/image"
import Link from "next/link"
import { Calendar, MessageCircle, Users, Award } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CommunityPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Virtual Networking Mixer",
      date: "June 15, 2023",
      time: "7:00 PM - 8:30 PM EST",
      type: "Virtual",
      description:
        "Connect with other members in a casual online setting. Perfect for making new connections and sharing experiences.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "Workshop: Negotiation Skills for Women",
      date: "June 22, 2023",
      time: "1:00 PM - 3:00 PM EST",
      type: "Virtual",
      description:
        "Learn effective negotiation techniques specifically tailored to help women overcome common challenges in professional settings.",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "New York City Meetup",
      date: "July 8, 2023",
      time: "6:00 PM - 9:00 PM EST",
      type: "In-Person",
      description:
        "Join us for our monthly in-person gathering in NYC. Network, share stories, and build meaningful connections.",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const discussionTopics = [
    {
      id: 1,
      title: "Overcoming Imposter Syndrome",
      category: "Personal Development",
      replies: 42,
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      title: "Balancing Career and Family",
      category: "Lifestyle",
      replies: 38,
      lastActive: "5 hours ago",
    },
    {
      id: 3,
      title: "Salary Negotiation Strategies",
      category: "Career",
      replies: 56,
      lastActive: "1 day ago",
    },
    {
      id: 4,
      title: "Building a Support Network",
      category: "Community",
      replies: 29,
      lastActive: "2 days ago",
    },
    {
      id: 5,
      title: "Women in Tech: Challenges and Opportunities",
      category: "Career",
      replies: 64,
      lastActive: "3 days ago",
    },
  ]

  const successStories = [
    {
      id: 1,
      name: "Sophia Rodriguez",
      title: "From Corporate Burnout to Thriving Entrepreneur",
      description:
        "After 10 years in corporate finance, I was burnt out and unfulfilled. The Abbakka Brigade community gave me the support and resources I needed to start my own consulting business. Now I'm making more money and have control over my schedule.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 2,
      name: "Leila Washington",
      title: "Finding My Voice and Leadership Potential",
      description:
        "I always struggled with speaking up in meetings and taking credit for my work. Through the mentorship program and workshops, I've developed the confidence to lead projects and recently received a promotion to senior manager.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      id: 3,
      name: "Mei Lin",
      title: "Career Pivot Success Story",
      description:
        "After 15 years in healthcare administration, I wanted to transition to tech but didn't know where to start. The resources and network I found through Abbakka Brigade helped me land a product management role at a health tech startup.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#c53a1a] to-[#c53a1a]/80 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Join Our Community of Empowered Women
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  Connect with like-minded women, share experiences, and grow together in a supportive and inclusive
                  environment.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-[#f3db03] text-[#c53a1a] hover:bg-[#f3db03]/90">
                  <Link href="#join-form">Join Now</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link href="#events">Explore Events</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] lg:h-full">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Women in a community gathering"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <Card className="bg-[#f3db03]/10 border-[#f3db03]/20">
              <CardHeader className="pb-2">
                <Users className="h-6 w-6 text-[#c53a1a]" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#c53a1a]">5,000+</div>
                <p className="text-[#c53a1a]">Active Members</p>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border-blue-100">
              <CardHeader className="pb-2">
                <Calendar className="h-6 w-6 text-blue-700" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-900">20+</div>
                <p className="text-blue-700">Monthly Events</p>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border-green-100">
              <CardHeader className="pb-2">
                <MessageCircle className="h-6 w-6 text-green-700" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-900">50+</div>
                <p className="text-green-700">Discussion Groups</p>
              </CardContent>
            </Card>
            <Card className="bg-[#f3db03]/10 border-[#f3db03]/20">
              <CardHeader className="pb-2">
                <Award className="h-6 w-6 text-[#c53a1a]" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#c53a1a]">100+</div>
                <p className="text-[#c53a1a]">Success Stories</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="events" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-[#c53a1a]">Upcoming Events</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Join us for virtual and in-person events designed to connect, inspire, and empower.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden flex flex-col">
                <div className="relative h-48 w-full">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge
                      className={`w-fit ${event.type === "Virtual" ? "bg-blue-100 text-blue-900" : "bg-green-100 text-green-900"}`}
                    >
                      {event.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription>
                    {event.date} • {event.time}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-[#c53a1a] hover:bg-[#c53a1a]/90">
                    <Link href="#">Register Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button asChild variant="outline" className="border-[#c53a1a] text-[#c53a1a] hover:bg-[#f3db03]/10">
              <Link href="#">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Discussion Forum */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f3db03]/10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-[#c53a1a]">Join the Conversation</h2>
            <p className="max-w-[700px] text-gray-600 md:text-lg">
              Our community forum is a safe space to ask questions, share experiences, and connect with others.
            </p>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Popular Discussion Topics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {discussionTopics.map((topic) => (
                  <div
                    key={topic.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <div className="space-y-1">
                      <Link href="#" className="text-lg font-medium text-[#c53a1a] hover:underline">
                        {topic.title}
                      </Link>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{topic.category}</Badge>
                        <span className="text-sm text-gray-500">{topic.replies} replies</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">Active {topic.lastActive}</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" className="border-[#c53a1a] text-[#c53a1a] hover:bg-[#f3db03]/10">
                <Link href="#">Browse All Topics</Link>
              </Button>
              <Button asChild className="bg-[#c53a1a] hover:bg-[#c53a1a]/90">
                <Link href="#">Start a Discussion</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tighter text-[#c53a1a]">Success Stories</h2>
            <p className="max-w-[700px] text-gray-500 md:text-lg">
              Real stories from women whose lives have been transformed through our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <Card key={story.id} className="overflow-hidden">
                <div className="relative h-64 w-full bg-gray-100">
                  <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{story.name}</CardTitle>
                  <CardDescription className="font-medium text-[#c53a1a]">{story.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{story.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="text-[#c53a1a] p-0">
                    <Link href="#">Read Full Story</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Form */}
      <section
        id="join-form"
        className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#c53a1a] to-[#c53a1a]/80 text-white"
      >
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Abbakka Brigade Today</h2>
              <p className="max-w-[600px] text-white/90 md:text-xl/relaxed">
                Become part of a community that's changing the narrative for women everywhere. Connect, learn, and grow
                with us.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Access to exclusive events and workshops</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Connect with mentors and peers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Resources for personal and professional growth</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-white" />
                  <span>Support from a community that understands your journey</span>
                </li>
              </ul>
            </div>
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-[#c53a1a]">Join Our Community</CardTitle>
                <CardDescription>Fill out the form below to get started</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        className="w-full rounded-md border border-gray-300 p-2 text-sm"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border border-gray-300 p-2 text-sm"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interests" className="text-sm font-medium">
                      What are you most interested in?
                    </label>
                    <select id="interests" className="w-full rounded-md border border-gray-300 p-2 text-sm">
                      <option value="">Select an option</option>
                      <option value="career">Career Development</option>
                      <option value="personal">Personal Growth</option>
                      <option value="networking">Networking</option>
                      <option value="entrepreneurship">Entrepreneurship</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="terms" className="text-sm text-gray-500">
                      I agree to the{" "}
                      <Link href="#" className="text-[#c53a1a] hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-[#c53a1a] hover:underline">
                        Privacy Policy
                      </Link>
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#c53a1a] hover:bg-[#c53a1a]/90">Join Now</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
