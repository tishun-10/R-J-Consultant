
import Link from "next/link";

const services = [
  {
    number: "01",
    category: "VISIT",
    title: "Visitor Visa",
    description:
      "Explore general information about visiting the United States for tourism, family visits, and certain permitted business activities.",
    href: "/services/visitor-visa",
  },
  {
    number: "02",
    category: "EDUCATION",
    title: "Student Visa",
    description:
      "Learn about student visa categories, educational opportunities, and related documentation requirements.",
    href: "/services/student-visa",
  },
  {
    number: "03",
    category: "CAREER",
    title: "Employment-Based",
    description:
      "Explore general information about employment-related immigration categories and their processes.",
    href: "/services/employment-based",
  },
  {
    number: "04",
    category: "FAMILY",
    title: "Family-Based",
    description:
      "Discover general information about family-based immigration pathways and their requirements.",
    href: "/services/family-based",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white text-[#17283d]">

      {/* Hero Section */}
      <section className="bg-[#faf9f6] px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
              WHAT WE OFFER
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-tight md:text-7xl">
              Our Services.
              <br />
              Your Journey.
              <br />
              <span className="font-serif font-normal italic text-[#b18a52]">
                Our Support.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600">
              Every immigration journey is different.
              Explore our service areas to learn about
              available information and administrative support.
            </p>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 bg-[#17283d] px-8 py-4 text-sm font-semibold text-white transition hover:bg-[#b18a52]"
            >
              Talk to Our Team <span>↗</span>
            </Link>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200"
              alt="Professional consultation and documentation"
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
              OUR EXPERTISE
            </p>

            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">
              Clear Information.
              <br />
              Organized Support.
            </h2>
          </div>

          <div>
            <p className="leading-8 text-gray-600">
              Understanding immigration processes can be
              challenging. We focus on clear communication,
              organized documentation support, and helping
              individuals understand general information
              relevant to their inquiries.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Explore our service categories below to find
              information relevant to your intended journey.
            </p>
          </div>

        </div>
      </section>

      {/* Service Cards */}
      <section className="bg-[#faf9f6] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
                EXPLORE OUR SERVICES
              </p>

              <h2 className="mt-5 text-4xl font-semibold md:text-5xl">
                Find Your Service Area
              </h2>
            </div>

            <p className="max-w-md leading-7 text-gray-600">
              Learn more about each category and explore
              the general information available.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {services.map((service) => (
              <div
                key={service.number}
                className="group flex flex-col border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#b18a52] hover:shadow-lg md:p-10"
              >

                <div className="flex items-center justify-between">

                  <span className="text-sm font-semibold tracking-[2px] text-[#b18a52]">
                    {service.number} / {service.category}
                  </span>

                  <span className="text-3xl text-[#b18a52] transition group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>

                </div>

                <h3 className="mt-10 text-3xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-5 flex-1 leading-8 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-9 border-t border-gray-100 pt-6">

                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-3 text-sm font-semibold transition group-hover:text-[#b18a52]"
                  >
                    Explore Service <span>→</span>
                  </Link>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-[#17283d] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#d5b47e]">
            OUR APPROACH
          </p>

          <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">
            A Thoughtful Approach
            <br />
            To Every Inquiry.
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-300">
            We believe that clear information and organized
            communication make the process easier to understand.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Understand",
                description:
                  "Understand your inquiry and identify relevant general information.",
              },
              {
                number: "02",
                title: "Organize",
                description:
                  "Help organize relevant information and documentation.",
              },
              {
                number: "03",
                title: "Communicate",
                description:
                  "Maintain clear communication about administrative support.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-t border-white/20 pt-7"
              >
                <span className="font-serif text-3xl text-[#d5b47e]">
                  {item.number}
                </span>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#f4f1eb] px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
            LET'S CONNECT
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            Your Next Step
            <br />
            <span className="font-serif font-normal italic text-[#b18a52]">
              Starts Here.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-600">
            Have questions about our services?
            Get in touch with our team to discuss your inquiry.
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
