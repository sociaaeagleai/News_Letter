"use client"

import { useEffect } from "react"

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="mb-4">
          Your privacy is important to us. This Privacy Policy explains how SocialEagle.ai collects, uses, and protects
          your personal information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Email Address:</strong> We collect your email address when you subscribe to our newsletter.
          </li>
          <li>
            <strong>Usage Data:</strong> We may collect information about how you use our website, such as pages visited
            and time spent on our site.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="mb-4">We use the information we collect to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Send you our AI newsletter with expert prompts, the latest models, and automation breakthroughs.</li>
          <li>Improve our website and services based on usage data.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p className="mb-4">
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or
          content of those websites.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
          policy on our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:upskill@socialeagle.ai">upskill@socialeagle.ai</a>.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
