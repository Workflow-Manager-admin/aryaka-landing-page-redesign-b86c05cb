import React, { useState, useEffect } from 'react';
import './App.css';

// Hero Component
// PUBLIC_INTERFACE
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Accelerate Your Enterprise with 
            <span className="accent-text"> Global SASE</span>
          </h1>
          <p className="hero-subtitle">
            Experience unmatched network performance, security, and reliability 
            with Aryaka's unified SASE platform built for enterprise scale.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Watch Demo</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="abstract-illustration">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="connection-lines">
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Product Pillars Component
// PUBLIC_INTERFACE
const ProductPillars = () => {
  const pillars = [
    {
      icon: '🌐',
      title: 'Global Network',
      summary: 'Private backbone with 200+ PoPs worldwide for optimal performance',
      link: '/network'
    },
    {
      icon: '🔒',
      title: 'Unified SASE',
      summary: 'Integrated security and networking in a single cloud platform',
      link: '/sase'
    },
    {
      icon: '⚡',
      title: 'Performance',
      summary: 'Up to 10x faster application performance with intelligent routing',
      link: '/performance'
    },
    {
      icon: '🛡️',
      title: 'Security',
      summary: 'Zero trust security with advanced threat protection',
      link: '/security'
    },
    {
      icon: '📊',
      title: 'Analytics',
      summary: 'Real-time visibility and insights across your entire network',
      link: '/analytics'
    },
    {
      icon: '☁️',
      title: 'Cloud-First',
      summary: 'Seamless cloud connectivity and multi-cloud optimization',
      link: '/cloud'
    }
  ];

  return (
    <section className="product-pillars">
      <div className="container">
        <h2 className="section-title">Why Choose Aryaka</h2>
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className="pillar-card">
              <div className="pillar-icon">{pillar.icon}</div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-summary">{pillar.summary}</p>
              <a href={pillar.link} className="pillar-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Aryaka Zigzag Component
// PUBLIC_INTERFACE
const WhyAryaka = () => {
  const features = [
    {
      title: 'Enterprise-Grade Performance',
      points: [
        'Guaranteed SLAs with 99.99% uptime',
        'Sub-50ms global latency',
        'Intelligent traffic optimization',
        'Real-time application acceleration'
      ],
      visual: 'performance-chart'
    },
    {
      title: 'Unified Security & Networking',
      points: [
        'Zero Trust Network Access (ZTNA)',
        'Cloud-native firewall',
        'Advanced threat detection',
        'Integrated SD-WAN and SSE'
      ],
      visual: 'security-diagram'
    },
    {
      title: 'Global Scale & Reach',
      points: [
        '200+ Points of Presence worldwide',
        'Private backbone infrastructure',
        'Multi-cloud connectivity',
        'Edge computing capabilities'
      ],
      visual: 'global-map'
    }
  ];

  return (
    <section className="why-aryaka">
      <div className="container">
        <h2 className="section-title">The Aryaka Advantage</h2>
        {features.map((feature, index) => (
          <div key={index} className={`feature-row ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="feature-content">
              <h3 className="feature-title">{feature.title}</h3>
              <ul className="feature-points">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="feature-visual">
              <div className={`visual-placeholder ${feature.visual}`}>
                <div className="visual-content">
                  {feature.visual === 'performance-chart' && <div className="chart-bars"></div>}
                  {feature.visual === 'security-diagram' && <div className="security-shield"></div>}
                  {feature.visual === 'global-map' && <div className="world-dots"></div>}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Architecture Visual Component
// PUBLIC_INTERFACE
const ArchitectureVisual = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="architecture-visual">
      <div className="container">
        <h2 className="section-title">Aryaka SASE Architecture</h2>
        <div className={`architecture-diagram ${isAnimated ? 'animated' : ''}`}>
          <div className="architecture-layer layer-1">
            <div className="layer-title">Edge</div>
            <div className="nodes">
              <div className="node">PoP</div>
              <div className="node">PoP</div>
              <div className="node">PoP</div>
            </div>
          </div>
          <div className="architecture-layer layer-2">
            <div className="layer-title">Core</div>
            <div className="core-network">
              <div className="core-node">Global Backbone</div>
            </div>
          </div>
          <div className="architecture-layer layer-3">
            <div className="layer-title">Cloud</div>
            <div className="cloud-services">
              <div className="service">SASE Services</div>
              <div className="service">Security Stack</div>
              <div className="service">Analytics</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Customer Testimonials Component
// PUBLIC_INTERFACE
const CustomerTestimonials = () => {
  const testimonials = [
    {
      quote: "Aryaka has transformed our global network performance. We've seen a 300% improvement in application response times.",
      author: "Sarah Chen",
      title: "CTO",
      company: "Global Manufacturing Corp",
      avatar: "👩‍💼"
    },
    {
      quote: "The unified SASE platform simplified our security stack while improving performance across all our locations.",
      author: "Michael Rodriguez",
      title: "IT Director",
      company: "Financial Services Inc",
      avatar: "👨‍💼"
    },
    {
      quote: "Aryaka's global backbone and local presence gave us the reliability we needed for our critical applications.",
      author: "Lisa Thompson",
      title: "Network Manager",
      company: "Healthcare Solutions",
      avatar: "👩‍⚕️"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="customer-testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-carousel">
          <div className="testimonial active">
            <div className="testimonial-content">
              <blockquote>"{testimonials[currentTestimonial].quote}"</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonials[currentTestimonial].avatar}</div>
                <div className="author-info">
                  <div className="author-name">{testimonials[currentTestimonial].author}</div>
                  <div className="author-title">
                    {testimonials[currentTestimonial].title}, {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Enterprise Trust Logos Component
// PUBLIC_INTERFACE
const EnterpriseTrust = () => {
  const logos = [
    { name: 'Fortune 500 A', logo: '🏢' },
    { name: 'Global Bank', logo: '🏛️' },
    { name: 'Tech Giant', logo: '💻' },
    { name: 'Manufacturing', logo: '🏭' },
    { name: 'Healthcare', logo: '🏥' },
    { name: 'Retail Chain', logo: '🏪' },
    { name: 'Energy Corp', logo: '⚡' },
    { name: 'Telecom', logo: '📡' },
    { name: 'Aviation', logo: '✈️' }
  ];

  return (
    <section className="enterprise-trust">
      <div className="container">
        <h2 className="section-title">Trusted by Global Enterprises</h2>
        <div className="trust-grid">
          {logos.map((company, index) => (
            <div key={index} className="trust-logo">
              <div className="logo-placeholder">{company.logo}</div>
              <span className="company-name">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Use Cases Component
// PUBLIC_INTERFACE
const UseCases = () => {
  const useCases = [
    {
      icon: '🌍',
      title: 'Global Branch Connectivity',
      summary: 'Connect branch offices worldwide with guaranteed performance and security',
      cta: 'Explore Solution'
    },
    {
      icon: '☁️',
      title: 'Cloud Migration',
      summary: 'Accelerate cloud adoption with optimized connectivity to major cloud providers',
      cta: 'Learn More'
    },
    {
      icon: '👥',
      title: 'Remote Workforce',
      summary: 'Enable secure, high-performance access for distributed teams',
      cta: 'Get Started'
    },
    {
      icon: '🔄',
      title: 'Application Optimization',
      summary: 'Boost critical application performance with intelligent acceleration',
      cta: 'View Details'
    },
    {
      icon: '🛡️',
      title: 'Zero Trust Security',
      summary: 'Implement comprehensive security without compromising performance',
      cta: 'Discover More'
    },
    {
      icon: '📈',
      title: 'Digital Transformation',
      summary: 'Modernize your network infrastructure for the digital-first world',
      cta: 'Start Journey'
    }
  ];

  return (
    <section className="use-cases">
      <div className="container">
        <h2 className="section-title">Solutions for Every Use Case</h2>
        <div className="use-cases-grid">
          {useCases.map((useCase, index) => (
            <div key={index} className="use-case-card">
              <div className="use-case-icon">{useCase.icon}</div>
              <h3 className="use-case-title">{useCase.title}</h3>
              <p className="use-case-summary">{useCase.summary}</p>
              <button className="use-case-cta">{useCase.cta} →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Resources Component
// PUBLIC_INTERFACE
const FeaturedResources = () => {
  const resources = [
    {
      type: 'Whitepaper',
      title: 'The Future of SASE: A Complete Guide',
      summary: 'Comprehensive guide to implementing SASE in enterprise environments',
      link: '/resources/sase-guide'
    },
    {
      type: 'Case Study',
      title: 'How Global Corp Reduced Costs by 40%',
      summary: 'Learn how a Fortune 500 company transformed their network infrastructure',
      link: '/resources/case-study-global-corp'
    },
    {
      type: 'Webinar',
      title: 'Zero Trust Network Architecture Best Practices',
      summary: 'Expert insights on implementing zero trust security frameworks',
      link: '/resources/webinar-zero-trust'
    },
    {
      type: 'eBook',
      title: 'Network Performance Optimization Strategies',
      summary: 'Proven techniques to maximize network performance and user experience',
      link: '/resources/performance-ebook'
    }
  ];

  return (
    <section className="featured-resources">
      <div className="container">
        <h2 className="section-title">Featured Resources</h2>
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-tile">
              <div className="resource-type">{resource.type}</div>
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-summary">{resource.summary}</p>
              <a href={resource.link} className="resource-link">
                Download Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Conversion CTA Component
// PUBLIC_INTERFACE
const ConversionCTA = () => {
  return (
    <section className="conversion-cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Transform Your Network?</h2>
          <p className="cta-subtitle">
            Join thousands of enterprises who trust Aryaka for their global networking and security needs.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary btn-large">Get Started Today</button>
            <button className="btn btn-secondary-outline btn-large">Schedule Demo</button>
          </div>
          <div className="cta-benefits">
            <div className="benefit">✓ 30-day free trial</div>
            <div className="benefit">✓ No setup fees</div>
            <div className="benefit">✓ 24/7 support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
// PUBLIC_INTERFACE
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h4 className="footer-title">Solutions</h4>
            <ul className="footer-links">
              <li><a href="/sase">SASE Platform</a></li>
              <li><a href="/sd-wan">SD-WAN</a></li>
              <li><a href="/security">Security Services</a></li>
              <li><a href="/cloud-connect">Cloud Connect</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="/resources">All Resources</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/webinars">Webinars</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/partners">Partners</a></li>
              <li><a href="/newsroom">Newsroom</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4 className="footer-title">Contact</h4>
            <div className="contact-info">
              <p>📧 info@aryaka.com</p>
              <p>📞 +1 (855) 692-7925</p>
              <div className="social-links">
                <a href="#" aria-label="LinkedIn">💼</a>
                <a href="#" aria-label="Twitter">🐦</a>
                <a href="#" aria-label="YouTube">📺</a>
              </div>
              <div className="trust-badges">
                <div className="badge">SOC 2 Certified</div>
                <div className="badge">ISO 27001</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="global-offices">
            <h5>Global Offices</h5>
            <div className="office-map">
              <div className="office">🇺🇸 San Mateo</div>
              <div className="office">🇬🇧 London</div>
              <div className="office">🇸🇬 Singapore</div>
              <div className="office">🇮🇳 Bangalore</div>
            </div>
          </div>
          <div className="footer-legal">
            <p>&copy; 2024 Aryaka Networks. All rights reserved.</p>
            <div className="legal-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
// PUBLIC_INTERFACE
function App() {
  return (
    <div className="App">
      <Hero />
      <ProductPillars />
      <WhyAryaka />
      <ArchitectureVisual />
      <CustomerTestimonials />
      <EnterpriseTrust />
      <UseCases />
      <FeaturedResources />
      <ConversionCTA />
      <Footer />
    </div>
  );
}

export default App;
