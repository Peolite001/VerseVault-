import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <main className="">
            <section className=" min-h-[50vh] flex items-center justify-center">
                <div className="text-center max-w-3xl px-5">
                    <h1 className="text-3xl md:text-5xl font-bold uppercase mb-6">
                        About VerseVault
                    </h1>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-800">
                        A home for dreamers, storytellers, and poets — VerseVault was built
                        to celebrate creativity in its purest form.
                    </p>
                </div>
            </section>

            <section className=" py-20 px-5 flex justify-center">
                <div className="max-w-5xl grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold uppercase mb-6">
                            Our Story
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-800">
                            VerseVault began as a simple idea: give writers a safe space to
                            share their words without judgment. What started as a small circle
                            of friends exchanging poems has grown into a global community of
                            creatives, all united by their love for storytelling. Today,
                            VerseVault is more than just a platform — it’s a movement that
                            empowers people to find their voice and connect through literature.
                        </p>
                    </div>
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-[url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat">
                    </div>
                </div>
            </section>

            <section className=" py-20 px-5">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden bg-[url('https://images.unsplash.com/photo-1651471193910-0536e26d0c48?q=80&w=779&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat">

                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-purple-800 mb-4">
                            Our Mission
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-800 mb-8">
                            To create a welcoming space where writers of all backgrounds can
                            express themselves, share their creations, and grow through
                            community-driven support and inspiration.
                        </p>
                        <h3 className="text-xl font-semibold text-purple-800 mb-4">
                            Our Vision
                        </h3>
                        <p className="text-lg leading-relaxed text-gray-800">
                            A world where every voice is heard, where words can inspire change,
                            and where creativity connects people across cultures and borders.
                        </p>
                    </div>
                </div>
            </section>

            <section className=" py-20 px-5 text-center">
                <h2 className="text-2xl md:text-3xl font-bold uppercase mb-12">
                    Our Core Values
                </h2>
                <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    <div className="p-6 border border-gray-200 rounded-xl bg-white/5">
                        <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden bg-[url('https://images.unsplash.com/photo-1567177662154-dfeb4c93b6ae?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat">
                        </div>
                        <h4 className="text-lg font-semibold text-purple-800 mb-3">
                            Creativity
                        </h4>
                        <p className="text-gray-800">
                            We believe imagination is the key to growth and self-expression.
                        </p>
                    </div>
                    <div className="p-6 border border-gray-200 rounded-xl bg-white/5">
                        <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden bg-[url('https://images.unsplash.com/photo-1597394156562-d674391f1aba?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat">

                        </div>
                        <h4 className="text-lg font-semibold text-purple-800 mb-3">
                            Inclusivity
                        </h4>
                        <p className="text-gray-800">
                            Every voice matters. We welcome writers from all walks of life.
                        </p>
                    </div>
                    <div className="p-6 border border-gray-200 rounded-xl bg-white/5">
                        <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden bg-[url('https://plus.unsplash.com/premium_photo-1688678097511-74b32529c58c?q=80&w=789&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-no-repeat bg-center bg-cover">

                        </div>
                        <h4 className="text-lg font-semibold text-purple-800 mb-3">
                            Connection
                        </h4>
                        <p className="text-gray-800">
                            Stories connect us, inspire empathy, and build meaningful bonds.
                        </p>
                    </div>
                </div>
            </section>

            <section className=" py-20 px-5 text-center">
                <h2 className="text-3xl font-bold uppercase mb-6">
                    Join Our Community
                </h2>
                <p className="text-lg mb-8 text-gray-800">
                    Be part of VerseVault and share your unique voice with the world.
                </p>
                <Link
                    href={"/new-post"}
                    className="px-10 py-4 rounded-lg bg-purple-600 hover:bg-purple-700 transition-all duration-200 text-xl text-white"
                >
                    Start Writing Today
                </Link>
            </section>
        </main>
    );
}