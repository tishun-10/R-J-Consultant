
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "R & J Consultants USA",
  description:
    "Immigration consultation and organized documentation support.",
};

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

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-container">
        <Logo />

        <nav className="main-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/our_process">Our Process</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact" className="nav-cta">
            Contact Us <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-area">
            <Logo />

            <p>
              Clear information, organized support, and a thoughtful
              approach to your immigration journey.
            </p>

            <a
              href="https://www.linkedin.com/in/salma-jahan-b7b93039a/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
            >
              LinkedIn <span>↗</span>
            </a>
          </div>

          <div className="footer-column">
            <h4>Explore</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Our Services</Link>
            <Link href="/#process">Our Process</Link>
          </div>

          <div className="footer-column">
            <h4>Services</h4>
            <Link href="/services">Visitor Visa</Link>
            <Link href="/services">Student Visa</Link>
            <Link href="/services">Employment-Based</Link>
            <Link href="/services">Family-Based</Link>
          </div>

          <div className="footer-column">
            <h4>Get in Touch</h4>
            <Link href="/contact">Contact Us</Link>
            <Link href="/#faq">FAQs</Link>
            <a
              href="https://www.linkedin.com/in/salma-jahan-b7b93039a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} R & J Consultants USA.
            All rights reserved.
          </p>

          <Link href="/" className="back-to-top">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
