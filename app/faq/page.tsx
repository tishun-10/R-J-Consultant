
import Link from "next/link";

const faqGroups = [
  {
    category: "GENERAL QUESTIONS",
    questions: [
      {
        question: "What services does R & J Consultants USA offer?",
        answer:
          "We provide information and administrative support across our service areas, including Visitor Visa, Student Visa, Employment-Based, and Family-Based immigration categories. The available scope of support depends on the specific inquiry.",
      },
      {
        question: "How do I get started?",
        answer:
          "You can start by contacting our team and sharing some basic information about your inquiry. Our team can then explain the relevant service information and possible administrative next steps.",
      },
      {
        question: "Can I discuss my situation before proceeding?",
        answer:
          "Yes. You can contact our team to discuss your inquiry and understand the general information and administrative support available.",
      },
    ],
  },
  {
    category: "VISA & DOCUMENTATION",
    questions: [
      {
        question: "What documents do I need for a U.S. visa application?",
        answer:
          "Document requirements depend on the visa category and your individual circumstances. For many visitor visa applicants, the process includes a valid passport, DS-160 confirmation page, and a photograph meeting the applicable requirements. Additional documents may also be requested. Always check the official U.S. Embassy or Consulate instructions for your application.",
      },
      {
        question: "Can you help organize my documents?",
        answer:
          "We can provide administrative documentation organization support within the agreed scope of our services. Applicants are responsible for ensuring that all information and documents they provide are accurate and complete.",
      },
      {
        question: "Do I always need to attend a visa interview?",
        answer:
          "Visa interviews are generally required, although limited exceptions may apply. A consular officer may require an interview in an individual case. Check the latest instructions from the U.S. Embassy or Consulate where you apply.",
      },
    ],
  },
  {
    category: "APPLICATION & DECISIONS",
    questions: [
      {
        question: "Can R & J Consultants USA guarantee visa approval?",
        answer:
          "No. No consultancy can guarantee visa approval. Visa applications are reviewed and decided by the relevant U.S. government authorities based on applicable laws and individual circumstances.",
      },
      {
        question: "Who makes the final visa decision?",
        answer:
          "For a visa application, the authorized consular officer makes the decision. A visa also does not guarantee admission into the United States; admission is determined by the relevant authorities at the port of entry.",
      },
      {
        question: "How long does the visa process take?",
        answer:
          "Processing times vary depending on the visa category, application circumstances, appointment availability, and any additional processing required. We cannot promise a specific decision date. Applicants should check official government updates.",
      },
      {
        question: "What happens if my visa application is refused?",
        answer:
          "The next steps depend on the reason for refusal and your individual circumstances. Review the information provided by the consular officer and consult an authorized U.S. immigration legal professional if you need legal advice about your options.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="bg-white text-[#17283d]">

      {/* Hero Section */}
      <section className="bg-[#faf9f6] px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            Questions?
            <br />
            We've Got
            <br />
            <span className="font-serif font-normal italic text-[#b18a52]">
              Answers.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-600">
            Find answers to common questions about our services,
            general immigration information, documentation,
            and the support process.
          </p>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">

          <div className="mb-14">
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
              HOW CAN WE HELP?
            </p>

            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Browse the questions below to find the information
              you are looking for.
            </p>
          </div>

          {faqGroups.map((group) => (
            <div key={group.category} className="mb-14">

              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
                {group.category}
              </h3>

              <div className="border-t border-gray-200">

                {group.questions.map((item, index) => (
                  <details
                    key={item.question}
                    className="group border-b border-gray-200"
                  >

                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-left">

                      <span className="flex items-start gap-5">
                        <span className="pt-1 text-sm font-semibold text-[#b18a52]">
                          0{index + 1}
                        </span>

                        <span className="text-lg font-semibold transition group-hover:text-[#b18a52] md:text-xl">
                          {item.question}
                        </span>
                      </span>

                      <span className="shrink-0 text-2xl font-light text-[#b18a52] transition-transform group-open:rotate-45">
                        +
                      </span>

                    </summary>

                    <div className="pb-7 pl-10 pr-10">
                      <p className="max-w-3xl leading-8 text-gray-600">
                        {item.answer}
                      </p>
                    </div>

                  </details>
                ))}

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Legal Information */}
      <section className="bg-[#17283d] px-6 py-16 text-white">
        <div className="mx-auto max-w-5xl">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#d5b47e]">
            PLEASE NOTE
          </p>

          <h2 className="mt-5 text-3xl font-semibold">
            Every Case Is Different.
          </h2>

          <p className="mt-5 leading-8 text-gray-300">
            The information on this page is provided for general
            informational purposes only. Immigration laws,
            requirements, and procedures may change. Administrative
            support does not replace legal advice or representation
            from an authorized U.S. immigration legal professional.
            No visa or immigration outcome is guaranteed.
          </p>

        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#f4f1eb] px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">

          <p className="text-xs font-semibold uppercase tracking-[3px] text-[#b18a52]">
            STILL HAVE QUESTIONS?
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            We're Here to
            <br />
            <span className="font-serif font-normal italic text-[#b18a52]">
              Help You.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-600">
            Can't find the answer you're looking for?
            Get in touch with our team.
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
