"use client"

import { useEffect } from "react"

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>

        <p className="mb-4">
          Welcome to SocialEagle.ai! By accessing or using our website, you agree to comply with these Terms of Use.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Use of Content</h2>
        <p className="mb-4">
          All content provided on SocialEagle.ai is for informational purposes only. You may not reproduce, distribute,
          or commercially exploit our content without our prior written permission.
        </p>

        <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
        <p className="mb-4">
          You agree not to use our website for any unlawful purpose or in any way that could harm, disrupt, or impair
          our services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
        <p className="mb-4">
          The information provided on SocialEagle.ai is not intended as professional advice. We make no warranties about
          the accuracy or completeness of our content.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p className="mb-4">
          SocialEagle.ai is not liable for any direct, indirect, incidental, or consequential damages arising from your
          use of our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Changes to These Terms</h2>
        <p className="mb-4">
          We may update these Terms of Use from time to time. We will notify you of any changes by posting the new terms
          on our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <p>
          If you have any questions about these Terms of Use, please contact us at{" "}
          <a href="mailto:upskill@socialeagle.ai">upskill@socialeagle.ai</a>.
        </p>
      </div>
    </div>
  )
}

export default TermsOfUse
