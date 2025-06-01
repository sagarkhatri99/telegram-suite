import './App.css';
import React from "react";

const testimonials = [
  {
    quote:
      "Telegram Suite transformed our outreach strategy. The automation tools are a game-changer!",
    author: "Alex M., Digital Marketer",
  },
  {
    quote:
      "Managing our Telegram community has never been easier. Highly recommend!",
    author: "Priya S., Community Manager",
  },
];

const services = [
  {
    title: "User Scraper",
    desc:
      "Extract user information from Telegram groups, including User ID, Username, First Name, and Last Name.",
    benefits: [
      "Build targeted contact lists.",
      "Enhance outreach campaigns.",
      "Export data in CSV format for easy integration.",
    ],
  },
  {
    title: "Group Monitor",
    desc:
      "Monitor specific keywords and user activities within Telegram groups, with data logged and downloadable in CSV format.",
    benefits: [
      "Stay updated on relevant conversations.",
      "Track competitor or influencer mentions.",
      "Gather insights for strategic decisions.",
    ],
  },
  {
    title: "Mass DM via Bot Token",
    desc:
      "Send personalized messages to users via your Telegram bot. Note: Users must have initiated interaction with the bot.",
    benefits: [
      "Automate message delivery.",
      "Customize messages for different audiences.",
      "Efficiently manage communication at scale.",
    ],
  },
  {
    title: "Mass DM via Account",
    desc:
      "Directly message users using your Telegram account, allowing outreach without prior interaction.",
    benefits: [
      "Bypass bot initiation limitations.",
      "Personalize communication.",
      "Expand reach to potential clients or community members.",
    ],
  },
  {
    title: "Auto Promo Bot",
    desc:
      "Schedule and send promotional messages at set intervals (0 to 300 seconds) to keep your audience engaged.",
    benefits: [
      "Maintain consistent presence in groups.",
      "Automate promotional campaigns.",
      "Increase brand visibility and recall.",
    ],
  },
];

const pricing = [
  {
    plan: "Basic",
    features: "Access to User Scraper and Group Monitor",
  },
  {
    plan: "Pro",
    features: "Includes all tools with standard support",
  },
  {
    plan: "Enterprise",
    features: "All tools plus priority support and custom solutions",
  },
];

const faqs = [
  {
    q: "Do I need technical skills to use Telegram Suite?",
    a: "No, our user-friendly interface ensures ease of use for all users.",
  },
  {
    q: "Is my data secure?",
    a: "Absolutely. We prioritize data security and comply with all relevant regulations.",
  },
  {
    q: "Can I customize the tools to fit my needs?",
    a: "Yes, we offer customization options to align with your specific requirements.",
  },
  {
    q: "What support options are available?",
    a: "We provide standard and priority support based on your subscription plan.",
  },
];

function App() {
  return (
    <>
      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#pricing">Pricing</a>
        <a href="#how">How It Works</a>
        <a href="#about">About</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </nav>
      <header id="home">
        <h1>Streamline Your Telegram Marketing with Our All-in-One Suite</h1>
        <p>Automate, Engage, and Grow—Effortlessly.</p>
        <a className="cta-btn" href="#contact">
          Get Started Now
        </a>
      </header>
      <section>
        <h2>Welcome to Telegram Suite</h2>
        <p>
          Your ultimate solution for automating and enhancing your Telegram marketing efforts. Whether you're a marketer, community manager, or business owner, our suite offers tools to simplify user engagement, outreach, and promotion on Telegram.
        </p>
        <h3>Key Benefits</h3>
        <ul className="benefits">
          <li>Comprehensive Tools: Five integrated tools covering user scraping, group monitoring, mass messaging, and auto-promotion.</li>
          <li>User-Friendly Interface: Intuitive design ensuring ease of use without technical expertise.</li>
          <li>Time-Saving Automation: Automate repetitive tasks to focus on strategic growth.</li>
          <li>Scalable Solutions: Suitable for small businesses to large enterprises.</li>
        </ul>
        <div className="testimonials">
          {testimonials.map((t, i) => (
            <div className="testimonial" key={i}>
              “{t.quote}”<br />
              <strong>— {t.author}</strong>
            </div>
          ))}
        </div>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <div className="services-list">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.benefits.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <h3>Service Packages</h3>
        <ul>
          <li>
            <strong>Data Extraction Service:</strong> We handle user scraping and provide you with the CSV files.
          </li>
          <li>
            <strong>Monitoring Reports:</strong> Regular reports on group activities and keyword mentions.
          </li>
          <li>
            <strong>Outreach Campaigns:</strong> We manage your mass messaging campaigns, ensuring compliance and effectiveness.
          </li>
        </ul>
      </section>
      <section id="pricing">
        <h2>Pricing Models</h2>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((p, i) => (
              <tr key={i}>
                <td>{p.plan}</td>
                <td>{p.features}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section id="how">
        <h2>How It Works</h2>
        <ol>
          <li>
            <strong>Consultation:</strong> Discuss your needs and objectives.
          </li>
          <li>
            <strong>Setup:</strong> Configure tools or services as per your requirements.
          </li>
          <li>
            <strong>Execution:</strong> Run the tools or let our team manage the services.
          </li>
          <li>
            <strong>Delivery:</strong> Receive data, reports, or confirmation of completed tasks.
          </li>
          <li>
            <strong>Support:</strong> Ongoing assistance and optimization suggestions.
          </li>
        </ol>
      </section>
      <section id="about">
        <h2>About Us</h2>
        <p>
          <strong>Our Mission:</strong> Empowering businesses and communities to harness the full potential of Telegram through innovative automation tools and services.
        </p>
        <h3>Why Choose Telegram Suite?</h3>
        <ul>
          <li>
            <strong>Expertise:</strong> Developed by professionals with in-depth knowledge of Telegram's ecosystem.
          </li>
          <li>
            <strong>Reliability:</strong> Consistent performance and regular updates.
          </li>
          <li>
            <strong>Customer-Centric:</strong> Dedicated support and customization options.
          </li>
        </ul>
      </section>
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((f, i) => (
          <div className="faq-item" key={i}>
            <div className="faq-question">{f.q}</div>
            <div className="faq-answer">{f.a}</div>
          </div>
        ))}
      </section>
      <section id="contact">
  <h2>Contact</h2>
  <p>
    <strong>Email:</strong>{" "}
    <a href="mailto:sales@pinnaclerobo.tech">sales@pinnaclerobo.tech</a>
  </p>
  <a
    className="cta-btn"
    href="https://t.me/Dominicyales"
    target="_blank"
    rel="noopener noreferrer"
  >
    Message us on Telegram
  </a>
</section>
      <footer>
        &copy; {new Date().getFullYear()} Telegram Suite. All rights reserved.
      </footer>
    </>
  );
}

export default App;