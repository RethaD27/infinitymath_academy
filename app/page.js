"use client";

import { useEffect } from "react";
import "./infinity-math.css";

export default function InfinityMathPage() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    // Header scroll effect
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 100) {
        header.style.background = "rgba(0, 139, 139, 0.95)";
        header.style.backdropFilter = "blur(10px)";
      } else {
        header.style.background =
          "linear-gradient(135deg, #008B8B 0%, #20B2AA 100%)";
        header.style.backdropFilter = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "slideInUp 0.6s ease-out forwards";
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".feature-card, .product-card, .contact-item")
      .forEach((el) => {
        observer.observe(el);
      });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
    };
  }, []);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Account number copied to clipboard!");
    });
  };

  return (
    <>
      {/* Header */}
      <header>
        <nav className="container">
          <div className="logo">∞ Infinity Math</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#products">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1>Infinity Math</h1>
            <p>Professional Mathematics Tutoring for South African Learners</p>
            <p>📍 Grade R–12 | Rustenburg & Beyond</p>
            <a href="#contact" className="cta-button">
              Start Your Math Journey
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <h2 className="section-title">Why Choose Infinity Math?</h2>
          <p className="section-subtitle">
            Making Mathematics accessible, engaging, and effective for all
            learners
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📚</div>
              <h3>CAPS-Aligned Content</h3>
              <p>
                All our tutoring materials are perfectly aligned with the South
                African CAPS curriculum, ensuring learners get exactly what they
                need for their grade level.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Proven Results</h3>
              <p>
                Our structured tutoring approach and engaging methods have
                helped countless learners improve their math confidence and
                performance across all grade levels.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Flexible Scheduling</h3>
              <p>
                Weekly and daily tutoring sessions available to fit your
                schedule. Consistent support to ensure steady progress in
                mathematics.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Personalized Learning</h3>
              <p>
                Individual attention and customized lesson plans designed to
                meet each learner&apos;s unique needs and learning pace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <div className="container">
          <h2 className="section-title" style={{ color: "white" }}>
            Our Tutoring Services
          </h2>
          <p
            className="section-subtitle"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Professional mathematics tutoring tailored to your needs
          </p>

          <div className="products-grid">
            <div className="product-card">
              <h3>📖 Monthly Tutoring Package</h3>
              <p>Regular weekly sessions for consistent progress</p>
              <div className="price">R800/month</div>
              <ul style={{ textAlign: "left", margin: "1rem 0" }}>
                <li>✅ 2 sessions per week</li>
                <li>✅ Personalized attention</li>
                <li>✅ CAPS-aligned curriculum</li>
                <li>✅ Progress tracking</li>
              </ul>
            </div>

            <div className="product-card">
              <h3>🏫 Holiday Math Bootcamps</h3>
              <p>Intensive training during school holidays only</p>
              <div className="price">R600</div>
              <ul style={{ textAlign: "left", margin: "1rem 0" }}>
                <li>✅ 3-5 day intensive program</li>
                <li>✅ Small group sessions</li>
                <li>✅ Holiday periods only</li>
                <li>✅ Focused learning</li>
              </ul>
            </div>

            <div className="product-card">
              <h3>📱 Free Math Content</h3>
              <p>Daily TikTok & YouTube math tips and tricks</p>
              <div className="price">FREE</div>
              <ul style={{ textAlign: "left", margin: "1rem 0" }}>
                <li>✅ Short video lessons</li>
                <li>✅ Math tricks & tips</li>
                <li>✅ Exam preparation</li>
                <li>✅ Fun math challenges</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="payment" id="payment">
        <div className="container">
          <h2 className="section-title">Easy Payment Options</h2>
          <p className="section-subtitle">
            Secure and convenient ways to pay for Infinity Math tutoring
          </p>

          <div className="payment-grid">
            <div className="payment-card">
              <div className="payment-method">
                <div className="bank-logo">DB</div>
                <div>
                  <h3>Discovery Bank Account</h3>
                  <p>Direct bank transfer - Most secure option</p>
                </div>
              </div>
              <div className="payment-info">
                <p>
                  <strong>Account Name:</strong> Infinity Math
                </p>
                <p>
                  <strong>Account Number:</strong> 10135758329{" "}
                  <button
                    className="copy-button"
                    onClick={() => copyToClipboard("10135758329")}
                  >
                    Copy
                  </button>
                </p>
                <p>
                  <strong>Bank:</strong> Discovery Bank
                </p>
                <p>
                  <strong>Account Type:</strong> Cheque
                </p>
              </div>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>
                Please use your name + service as reference (e.g., &quot;John
                Smith Monthly Tutoring&quot;)
              </p>
            </div>

            <div className="payment-card">
              <div className="payment-method">
                <div className="bank-logo">📱</div>
                <div>
                  <h3>Instant EFT</h3>
                  <p>Pay directly from your banking app</p>
                </div>
              </div>
              <div className="payment-info">
                <p>
                  <strong>Beneficiary:</strong> Infinity Math
                </p>
                <p>
                  <strong>Account Number:</strong> 10135758329
                </p>
                <p>
                  <strong>Bank:</strong> Discovery Bank
                </p>
              </div>
              <p style={{ fontSize: "0.9rem", color: "#666" }}>
                Most banks support instant EFT payments
              </p>
            </div>
          </div>

          <div
            style={{
              textAlign: "center",
              marginTop: "3rem",
              padding: "2rem",
              background: "#e0f2f1",
              borderRadius: "15px",
            }}
          >
            <h3 style={{ color: "#008B8B", marginBottom: "1rem" }}>
              🔐 Payment Security Guarantee
            </h3>
            <p>
              Your payment is 100% secure. We use encrypted Discovery Bank
              business banking with full transaction tracking.
            </p>
            <p>
              <strong>After payment:</strong> WhatsApp your proof of payment to
              067 345 6758 and receive confirmation within 2 hours!
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <h2 className="section-title">About Infinity Math</h2>
          <p className="section-subtitle">
            Professional mathematics tutoring in South Africa
          </p>

          <div className="about-content">
            <div className="about-text">
              <p>
                Infinity Math is a dedicated tutoring company founded on the
                vision of making quality mathematics education accessible to
                every South African learner, regardless of their background or
                location.
              </p>

              <p>
                We offer personalized tutoring services for learners from Grade
                R through Grade 12, with flexible weekly sessions and intensive
                holiday bootcamps. Our approach combines one-on-one attention
                with curriculum-aligned content to ensure each student reaches
                their full potential.
              </p>

              <p>
                Based in Rustenburg and serving learners across South Africa,
                we&apos;re committed to building mathematical confidence and
                competence in the next generation of problem-solvers and
                critical thinkers.
              </p>
            </div>

            <div className="founder-card">
              <h3>Meet the Founder</h3>
              <h4>Rethabile Diale</h4>
              <p>🎓 BSc Mathematics - University of Pretoria</p>
              <p>💻 Software Engineer</p>
              <p>🧠 Passionate about youth empowerment and education</p>
              <p>📍 Based in Rustenburg, Royal Bafokeng</p>
              <p style={{ marginTop: "1rem", fontStyle: "italic" }}>
                &quot;Mathematics is the language of the universe, and every
                learner deserves to speak it fluently.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <h2 className="section-title" style={{ color: "white" }}>
            Get In Touch
          </h2>
          <p
            className="section-subtitle"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Ready to transform your math learning journey?
          </p>

          <div className="contact-grid">
            <div className="contact-item">
              <div
                style={{
                  fontSize: "2rem",
                  color: "#00CED1",
                  marginBottom: "1rem",
                }}
              >
                📱
              </div>
              <h3>WhatsApp</h3>
              <p>Message &quot;MATH&quot; to get started</p>
              <p>
                <strong>067 345 6758</strong>
              </p>
            </div>

            <div className="contact-item">
              <div
                style={{
                  fontSize: "2rem",
                  color: "#00CED1",
                  marginBottom: "1rem",
                }}
              >
                ✉️
              </div>
              <h3>Email</h3>
              <p>For business inquiries</p>
              <p>
                <strong>rethadiale27@gmail.com</strong>
              </p>
            </div>

            <div className="contact-item">
              <div
                style={{
                  fontSize: "2rem",
                  color: "#00CED1",
                  marginBottom: "1rem",
                }}
              >
                📍
              </div>
              <h3>Location</h3>
              <p>Serving Rustenburg & Beyond</p>
              <p>
                <strong>North West Province</strong>
              </p>
            </div>

            <div className="contact-item">
              <div
                style={{
                  fontSize: "2rem",
                  color: "#00CED1",
                  marginBottom: "1rem",
                }}
              >
                🌐
              </div>
              <h3>Follow Us</h3>
              <p>Daily math tips & updates</p>
              <p>
                <strong>@InfinityMathZA</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>
            &copy; 2025 Infinity Math. All rights reserved. | Professional
            mathematics tutoring for South African learners.
          </p>
          <p>
            Created with ❤️ by Rethabile Diale | Building the future, one
            equation at a time.
          </p>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        <a
          href="https://wa.me/27673456758?text=Hi,%20I'm%20interested%20in%20Infinity%20Math!"
          className="float-button whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          📱
        </a>
        <a href="tel:+27673456758" className="float-button call-float">
          📞
        </a>
        <a
          href="mailto:rethadiale27@gmail.com"
          className="float-button email-float"
        >
          ✉️
        </a>
      </div>
    </>
  );
}
