import Image from "next/image"
import { Calendar, Clock, User, Tag, Share2 } from "lucide-react"

export default function PromptEngineeringArticle() {
  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4" />
              <span>Prompt Engineering</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>July 1, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Jordan Lee</span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-300 transition-colors">
            <Share2 className="h-5 w-5" />
          </button>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          Mastering Prompt Engineering in 2025
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          As AI gets smarter, the skill that sets you apart is how you ask. Learn advanced prompt engineering techniques
          that unlock powerful, consistent results.
        </p>

        <div className="aspect-video rounded-2xl overflow-hidden mb-8">
          <Image
            src="/images/prompt.png"
            alt="Prompt Engineering Mastery"
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="prose prose-invert prose-lg max-w-none">
        <h2 className="text-3xl font-bold text-white mb-6">Why Prompts Matter More Than Ever</h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          Large Language Models like GPT-4o and GPT-5 can tackle complex tasks — but only if you know how to steer them.
          The quality of your output depends on the quality of your input. Prompt engineering is the art and science of
          shaping that input to get reliable, accurate, and useful results.
        </p>

        <div className="border border-yellow-500/30 rounded-xl p-6 mb-8">
          <h3 className="text-xl font-bold text-yellow-400 mb-3">⚡ Pro Insight</h3>
          <p className="text-gray-300">
            Think of a prompt as a contract: the clearer you define the terms, the more predictable the output.
            Ambiguous prompts lead to generic or off-topic answers.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">Core Principles of Effective Prompting</h2>

        <h3 className="text-2xl font-bold text-purple-400 mb-4">Be Specific</h3>
        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
          Vague prompts waste time. Add context, constraints, and examples. Instead of *“Write a blog post about AI,”*
          say *“Write a 500-word blog post for tech founders about how AI writing assistants improve content speed.”*
        </p>

        <h3 className="text-2xl font-bold text-blue-400 mb-4">Use Roleplay & Instructions</h3>
        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
          Guide the AI’s behavior: *“You are a professional UX writer. Rewrite this onboarding message in a friendly,
          concise tone.”* This frames the response in the right voice and style.
        </p>

        <h3 className="text-2xl font-bold text-green-400 mb-4">Test & Refine</h3>
        <p className="text-gray-300 leading-relaxed mb-6 text-lg">
          Prompt engineering is iterative. Save your best prompts, experiment with variations, and keep a prompt
          library for different tasks.
        </p>

        <h2 className="text-3xl font-bold text-white mb-6">Framework for Prompt Crafting</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-xl p-6 border border-green-500/20 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">Step 1</div>
            <h4 className="text-lg font-bold text-white mb-2">Define the Goal</h4>
            <p className="text-gray-300 text-sm">Be crystal clear about the outcome you want.</p>
          </div>
          <div className="rounded-xl p-6 border border-blue-500/20 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">Step 2</div>
            <h4 className="text-lg font-bold text-white mb-2">Add Context</h4>
            <p className="text-gray-300 text-sm">Provide background, target audience, and style guidelines.</p>
          </div>
          <div className="rounded-xl p-6 border border-purple-500/20 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">Step 3</div>
            <h4 className="text-lg font-bold text-white mb-2">Refine Output</h4>
            <p className="text-gray-300 text-sm">Check output, tweak the prompt, and repeat if needed.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">Prompt Templates for 2025</h2>

        <div className="rounded-2xl p-8 mb-8 border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-4">Power Prompts to Steal</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li><strong>Rewrite:</strong> “Rewrite this paragraph in a more persuasive tone for B2B SaaS buyers.”</li>
            <li><strong>Summarize:</strong> “Summarize this 2-page PDF in bullet points for busy executives.”</li>
            <li><strong>Role:</strong> “Act as a hiring manager. Write 3 interview questions for a senior backend engineer.”</li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">Common Mistakes to Avoid</h2>

        <div className="space-y-4 mb-8">
          <div className="border border-red-500/30 rounded-xl p-6">
            <h4 className="text-lg font-bold text-red-400 mb-2">Too Broad</h4>
            <p className="text-gray-300 text-sm">
              General prompts lead to bland results. Add details to steer the output.
            </p>
          </div>
          <div className="border border-red-500/30 rounded-xl p-6">
            <h4 className="text-lg font-bold text-red-400 mb-2">No Examples</h4>
            <p className="text-gray-300 text-sm">
              Good prompts show examples. Without them, you’ll spend more time editing.
            </p>
          </div>
          <div className="border border-red-500/30 rounded-xl p-6">
            <h4 className="text-lg font-bold text-red-400 mb-2">One & Done</h4>
            <p className="text-gray-300 text-sm">
              Stop settling for the first output. Tweak, test, and get it right.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6">The Future of Prompt Engineering</h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          As AI models evolve, so will the prompts that unlock their power. Expect prompt marketplaces, reusable
          frameworks, and embedded tools that auto-generate prompts for you. But your edge will always be understanding
          how to ask the right questions.
        </p>

        <div className="rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Next Steps</h3>
          <p className="text-gray-300 leading-relaxed">
            Start your own prompt library today. Save your best, iterate, and share with your team. Mastering prompts is
            how you’ll stay ahead as AI keeps getting smarter.
          </p>
        </div>
      </div>

      <div className="mt-16 p-8 rounded-2xl border border-purple-500/30 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Join the Prompt Mastery Club</h3>
        <p className="text-gray-300 mb-6">
          Get advanced prompt templates, examples, and updates delivered straight to your inbox.
        </p>
        <a
          href="/#subscribe"
          className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold rounded-full hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105"
        >
          Subscribe Now
        </a>
      </div>
    </article>
  )
}
