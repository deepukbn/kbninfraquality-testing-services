import { useState } from 'react'
import './App.css'

const services = [
  {
    icon: 'laboratory',
    title: 'Construction & highway material testing',
    description: 'Laboratory testing that supports quality decisions across civil construction and road works.',
    details: ['Gradation & Sieve Analysis', 'MDD / OMC and Moisture Content', 'CBR and Field Density', 'Compressive Strength & Binder Quality'],
  },
  {
    icon: 'survey',
    title: 'Project consultancy & inspection',
    description: 'Project management consultancy, third-party inspection, technical consultancy, and surveying.',
    details: ['Project management consultancy', 'Third-party inspection', 'Technical consultancy', 'Total Station surveying'],
  },
  {
    icon: 'test',
    title: 'NDT, restoration & rehabilitation',
    description: 'Non-destructive testing and rehabilitation support for existing civil engineering assets.',
    details: ['Non-destructive testing (NDT)', 'Restoration', 'Rehabilitation'],
  },
  {
    icon: 'structure',
    title: 'Structural health & stability',
    description: 'Structural health assessment and stability services for the built environment.',
    details: ['Structural health assessment', 'Stability assessment'],
  },
]

const sectors = [
  { title: 'Roads & highways', detail: 'Rural roads and highway development', icon: 'road' },
  { title: 'Public infrastructure', detail: 'Public works and civic infrastructure', icon: 'civic' },
  { title: 'Housing & structures', detail: 'Public housing and structural works', icon: 'structure' },
  { title: 'Water & sanitation', detail: 'Drinking water and sanitation projects', icon: 'water' },
  { title: 'Industrial construction', detail: 'Industrial and private-sector projects', icon: 'industry' },
]

const clients = [
  {
    name: 'Karnataka Rural Infrastructure Development Limited (KRIDL)',
    description: 'Supporting essential rural infrastructure through precise material testing and consultancy.',
  },
  {
    name: 'Pradhan Mantri Gram Sadak Yojana (PMGSY)',
    description: 'Contributing to rural road construction by helping ensure material quality and durability in line with national standards.',
  },
  {
    name: 'Karnataka Public Works Department (KPWD)',
    description: 'Material testing and engineering consultancy for public infrastructure projects across Karnataka.',
  },
  {
    name: 'Karnataka State Police Housing Corporation',
    description: 'Supporting the structural integrity and safety of police housing through comprehensive testing.',
  },
  {
    name: 'Karnataka Thanda Development Corporation',
    description: 'Providing precise, reliable testing and consultancy for infrastructure serving Thanda communities.',
  },
  {
    name: 'Rural Drinking Water and Sanitation Department, Karnataka',
    description: 'Supporting water supply and sanitation projects with material testing and quality assurance.',
  },
  {
    name: 'Bharat Electricals Ltd. & Toyota',
    description: 'Material testing to support the quality and safety of construction projects.',
  },
]

const team = [
  { name: 'K P Preetham', role: 'Managing Director' },
  { name: 'K B Gowtham', role: 'Head — QA/QC' },
  { name: 'Jayanth', role: 'Lab Manager' },
]

const mapUrl = 'https://maps.google.com/maps?q=Shop%204%2C%20PadmaShree%20Complex%2C%20Kote%20Road%2C%20near%20New%20Bus%20Stand%2C%20Gulsinda%2C%20Channarayapatna%2C%20Hassan%20573116&output=embed'
const mapLink = 'https://maps.google.com/?q=Shop+4,+PadmaShree+Complex,+Kote+Road,+Channarayapatna,+Hassan+573116'
const publicAsset = (path) => `${import.meta.env.BASE_URL}${path}`

const siteUrl = 'https://www.kbninfraquality.com/';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'KBN InfraQuality Testing Services',
  image: `${siteUrl}kbninfra-logo.jpeg`,
  url: siteUrl,
  telephone: '+91-88927-74691',
  email: 'kbninfraquality@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No. 4, PadmaShree Complex, Kote Road, near New Bus Stand, Gulsinda',
    addressLocality: 'Channarayapatna',
    addressRegion: 'Karnataka',
    postalCode: '573116',
    addressCountry: 'IN',
  },
  areaServed: ['Channarayapatna', 'Hassan District', 'Karnataka'],
  description:
    'KBN InfraQuality Testing Services provides civil engineering material testing, highway material testing, surveying, project consultancy, third-party inspection, NDT, and structural assessment services in Karnataka.',
  priceRange: '$$',
  founder: 'K P Preetham',
  sameAs: ['https://maps.google.com/?q=Shop+4,+PadmaShree+Complex,+Kote+Road,+Channarayapatna,+Hassan+573116'],
}

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true" className={diagonal ? 'arrow arrow-diagonal' : 'arrow'}>↗</span>
}

function Brand({ footer = false }) {
  return (
    <a className={footer ? 'brand brand-footer' : 'brand'} href="#home" aria-label="KBN InfraQuality Testing Services, home">
      <img src={publicAsset('kbninfra-logo.jpeg')} alt="" />
      <span className="brand-name">KBN <small>INFRAQUALITY TESTING SERVICES</small></span>
    </a>
  )
}

function Icon({ name }) {
  const drawings = {
    laboratory: <><path d="M8 3h8M10 3v6L5 19a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3L14 9V3"/><path d="M8 15h8M10 12h4"/></>,
    survey: <><path d="m4 20 8-16 8 16M7 14h10M9 10h6M3 20h18"/><circle cx="12" cy="4" r="1.5"/></>,
    test: <><path d="M7 3h10v4H7zM9 7v5l-3 7a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-3-7V7"/><path d="M8 16h8"/></>,
    structure: <><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-7h6v7M5 10h14"/></>,
    road: <><path d="m8 3-4 18m12-18 4 18M12 5v3m0 4v3m0 4v2"/></>,
    civic: <><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-7h6v7M4 10h16"/></>,
    water: <><path d="M12 3s-6 7-6 12a6 6 0 0 0 12 0c0-5-6-12-6-12Z"/><path d="M9 16a3 3 0 0 0 3 3"/></>,
    industry: <><path d="M3 21V9l6 4V9l6 4V5h6v16H3Z"/><path d="M18 8v2m0 3v2M7 17h2m3 0h2"/></>,
  }

  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{drawings[name]}</svg>
}

function SectionLabel({ children }) {
  return <p className="section-label">{children}</p>
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    ['About', '#about'],
    ['Services', '#services'],
    ['Industries', '#industries'],
    ['Work', '#portfolio'],
    ['Contact', '#contact'],
  ]

  return (
    <header className="site-header">
      <Brand />
      <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
        <span /><span />
      </button>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
        {links.map(([label, href]) => <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="nav-call" href="tel:+918892774691">Call KBN <Arrow /></a>
      </nav>
    </header>
  )
}

function ContactForm() {
  function submitInquiry(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const subject = encodeURIComponent(formData.get('subject'))
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\n\n${formData.get('message')}`,
    )
    window.location.href = `mailto:kbninfraquality@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <form className="contact-form" onSubmit={submitInquiry}>
      <div className="form-heading"><SectionLabel>SEND AN ENQUIRY</SectionLabel><p>Your email app will open with your message ready to send.</p></div>
      <div className="form-grid">
        <label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" /></label>
        <label>Subject<input name="subject" placeholder="How can we help?" required /></label>
        <label className="message-field">Message<textarea name="message" rows="4" placeholder="Tell us about your project or testing requirement" required /></label>
      </div>
      <button className="button button-dark submit-button" type="submit">Prepare enquiry <Arrow /></button>
    </form>
  )
}

function App() {
  return (
    <div className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <p className="hero-overline"><span /> CIVIL ENGINEERING TESTING & CONSULTANCY</p>
            <h1>Precision in<br /><em>every measure.</em></h1>
            <p className="hero-tagline">KBN InfraQuality Testing Services</p>
            <p className="hero-intro">Material testing, surveying, and technical consultancy for construction and infrastructure projects.</p>
            <div className="hero-actions">
              <a className="button button-coral" href="#services">Explore our services <Arrow /></a>
              <a className="hero-contact-link" href="#contact">Talk to our team <Arrow /></a>
            </div>
            <div className="hero-proof"><span className="proof-line" /><p>Quality & safety management<br /><strong>ISO 9001:2015 · ISO 45001:2018</strong></p></div>
          </div>
          <figure className="hero-image">
            <img src={publicAsset('images/sieve-analysis.jpg')} alt="Materials laboratory sieve stack used for gradation and sieve analysis" fetchPriority="high" />
          </figure>
          <a className="hero-scroll" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip" aria-label="Company introduction">
          <p>ENGINEERING<br />YOU CAN MEASURE</p>
          <span className="strip-rule" />
          <p>KBN supports construction quality with civil engineering material testing and surveying services, backed by an experienced professional team.</p>
          <a href="#about" aria-label="Learn about KBN">ABOUT KBN <Arrow /></a>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-visual">
            <img className="about-logo" src={publicAsset('kbninfra-logo.jpeg')} alt="Official KBN InfraQuality Testing Services logo" loading="lazy" />
            <div className="experience-note"><span>AN EXPERIENCED<br />CIVIL ENGINEERING TEAM</span></div>
          </div>
          <div className="about-copy">
            <SectionLabel>ABOUT KBN</SectionLabel>
            <h2>Built on quality.<br /><em>Measured with care.</em></h2>
            <p className="lead-copy">KBN InfraQuality Testing Services is a civil engineering material testing and surveying service provider supporting construction projects with a focus on quality and accuracy.</p>
            <div className="principles"><span>QUALITY</span><span>ACCURACY</span><span>SAFETY</span></div>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap">
            <div className="section-heading">
              <div><SectionLabel>SERVICES & CAPABILITIES</SectionLabel><h2>Technical confidence<br /><em>at every stage.</em></h2></div>
              <p>From laboratory evaluation to field inspection, our services address the material and structural questions that shape infrastructure work.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-card-head"><span className="service-icon"><Icon name={service.icon} /></span></div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  <a href="#contact" className="service-enquiry">Discuss this service <Arrow /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="industries-section section-wrap" id="industries">
          <div className="industry-intro">
            <SectionLabel>INDUSTRIES & SECTORS</SectionLabel>
            <h2>Infrastructure<br /><em>that serves people.</em></h2>
          </div>
          <div className="industry-list">
            {sectors.map((sector) => (
              <article className="industry-row" key={sector.title}>
                <Icon name={sector.icon} />
                <div><h3>{sector.title}</h3><p>{sector.detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="portfolio-section" id="portfolio">
          <div className="section-wrap">
            <div className="section-heading portfolio-heading">
              <div><SectionLabel>FIELD & LAB</SectionLabel><h2>Evidence in<br /><em>the work.</em></h2></div>
              <p>From laboratory analysis to on-site quality checks, KBN supports the decisions behind dependable infrastructure.</p>
            </div>
            <div className="work-grid">
              <figure className="work-item work-wide">
                <div className="work-image"><img src={publicAsset('images/sieve-analysis.jpg')} alt="Laboratory equipment used for gradation and sieve analysis" loading="lazy" /></div>
                <figcaption><span><small>Laboratory Testing</small><strong>Gradation & Sieve Analysis</strong></span></figcaption>
              </figure>
              <figure className="work-item work-tall">
                <div className="work-image"><img src={publicAsset('images/field-testing.jpg')} alt="Field testing equipment at an infrastructure site" loading="lazy" /></div>
                <figcaption><span><small>On-Site Testing</small><strong>Field Testing & Infrastructure</strong></span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="clients-section">
          <div className="section-wrap clients-layout">
            <div className="clients-intro"><SectionLabel>CLIENTS & EXPERIENCE</SectionLabel><h2>Supporting work<br /><em>that matters.</em></h2></div>
            <ul className="client-list">{clients.map((client) => <li key={client.name}><strong>{client.name}</strong><p>{client.description}</p></li>)}</ul>
          </div>
        </section>

        <section className="team-section section-wrap" id="team">
          <div className="section-heading team-heading">
            <div><SectionLabel>PROFESSIONAL TEAM</SectionLabel><h2>People behind<br /><em>the precision.</em></h2></div>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article className="team-card" key={member.name}>
                <p className="team-role">{member.role}</p>
                <h3>{member.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="certifications-section" id="certifications">
          <div className="section-wrap certification-layout">
            <div><SectionLabel>CERTIFICATIONS</SectionLabel><h2>Quality & safety,<br /><em>formally recognized.</em></h2></div>
            <div className="certificate-list">
              <article className="certificate-row"><span className="certificate-emblem">ISO<small>QMS</small></span><div><h3>ISO 9001:2015</h3><p>Quality Management System · Assessed by QRO</p></div></article>
              <article className="certificate-row"><span className="certificate-emblem">ISO<small>OH&S</small></span><div><h3>ISO 45001:2018</h3><p>Occupational Health & Safety Management System</p></div></article>
              <article className="certificate-row"><span className="certificate-emblem">NABL</span><div><h3>ISO/IEC 17025:2017</h3><p>NABL accreditation</p></div></article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap">
            <div className="contact-heading"><div><SectionLabel>CONTACT KBN</SectionLabel><h2>Let’s discuss<br /><em>your next project.</em></h2></div><a className="button button-coral" href="tel:+918892774691">Call +91 88927 74691 <Arrow /></a></div>
            <div className="contact-layout">
              <div className="contact-info">
                <a className="contact-block" href="tel:+918892774691"><span>PHONE</span><strong>+91 88927 74691</strong><Arrow /></a>
                <a className="contact-block" href="mailto:kbninfraquality@gmail.com"><span>EMAIL</span><strong>kbninfraquality@gmail.com</strong><Arrow /></a>
                <div className="contact-block address-block"><span>OFFICE</span><address>Shop No. 4, PadmaShree Complex,<br />Kote Road, near New Bus Stand,<br />Gulsinda, Channarayapatna,<br />Hassan District, Karnataka 573116</address><a className="directions-link" href={mapLink} target="_blank" rel="noreferrer">GET DIRECTIONS <Arrow /></a></div>
                <div className="map-frame"><iframe title="Map to KBN InfraQuality Testing Services in Channarayapatna" src={mapUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main section-wrap"><Brand footer /><p>Precision in Every Measure.<br />Civil engineering testing & consultancy.</p><nav aria-label="Footer navigation"><a href="#about">About</a><a href="#services">Services</a><a href="#industries">Industries</a><a href="#portfolio">Work</a><a href="#contact">Contact</a></nav><a className="footer-phone" href="tel:+918892774691">+91 88927 74691 <Arrow /></a></div>
        <div className="footer-bottom section-wrap"><span>© KBN InfraQuality Testing Services</span><span>Channarayapatna · Karnataka · India</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </div>
  )
}

export default App