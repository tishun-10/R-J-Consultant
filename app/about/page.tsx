
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-white text-[#17283d]">

      {/* HERO */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
              ABOUT R & J CONSULTANTS USA
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.15] tracking-tight md:text-7xl">
              Your Journey.
              <br />
              <span className="font-serif font-normal italic text-[#b18a52]">
                Our Commitment.
              </span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-gray-600">
              Every journey comes with questions, decisions, and
              important steps. We aim to make the process easier
              to understand through organized support and clear
              communication.
            </p>

           
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200"
              alt="Professional team collaboration"
              className="h-[380px] w-full object-cover md:h-[510px]"
            />

           
          </div>

        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-gray-100 bg-[#faf9f6] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
              WHO WE ARE
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Built on
              <br />
              <span className="font-serif font-normal italic">
                Understanding.
              </span>
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-[#26374a]">
              R & J Consultants USA focuses on immigration-related
              consultation and organized documentation support for
              individuals and families exploring opportunities
              in the United States.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              We understand that every individual's circumstances
              are different. Immigration processes can involve
              important decisions, detailed requirements, and
              personal documentation.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our aim is to provide clear communication, organized
              assistance, and a respectful client experience
              throughout the journey.
            </p>
          </div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
              OUR PURPOSE
            </p>

            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
              What Guides Us
            </h2>

            <p className="mt-5 leading-8 text-gray-500">
              Our purpose is reflected in the way we communicate,
              organize information, and support our clients.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            <div className="border-t-2 border-[#b18a52] bg-[#faf9f6] p-9 md:p-12">
              <p className="text-sm font-semibold tracking-[2px] text-[#b18a52]">
                01 — OUR MISSION
              </p>

              <h3 className="mt-8 text-3xl font-semibold">
                Support with Purpose
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                To provide organized, accessible, and client-focused
                immigration-related support while helping individuals
                better understand information and documentation
                requirements.
              </p>
            </div>

            <div className="border-t-2 border-[#17283d] bg-[#faf9f6] p-9 md:p-12">
              <p className="text-sm font-semibold tracking-[2px] text-[#17283d]">
                02 — OUR VISION
              </p>

              <h3 className="mt-8 text-3xl font-semibold">
                Building Confidence
              </h3>

              <p className="mt-6 leading-8 text-gray-600">
                To build lasting client relationships through
                professionalism, transparency, responsible
                communication, and a thoughtful service experience.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#17283d] px-6 py-24 text-white md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#d5b47e]">
              WHY R & J
            </p>

            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
              A Thoughtful Approach
              <br />
              to Every Journey.
            </h2>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3">

            <div className="border-t border-white/20 pt-7">
              <span className="text-3xl font-serif text-[#d5b47e]">01</span>
              <h3 className="mt-6 text-xl font-semibold">
                Clear Communication
              </h3>
              <p className="mt-4 leading-7 text-gray-300">
                We value clear information and meaningful
                communication at every step.
              </p>
            </div>

            <div className="border-t border-white/20 pt-7">
              <span className="text-3xl font-serif text-[#d5b47e]">02</span>
              <h3 className="mt-6 text-xl font-semibold">
                Organized Support
              </h3>
              <p className="mt-4 leading-7 text-gray-300">
                We emphasize structured processes and careful
                organization of client documentation.
              </p>
            </div>

            <div className="border-t border-white/20 pt-7">
              <span className="text-3xl font-serif text-[#d5b47e]">03</span>
              <h3 className="mt-6 text-xl font-semibold">
                Client Respect
              </h3>
              <p className="mt-4 leading-7 text-gray-300">
                We believe every individual deserves attention,
                confidentiality, and respectful service.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

          <div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1100"
              alt="Professional consultation"
              className="h-[350px] w-full object-cover md:h-[450px]"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
              OUR APPROACH
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              Professional Support.
              <br />
              <span className="font-serif font-normal italic">
                Human Understanding.
              </span>
            </h2>

            <p className="mt-7 leading-8 text-gray-600">
              We believe that a positive client experience begins
              with listening, understanding individual concerns,
              and keeping information organized.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Our approach is centered on responsible communication,
              clear processes, and treating every client with care
              and respect.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f4f1eb] px-6 py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
            LET'S CONNECT
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            Every Journey
            <br />
            <span className="font-serif font-normal italic text-[#b18a52]">
              Starts Somewhere.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-600">
            Have questions about our services? Connect with
            our team to discuss your inquiry.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 bg-[#17283d] px-9 py-4 text-sm font-semibold text-white transition hover:bg-[#b18a52]"
          >
            Contact Our Team <span>↗</span>
          </Link>

        </div>
      </section>

    </main>
  );
}
