import type React from "react"
import Link from "next/link"
import { Menu, Search, User } from "lucide-react"
import { Inter } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import "./globals.css"
import { Suspense } from "react"
import ab_logo from "../public/ab-bengaluru.png";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Abbakka Brigade - Women's Empowerment Community",
  description: "A supportive community for women's personal development, career growth, and empowerment.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <MainNav />
                <div className="flex items-center space-x-4 ml-auto">
                  <form className="hidden md:flex items-center space-x-2">
                    <Search className="h-4 w-4 text-muted-foreground" />
                    <input
                      type="search"
                      placeholder="Search..."
                      className="rounded-md border border-input px-3 py-1 text-sm"
                    />
                  </form>
                  <nav className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="text-muted-foreground">
                      <User className="h-5 w-5" />
                      <span className="sr-only">Account</span>
                    </Button>
                    <MobileNav />
                  </nav>
                </div>
              </div>
            </header>
            <main className="flex-1">
              <Suspense>{children}</Suspense>
            </main>

            {/* This is footer webpage view and code*/}
            <footer className="border-t bg-muted/50">
              <div className ="container m-auto md:py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 padding_footer m-[30px]">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">About</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/about" className="text-sm text-muted-foreground hover:underline">
                          Our Mission
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-sm text-muted-foreground hover:underline">
                          Our Team
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-sm text-muted-foreground hover:underline">
                          Our Story
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-sm text-muted-foreground hover:underline">
                          Careers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Community</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/community" className="text-sm text-muted-foreground hover:underline">
                          Join Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/community" className="text-sm text-muted-foreground hover:underline">
                          Events
                        </Link>
                      </li>
                      <li>
                        <Link href="/community" className="text-sm text-muted-foreground hover:underline">
                          Forum
                        </Link>
                      </li>
                      <li>
                        <Link href="/community" className="text-sm text-muted-foreground hover:underline">
                          Success Stories
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Resources</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/resources" className="text-sm text-muted-foreground hover:underline">
                          Books
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources" className="text-sm text-muted-foreground hover:underline">
                          Podcasts
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources" className="text-sm text-muted-foreground hover:underline">
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="text-sm text-muted-foreground hover:underline">
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Connect</h3>
                    <ul className="space-y-2">
                      <li>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                          Newsletter
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                          Instagram
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                          LinkedIn
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Abbakka Brigade. All rights reserved.
                  </p>
                  <div className="flex space-x-4 mt-4 md:mt-0">
                    <Link href="#" className="text-sm text-muted-foreground hover:underline">
                      Privacy Policy
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:underline">
                      Terms of Service
                    </Link>
                    <Link href="#" className="text-sm text-muted-foreground hover:underline">
                      Cookie Policy
                    </Link>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        {/* <span className="font-bold text-xl inline-block">Abbakka Brigade</span> */}
        <img src= {ab_logo.src} alt = "AB_logo" className="w-[50px] h-[50px] ml-2"/> 
      </Link>
      <nav className="hidden md:flex gap-6 m-auto">
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          About
        </Link>
        <Link href="/blog" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
          Blog
        </Link>
        <Link
          href="/community"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Community
        </Link>
        <Link
          href="/resources"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Resources
        </Link>
      </nav>
    </div>
  )
}

function MobileNav() {
  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" className="text-muted-foreground" aria-label="Open Menu">
        <Menu className="h-5 w-5" />
      </Button>
      {/* Mobile menu would be implemented with state management in a real application */}
    </div>
  )
}
