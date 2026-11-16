
import Link from "next/link";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin by understanding your inquiry, intended goals, and the type of information or administrative support you are looking for.",
    detail: "Understanding your needs",
  },
  {
    number: "02",
    title: "Information Review",
    description:
      "We review the information you provide and identify relevant general process information and documentation considerations.",
    detail: "Reviewing your information",
  },
  {
    number: "03",
    title: "Document Organization",
    description:
      "We help organize relevant documents and information into a clear and structured format for easier reference.",
    detail: "Keeping documents organized",
  },
  {
    number: "04",
    title: "Preparation & Coordination",
    description:
      "We coordinate agreed administrative tasks and help keep track of relevant documentation and process-related steps.",
    detail: "Coordinating the next steps",
  },
  {
    number: "05",
    title: "Ongoing Communication",
    description:
      "We maintain communication and provide administrative updates within the agreed scope of support.",
    detail: "Staying connected",
  },
];

export default function ProcessPage() {
  return (
    <main className="bg-white text-[#17283d]">

      {/* Hero Section */}
      <section className="bg-[#faf9f6] px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
              HOW WE WORK
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-tight md:text-7xl">
              A Clear Process.
              <br />
              A Thoughtful
              <br />
              <span className="font-serif font-normal italic text-[#b18a52]">
                Approach.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600">
              Every journey begins with understanding.
              Our structured approach focuses on clear
              communication, organized documentation,
              and coordinated administrative support.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-[#17283d] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#b18a52]"
            >
              Start a Conversation <span>↗</span>
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
              alt="Organized professional consultation"
              className="h-[380px] w-full object-cover md:h-[500px]"
            />
          </div>

        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
              OUR APPROACH
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Simple Steps.
              <br />
              Organized Support.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-gray-600">
              We understand that immigration-related processes
              can involve different stages, information, and
              documentation. That is why we follow a structured
              approach to help keep communication and
              administrative tasks organized.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              From the initial inquiry to ongoing coordination,
              our focus is on helping you understand the
              administrative process and stay informed.
            </p>
          </div>

        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-[#faf9f6] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
              THE PROCESS
            </p>

            <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
              How It Works
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
              A step-by-step approach designed to keep
              your inquiry and related administrative
              activities clear and organized.
            </p>
          </div>

          <div className="mt-16">

            {processSteps.map((step, index) => (
              <div
                key={step.number}
                className="grid gap-6 border-t border-gray-200 py-10 md:grid-cols-[100px_1fr_1fr] md:gap-10"
              >

                <div>
                  <span className="font-serif text-4xl text-[#b18a52]">
                    {step.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium uppercase tracking-[1px] text-[#b18a52]">
                    {step.detail}
                  </p>
                </div>

                <div>
                  <p className="leading-8 text-gray-600">
                    {step.description}
                  </p>
                </div>

              </div>
            ))}

            <div className="border-t border-gray-200" />

          </div>
        </div>
      </section>

      {/* What Matters to Us */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
                OUR COMMITMENT
              </p>

              <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
                What Matters
                <br />
                Throughout the Process.
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                We believe a well-organized process starts
                with transparency, attention to detail,
                and respectful communication.
              </p>
            </div>

            <div className="grid gap-7 sm:grid-cols-2">

              {[
                {
                  title: "Clarity",
                  description:
                    "Clear information and communication at every stage.",
                },
                {
                  title: "Organization",
                  description:
                    "A structured approach to information and documents.",
                },
                {
                  title: "Confidentiality",
                  description:
                    "Careful handling of personal information and documents.",
                },
                {
                  title: "Communication",
                  description:
                    "Respectful and timely administrative updates.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="border-t border-gray-200 pt-6"
                >
                  <span className="text-xl text-[#b18a52]">✦</span>

                  <h3 className="mt-4 text-xl font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="bg-[#17283d] px-6 py-20 text-white">
        <div className="mx-auto max-w-4xl">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#d5b47e]">
            IMPORTANT INFORMATION
          </p>

          <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
            Your Journey. Your Individual Circumstances.
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            Immigration requirements and decisions depend
            on individual circumstances and applicable
            U.S. immigration rules. Our administrative
            support does not guarantee any immigration
            outcome or replace legal advice from an
            authorized U.S. immigration legal professional.
          </p>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#f4f1eb] px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
            LET'S BEGIN
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            Every Step Starts
            <br />
            <span className="font-serif font-normal italic text-[#b18a52]">
              With a Conversation.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-600">
            Have questions about our process?
            Connect with our team to discuss your inquiry.
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
