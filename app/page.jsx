import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="min-h-dvh bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover">
        <section className="bg-black/70 min-h-dvh flex items-center justify-center">
          <div className="text-white flex flex-col justify-center items-center gap-20 lg:w-3xl w-full max-md:p-3">
            <h1 className="text-center text-2xl md:text-4xl font-bold uppercase">
              Your community for stories and poems
            </h1>

            <p className="text-xl text-center">
              <span className="text-purple-500 font-bold italic">VerseVault</span>{" "}
              is where imagination takes shape. Write poems, craft stories, and
              explore the creations of others. Whether you’re just starting your
              writing journey or you’ve been expressing yourself for years, join a
              community built for sharing, connecting, and experiencing words in
              their purest form.
            </p>

            <div className="flex items-center gap-5 max-md:flex-col max-md:w-full">
              <Link
                href={"/explore"}
                className="border border-gray-400 rounded-lg px-8 py-3 text-xl hover:bg-gray-50/10 transition-all duration-200 max-md:w-full text-center"
              >
                Behind the Vault
              </Link>
              <Link
                href={"/new-post"}
                className="text-xl px-8 py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-200 max-md:w-full text-center"
              >
                Start Creating
              </Link>
            </div>
          </div>
        </section>

      </main>
      <section className=" py-20 px-5 flex flex-col items-center gap-16">
        <div className="max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 uppercase text-gray-800">
            About VerseVault
          </h2>
          <p className="text-lg leading-relaxed">
            At <span className="text-purple-500 font-semibold">VerseVault</span>,
            we believe every voice deserves a place to be heard. Whether it’s a
            fleeting thought turned into a poem or a carefully crafted story,
            this is your space to preserve and share your creativity.
          </p>
        </div>

        {/* Why Join */}
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl text-center">
          <div className="p-6 border border-gray-200 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Share Freely
            </h3>
            <p>
              Publish poems and stories in a community that values authenticity
              and self-expression.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Discover Voices
            </h3>
            <p>
              Explore works from writers across the globe and find inspiration
              in every line you read.
            </p>
          </div>
          <div className="p-6 border border-gray-200 rounded-xl bg-white/5">
            <h3 className="text-xl font-semibold text-purple-400 mb-3">
              Grow Together
            </h3>
            <p>
              Connect with fellow creatives, exchange feedback, and build lasting
              friendships through writing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-4">
            Features that Inspire
          </h2>
          <p className="text-lg">
            VerseVault offers a set of simple yet powerful tools designed to help
            you focus on what matters most: your words.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white/5 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Personal Library
            </h3>
            <p>Keep all your writings organized and accessible in one place.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Community Feedback
            </h3>
            <p>Receive encouragement and thoughtful feedback from peers.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Writing Prompts
            </h3>
            <p>Jumpstart your creativity with fresh prompts every week.</p>
          </div>
          <div className="p-6 bg-white/5 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-purple-400 mb-2">
              Showcase Moments
            </h3>
            <p>Highlight your best work and inspire others in the community.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-5 text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-12">
          Voices from the Vault
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <blockquote className="p-6 bg-white/5 rounded-xl border border-gray-200 italic">
            “VerseVault gave me the courage to share my writing for the first
            time. Now I feel like my words matter.”
          </blockquote>
          <blockquote className="p-6 bg-white/5 rounded-xl border border-gray-200 italic">
            “I’ve discovered poets from across the world here — it feels like a
            global circle of storytellers.”
          </blockquote>
          <blockquote className="p-6 bg-white/5 rounded-xl border border-gray-200 italic">
            “The prompts and community feedback helped me grow faster than I
            imagined. I write every day now.”
          </blockquote>
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-5 text-center">
        <h2 className="text-3xl font-bold uppercase mb-6">
          Begin your journey today
        </h2>
        <p className="text-lg mb-8">
          Your words are powerful — and they deserve a home. Unlock the vault and
          let your creativity shine.
        </p>
        <Link
          href={"/"}
          className="px-10 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-200 text-xl text-white"
        >
          Create Your First Piece
        </Link>
      </section>
    </>
  );
}