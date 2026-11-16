"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  {
    number: "01",
    icon: "✈",
    title: "Visitor & Tourist Visa",
    description:
      "Guidance for individuals planning to visit the United States for tourism, family visits, or other permitted temporary purposes.",
  },
  {
    number: "02",
    icon: "🎓",
    title: "Student Visa",
    description:
      "General guidance on student visa processes, documentation, and preparation for studying in the United States.",
  },
  {
    number: "03",
    icon: "💼",
    title: "Employment-Based Immigration",
    description:
      "Information and case coordination support for employment-based immigration pathways and related processes.",
  },
  {
    number: "04",
    icon: "👨‍👩‍👧",
    title: "Family-Based Immigration",
    description:
      "Guidance and administrative support for family-based immigration processes and documentation.",
  },
  {
    number: "05",
    icon: "📄",
    title: "Green Card Guidance",
    description:
      "General information and document coordination for individuals exploring lawful permanent residence options.",
  },
  {
    number: "06",
    icon: "🤝",
    title: "Immigration Consultation",
    description:
      "An initial discussion to understand your goals and help identify the appropriate next steps.",
  },
];

const benefits = [
  {
    icon: "◎",
    title: "Client-Focused Approach",
    description:
      "We aim to understand each client's goals and provide clear, organized communication throughout the process.",
  },
  {
    icon: "✦",
    title: "Organized Documentation",
    description:
      "We emphasize careful document organization and clear information so clients can stay prepared.",
  },
  {
    icon: "◷",
    title: "Clear Communication",
    description:
      "We value timely updates and straightforward explanations at every stage of the client journey.",
  },
  {
    icon: "◇",
    title: "Professional Support",
    description:
      "Our approach focuses on respectful service, transparency, and responsible case coordination.",
  },
];

const steps = [
  {
    number: "01",
    title: "Initial Discussion",
    description:
      "Tell us about your immigration goals and the type of assistance you are looking for.",
  },
  {
    number: "02",
    title: "Case Assessment",
    description:
      "We review the information you provide and discuss possible next steps.",
  },
  {
    number: "03",
    title: "Document Preparation",
    description:
      "We help organize the relevant documents and information required for your process.",
  },
  {
    number: "04",
    title: "Ongoing Updates",
    description:
      "Stay informed about administrative progress and any next steps communicated to you.",
  },
];

const faqs = [
  {
    question: "What immigration services do you provide?",
    answer:
      "R & J Consultants USA provides immigration-related consultation and administrative support across several service categories. Contact us to discuss your specific needs and confirm whether the requested service is available.",
  },
  {
    question: "How can I start the process?",
    answer:
      "You can contact our team using the contact details provided on this website. Share a brief description of your goal, and our team can guide you regarding the next steps.",
  },
  {
    question: "What documents will I need?",
    answer:
      "Required documents depend on the immigration category and individual circumstances. A document checklist should be provided after your initial discussion. Do not send sensitive documents through an unsecured channel.",
  },
  {
    question: "How long does an immigration process take?",
    answer:
      "Processing times vary depending on the immigration category, government processing, individual circumstances, and other factors. No specific timeline can be guaranteed.",
  },
  {
    question: "Can you guarantee visa approval?",
    answer:
      "No. No consultancy can guarantee a visa, immigration benefit, or government decision. All final decisions are made by the relevant government authorities.",
  },
];

function Logo() {
  return (
    <Link href="/" className="brand" aria-label="R and J Consultants USA home">
      <span className="brand-mark">
        R<span>&</span>J
      </span>

      <span className="brand-name">
        R & J
        <small>CONSULTANTS USA</small>
      </span>
    </Link>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formMessage, setFormMessage] = useState("");

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormMessage(
      "This contact form is a design preview. Please connect a secure form service or backend before accepting client inquiries."
    );
  };

  return (
    <main>
      

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-pattern"></div>

        <div className="container hero-container">
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow">
              <span></span>
              IMMIGRATION CONSULTANCY & SUPPORT
            </div>

            <h1>
              Your Journey.
              <br />
              Your Future.
              <br />
              <span>Our Guidance.</span>
            </h1>

            <p className="hero-description">
              Every immigration journey begins with a goal. We are here to help
              you understand the process, organize your documents, and move
              forward with greater clarity.
            </p>

            <div className="hero-actions">
              <Link href="#contact" className="btn btn-primary">
                Start a Conversation <span>↗</span>
              </Link>

              <Link href="#services" className="btn btn-outline">
                Explore Services
              </Link>
            </div>

            <div className="hero-note">
              <span className="note-icon">✦</span>
              <span>Professional guidance. Clear communication.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <div className="hero-image-overlay"></div>

              <div className="hero-image-content">
                <span className="image-small-label">YOUR NEXT CHAPTER</span>
                <h2>
                  A world of
                  <br />
                  possibilities.
                </h2>
                <p>Move forward with clarity and confidence.</p>
              </div>
            </div>

            
            <div className="hero-circle"></div>
          </div>
        </div>

        <div className="hero-bottom">
          <div className="container hero-bottom-inner">
            <span>GUIDANCE</span>
            <span className="bottom-line"></span>
            <span>CLARITY</span>
            <span className="bottom-line"></span>
            <span>SUPPORT</span>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="intro-strip">
        <div className="container intro-strip-inner">
          <p>
            Helping individuals and families navigate immigration-related
            processes with better information and organized support.
          </p>
          <span>R & J CONSULTANTS USA</span>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="about-visual">
            <div className="about-image">
              <div className="about-image-caption">
                <span>R & J</span>
                <small>YOUR JOURNEY MATTERS</small>
              </div>
            </div>

            <div className="about-stamp">
              <span>R&J</span>
              <small>CONSULTANTS USA</small>
            </div>
          </div>

          <div className="about-content">
            <div className="eyebrow">
              <span></span>
              ABOUT OUR COMPANY
            </div>

            <h2 className="section-title">
              Making your immigration journey
              <em> easier to understand.</em>
            </h2>

            <p>
              At R & J Consultants USA, we believe that every person's journey
              deserves attention, clarity, and respect.
            </p>

            <p>
              Immigration processes can involve complex requirements,
              documentation, and important decisions. Our goal is to make
              information easier to understand and help clients stay organized
              throughout their journey.
            </p>

            <p>
              We focus on communication, responsible support, and a
              client-centered approach.
            </p>

            <Link href="#contact" className="text-link">
              Get to know us <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span></span>
                WHAT WE DO
              </div>

              <h2 className="section-title">
                Immigration support
                <br />
                <em>for your next chapter.</em>
              </h2>
            </div>

            <p className="section-heading-description">
              Explore our service categories and connect with our team to
              discuss the support relevant to your circumstances.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-number">{service.number}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <Link href="#contact" className="service-link">
                  Learn more <span>↗</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="services-note">
            Service availability and eligibility depend on individual
            circumstances. Contact us to confirm the scope of support offered.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section why-section">
        <div className="container">
          <div className="why-layout">
            <div className="why-intro">
              <div className="eyebrow light-eyebrow">
                <span></span>
                WHY R & J
              </div>

              <h2 className="section-title light-title">
                A thoughtful approach to
                <em> every journey.</em>
              </h2>

              <p>
                We understand that immigration is more than paperwork. It
                involves personal goals, important decisions, and the future
                you are working toward.
              </p>

              <Link href="#contact" className="btn btn-light">
                Talk to Our Team <span>↗</span>
              </Link>
            </div>

            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div className="benefit-card" key={benefit.title}>
                  <span className="benefit-icon">{benefit.icon}</span>
                  <span className="benefit-number">
                    0{index + 1} / 04
                  </span>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section process-section" id="process">
        <div className="container">
          <div className="section-heading process-heading">
            <div>
              <div className="eyebrow">
                <span></span>
                HOW IT WORKS
              </div>

              <h2 className="section-title">
                A clear path,
                <br />
                <em>step by step.</em>
              </h2>
            </div>

            <p className="section-heading-description">
              We aim to make the experience more organized by keeping the
              process understandable and communication clear.
            </p>
          </div>

          <div className="process-grid">
            {steps.map((step) => (
              <div className="process-card" key={step.number}>
                <span className="process-number">{step.number}</span>
                <div className="process-line"></div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="section founder-section">
        <div className="container founder-grid">
          <div className="founder-photo-area">
            <div className="founder-photo">
              <div className="founder-initials">SJ</div>
              <span>FOUNDER & LEADERSHIP</span>
            </div>
            <div className="founder-photo-decoration"></div>
          </div>

          <div className="founder-content">
            <div className="eyebrow">
              <span></span>
              MEET OUR LEADERSHIP
            </div>

            <h2 className="section-title">
              A commitment to
              <em> people and possibilities.</em>
            </h2>

            <h3 className="founder-name">Salma Jahan</h3>
            <span className="founder-role">Founder / Leadership</span>

            <p>
              R & J Consultants USA is led by Salma Jahan. The company's
              approach is centered on client communication, organized
              assistance, and helping individuals better understand their
              immigration-related journey.
            </p>

            <p>
              Connect with Salma Jahan to learn more about her professional
              background and updates.
            </p>

            <a
              href="https://www.linkedin.com/in/salma-jahan-b7b93039a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              View LinkedIn Profile <span>↗</span>
            </a>

            <p className="founder-note">
              Please verify the founder's official title, biography, and
              professional credentials before publishing this section.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section" id="faq">
        <div className="container faq-layout">
          <div className="faq-intro">
            <div className="eyebrow">
              <span></span>
              HAVE QUESTIONS?
            </div>

            <h2 className="section-title">
              Frequently asked
              <em> questions.</em>
            </h2>

            <p>
              Here are some general answers to help you understand how to get
              started.
            </p>

            <Link href="#contact" className="text-link">
              Have another question? Contact us <span>↗</span>
            </Link>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={faq.question}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>

                {openFaq === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-content">
            <div className="eyebrow light-eyebrow">
              <span></span>
              GET IN TOUCH
            </div>

            <h2 className="section-title light-title">
              Let's talk about
              <em> your next step.</em>
            </h2>

            <p>
              Have a question or want to understand your options? Send us a
              brief message. Our team can guide you on how to proceed.
            </p>

            <div className="contact-detail">
              <span className="contact-detail-icon">✉</span>
              <div>
                <small>EMAIL</small>
                <p>Business email to be added</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">⌖</span>
              <div>
                <small>LOCATION</small>
                <p>United States</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">↗</span>
              <div>
                <small>LINKEDIN</small>
                <a
                  href="https://www.linkedin.com/in/salma-jahan-b7b93039a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect with Salma Jahan
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="form-heading">
              <span>LET'S CONNECT</span>
              <h3>Send us a message</h3>
              <p>Fill in the details below to prepare your inquiry.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">Service of Interest</label>
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="Visitor Visa">Visitor / Tourist Visa</option>
                  <option value="Student Visa">Student Visa</option>
                  <option value="Employment-Based">
                    Employment-Based Immigration
                  </option>
                  <option value="Family-Based">
                    Family-Based Immigration
                  </option>
                  <option value="Green Card">Green Card Guidance</option>
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Briefly tell us how we can help..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Prepare Inquiry <span>↗</span>
              </button>

              {formMessage && (
                <p className="form-message" role="status">
                  {formMessage}
                </p>
              )}

              <p className="form-disclaimer">
                Please do not include passport numbers, financial information,
                or other sensitive personal documents in this form.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* LEGAL NOTICE */}
      <section className="legal-section">
        <div className="container">
          <div className="legal-heading">
            <span>IMPORTANT INFORMATION</span>
            <span className="legal-line"></span>
          </div>

          <p>
            The information on this website is for general informational
            purposes only and does not constitute legal advice. R & J
            Consultants USA does not guarantee visa approval, immigration
            benefits, or any government decision. Immigration laws and
            requirements may change. Legal advice and legal representation
            should be provided only by appropriately authorized professionals.
            Always verify requirements with official government sources or a
            qualified immigration attorney.
          </p>
        </div>
      </section>

     
    </main>
  );
}