"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ArrowRight, Sparkles, Zap, TrendingUp, Instagram, MessageCircle, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { motion } from "framer-motion"
import { SubscriptionModal } from "@/components/subscription-modal"

const articles = [
  {
    id: 1,
    slug: "gpt5-breakthrough-developers",
    image: "/images/Automation.jpg",
    headline: "Next-Level AI Writing Assistants to Supercharge Your Content in 2025",
    teaser:
      "Discover the smartest AI writing tools that help you draft, edit, and publish content faster than ever — without losing your unique voice.",
    readTime: "5 min read",
    category: "AI Writing",
  },
{
  id: 2,
  slug: "master-prompt-engineering",
  image: "/images/prompt.jpg",
  headline: "Master Prompt Engineering in 10 Minutes",
  teaser: "Learn the essential techniques that separate amateur prompts from professional-grade AI interactions.",
  readTime: "10 min read",
  category: "Tutorials",
},
  {
    id: 3,
    slug: "ai-automation-tools-productivity",
    image: "/images/thumb.jpg",
    headline: "AI Automation Tools That Actually Save Time",
    teaser: "Cut through the hype and discover the automation tools that deliver real productivity gains.",
    readTime: "7 min read",
    category: "Tools",
  }
]

const trustedBy = [
  {
    id: 1,
    name: "Ananya Sri",
    designation: "",
    image: "/images/Avatar4.png",
  },
  {
    id: 2,
    name: "Pranav",
    designation: "",
    image: "/images/avatar1.png",
  },
  {
    id: 3,
    name: " Rajesh Kumar",
    designation: "",
    image: "/images/Avatar2.png",
  },
  {
    id: 5,
    name: "Kavya",
    designation: "",
    image: "/images/avatar3.png",
  },
  {
    id: 6,
    name: "",
    designation: "",
    image: "/images/Avatar5.png",
  },
]

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered Insights",
    description: "Get cutting-edge AI analysis and trends before they go mainstream",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Weekly Updates",
    description: "Discover tools and techniques that save hours every week",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Expert Strategies",
    description: "Learn from industry leaders building the future of AI",
  },
]

export default function AINewsletterLanding() {
  const [email, setEmail] = useState("")
  const [showMore, setShowMore] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    console.log("Subscribing email:", email)
  }

  const visibleArticles = showMore ? articles : articles.slice(0, 3)

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0 opacity-8"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-4">
          {/* Logo with 3D Background */}
          <motion.div
            className="text-center mb-1 mt-8 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Logo */}
            <div className="relative z-10 inline-block">
              <motion.div whileHover={{ scale: 1.05, rotate: 5 }} transition={{ duration: 0.3 }}>
                <Image
                  src="/images/socialeagle-logo.png"
                  alt="SocialEagle.AI"
                  width={220}
                  height={220}
                  className="mx-auto drop-shadow-2xl"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full blur-2xl -z-10 animate-pulse" />
            </div>
          </motion.div>

          {/* Hero Section */}
          <div className="text-center max-w-6xl mx-auto mb-20 relative">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              >
                <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight relative">
                  Stay Ahead with the AI Edge
                  <motion.span
                    className="absolute -top-4 -right-4 text-2xl"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    ✨
                  </motion.span>
                </h1>
              </motion.div>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.4, delay: 0.5 }}
              >
                Get expert prompts, the latest models, and automation breakthroughs simplified and delivered weekly.
              </motion.p>

              {/* Feature Pills */}
              <motion.div
                className="flex flex-wrap justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: 0.7 }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 text-sm"
                    whileHover={{ scale: 1.05, borderColor: "#8b5cf6" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-purple-400">{feature.icon}</span>
                    <span className="text-gray-300">{feature.title}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-4 max-w-lg mx-auto mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.8, delay: 0.9 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setShowSubscriptionModal(true)}
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold px-8 h-14 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 relative overflow-hidden"
                  >
                    <span className="relative z-10">Stay Updated With Us</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
              </motion.form>

              {/* Trusted By Section */}
              <motion.div
                className="max-w-4xl mx-auto mb-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 1.1 }}
              >
                {/* ✅ Avatars on top */}
                <div className="flex justify-center mb-4">
                  <AnimatedTooltip items={trustedBy} className="flex-wrap justify-center" />
                </div>

                {/* ✅ Text + lines below */}
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
                  <p className="text-gray-400 text-sm font-medium px-4">Trusted by 30,000+ AI Enthusiast</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent flex-1 max-w-32"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Featured Articles */}
          <motion.div
            className="max-w-6xl mx-auto mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Featured Articles
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Dive deep into the latest AI trends, tools, and techniques that are shaping the future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {visibleArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  className="group bg-gray-900/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="aspect-video overflow-hidden relative">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.headline}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300 line-clamp-2">
                      {article.headline}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4 line-clamp-3">{article.teaser}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">by SocialEagle.ai</span>
                      <Link href={`/articles/${article.slug}`}>
                        <Button
                          variant="ghost"
                          className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 p-0 h-auto font-medium group/btn"
                        >
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {!showMore && (
              <div className="text-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={() => setShowMore(true)}
                    variant="outline"
                    className="bg-transparent border-purple-500/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-3 rounded-full transition-all duration-300 group"
                  >
                    View More Articles
                    <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="bg-black text-white py-16 border-t border-gray-800 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center md:text-left">
                  <Image
                    src="/images/socialeagle-logo.png"
                    alt="SocialEagle.AI"
                    width={80}
                    height={80}
                    className="mx-auto md:mx-0 mb-4"
                  />
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Empowering India's GenAI builders with cutting-edge insights and automation strategies.
                  </p>
                </div>

                <div className="text-center md:text-left">
                  <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                  <div className="space-y-3">
                    <Link href="/privacy" className="block text-gray-400 hover:text-white transition-colors text-sm">
                      Privacy Policy
                    </Link>
                    <Link href="/terms" className="block text-gray-400 hover:text-white transition-colors text-sm">
                      Terms of Use
                    </Link>
                  </div>

                  {/* Social Media Links */}
                  <div className="mt-6">
                    <h5 className="text-white font-semibold mb-4">Follow Us</h5>
                    <div className="flex justify-center md:justify-start gap-4">
                      <motion.a
                        href="https://www.instagram.com/socialeagle.ai?igsh=dDN1a2toaTcxYmRw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 border border-gray-700 hover:bg-pink-600 hover:border-pink-600 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Instagram className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href="https://wa.me/918428428800"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 border border-gray-700 hover:bg-green-600 hover:border-green-600 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <MessageCircle className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href="https://www.linkedin.com/company/social-eagle-ai/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-800 border border-gray-700 hover:bg-blue-600 hover:border-blue-600 text-gray-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        >
                      <Linkedin className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Contact Info - Better Alignment */}
                <div className="md:col-span-2 text-center md:text-left">
                  <h4 className="text-white font-semibold mb-6">Contact Info</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-gray-400 text-sm mb-3">
                        <span className="font-semibold text-white block mb-1">Phone & WhatsApp:</span>
                        +91 842 842 8800
                      </p>
                      <p className="text-gray-400 text-sm">
                        <span className="font-semibold text-white block mb-1">Email:</span>
                        upskill@socialeagle.ai
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">
                        <span className="font-semibold text-white block mb-1">Address:</span>
                        Social Eagle Academy
                        <br />
                        No. 14-16, Global Hospital Road Junction,
                        <br />
                        Indira Priyadarshini Nagar,
                        <br />
                        Opp. ICICI Bank, Perumbakkam,
                        <br />
                        Chennai, Tamil Nadu 600100
                        <br />
                        <span className="text-purple-400 font-medium">Virtual programs worldwide</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-8 text-center">
                <p className="text-gray-400 text-sm">© 2025 SocialEagle.ai — Built for India's GenAI Builders.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <SubscriptionModal open={showSubscriptionModal} onOpenChange={setShowSubscriptionModal} />
    </div>
  )
}
