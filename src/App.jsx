
// // import { useEffect, useState } from "react";
// // import { fetchContent } from "./api.js";
// // import SampleForm from "./SampleForm.jsx";

// // const NAV = [
// //   "About Westfield Medical",
// //   "Humipak",
// //   "Hospital Sterile Services",
// //   "Medical Device Manufacturers",
// //   "News",
// //   "Job Vacancies",
// //   "Contact Us",
// // ];

// // function Header() {
// //   return (
// //     <header>
// //       <div className="topbar">
// //         <div className="wrap topbar-wrap">
// //           <div className="topbar-contact">
// //             <a href="mailto:sales@westmed.co.uk">
// //               sales@westmed.co.uk
// //             </a>
// //             <a href="tel:+441761408800">
// //               +44 (0)1761 408800
// //             </a>
// //           </div>

// //           <div className="topbar-socials">
// //             {/* X / Twitter */}
// //             <a href="https://x.com/WestfieldMedic1" target="_blank" rel="noreferrer" aria-label="X">
// //               <svg viewBox="0 0 24 24" aria-hidden="true">
// //                 <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.5L5.3 22H2.1l7.3-8.4L1.5 2h6.5l4.5 6.9L18.9 2Zm-1.1 18h1.7L6.9 3.9H5.1L17.8 20Z" fill="currentColor" />
// //               </svg>
// //             </a>

// //             {/* Instagram */}
// //             <a href="https://www.instagram.com/westfield_medical/" target="_blank" rel="noreferrer" aria-label="Instagram">
// //               <svg viewBox="0 0 24 24" aria-hidden="true">
// //                 <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
// //                 <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
// //                 <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" />
// //               </svg>
// //             </a>

// //             {/* Email */}
// //             <a href="mailto:sales@westmed.co.uk" aria-label="Email">
// //               <svg viewBox="0 0 24 24" aria-hidden="true">
// //                 <rect x="2.5" y="4.5" width="19" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
// //                 <path d="m3.5 6 8.5 7 8.5-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
// //               </svg>
// //             </a>
// //             {/* LinkedIn */}
// // <a
// //   href="https://www.linkedin.com/company/westfield-medical-limited/"
// //   target="_blank"
// //   rel="noreferrer"
// //   aria-label="LinkedIn"
// //   className="linkedin-social"
// // >
// //   <svg
// //     viewBox="0 0 24 24"
// //     aria-hidden="true"
// //     fill="currentColor"
// //   >
// //     <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"/>
// //   </svg>
// // </a>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="wrap mainbar">
// //         <a className="brand" href="/">
// //           Westfield Medical
// //         </a>

// //         <nav aria-label="Main">
// //           {NAV.map((n) => (
// //             <a
// //               key={n}
// //               href="#"
// //               className={n === "Humipak" ? "active" : ""}
// //             >
// //               {n}
// //             </a>
// //           ))}
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // }

// // function Footer() {
// //   return (
// //     <footer>
// //       <div className="wrap footer-grid">
// //         <address>
// //           <strong>Westfield Medical</strong>
// //           <br />
// //           Email:{" "}
// //           <a href="mailto:sales@westmed.co.uk">
// //             sales@westmed.co.uk
// //           </a>
// //           <br />
// //           Phone:{" "}
// //           <a href="tel:+441761408800">
// //             +44 (0)1761 408800
// //           </a>
// //         </address>

// //         <p>
// //           Humipak — Medical packaging solutions.
// //           <br />
// //           © {new Date().getFullYear()} Westfield Medical.
// //         </p>
// //       </div>
// //     </footer>
// //   );
// // }

// // function BenefitList({ group }) {
// //   return (
// //     <div>
// //       <h3>{group.heading}</h3>
// //       <ul>
// //         {group.items.map((item) => (
// //           <li key={item}>{item}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // function InformationModal({ onClose, onContact }) {
// //   return (
// //     <div
// //       className="modal"
// //       onClick={onClose}
// //       role="presentation"
// //     >
// //       <div
// //         className="modal-card"
// //         role="dialog"
// //         aria-modal="true"
// //         aria-labelledby="info-title"
// //         onClick={(event) => event.stopPropagation()}
// //       >
// //         <button
// //           type="button"
// //           className="modal-close"
// //           onClick={onClose}
// //           aria-label="Close information"
// //         >
// //           ×
// //         </button>

// //         <h2 id="info-title">Further Information</h2>

// //         <p>
// //           Discover how Humipak can support hospital sterile
// //           services and medical device manufacturers.
// //         </p>

// //         <h3>About Humipak</h3>

// //         <p>
// //           For more information about Humipak products, product
// //           suitability, or sample requests, contact the Westfield
// //           Medical team.
// //         </p>

// //         <h3>Contact Westfield Medical</h3>

// //         <p>
// //           <strong>Email:</strong>{" "}
// //           <a href="mailto:sales@westmed.co.uk">
// //             sales@westmed.co.uk
// //           </a>
// //         </p>

// //         <p>
// //           <strong>Phone:</strong>{" "}
// //           <a href="tel:+441761408800">
// //             +44 (0)1761 408800
// //           </a>
// //         </p>

// //         <button
// //           type="button"
// //           className="btn big"
// //           onClick={onContact}
// //         >
// //           Contact Us
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function App() {
// //   const [data, setData] = useState(null);
// //   const [error, setError] = useState("");
// //   const [showForm, setShowForm] = useState(false);
// //   const [showInfo, setShowInfo] = useState(false);

// //   useEffect(() => {
// //     fetchContent()
// //       .then(setData)
// //       .catch((err) => setError(err.message));
// //   }, []);

// //   return (
// //     <>
// //       <Header />

      
      


// // <main>
// //   {error && <p className="wrap err">{error}</p>}

// //   {/* 1. Hero Section */}
// //   <section
// //     className="hero"
// //     style={{
// //       backgroundImage: `url(${data?.heroImage || ""})`,
// //     }}
// //   >
// //     <div className="hero-box">
// //       <h1>{data?.title || "Humipak"}</h1>
// //       <p>
// //         {data?.tagline || "Advanced Packaging Solutions"}
// //       </p>
// //     </div>
// //   </section>

// //   {/* 2. Intro Section */}
// //   <section className="grey">
// //     <div className="wrap intro">
// //       {(data?.intro || [
// //         "Humipak provides reliable packaging solutions.",
// //         "Designed for healthcare and medical instrument packaging."
// //       ]).map((paragraph, index) => (
// //         <p key={index}>{paragraph}</p>
// //       ))}

// //       <p>
// //         <strong>
// //           {data?.robotNote || "Reliable packaging solutions for healthcare."}
// //         </strong>
// //       </p>
// //     </div>
// //   </section>

// //   {/* 3. Testimonial Section */}
// //   <section className="blue">
// //     <blockquote className="wrap">
// //       <p>
// //         “{data?.testimonial?.quote ||
// //           "Reliable and effective packaging solutions."}”
// //       </p>

// //       <footer>
// //         <strong>
// //           {data?.testimonial?.name || "Humipak"}
// //         </strong>
// //         {" / "}
// //         {data?.testimonial?.role || "Healthcare Packaging"}
// //       </footer>
// //     </blockquote>
// //   </section>

// //   {/* 4. Highlights Section */}
// //   <section>
// //     <div className="wrap highlights">
// //       {(data?.highlights || [
// //         {
// //           title: "Quality",
// //           text: "Quality-focused packaging solutions.",
// //           icon: ""
// //         },
// //         {
// //           title: "Safety",
// //           text: "Designed for safe instrument handling.",
// //           icon: ""
// //         }
// //       ]).map((highlight, index) => (
// //         <div
// //           key={highlight.title || index}
// //           className="highlight"
// //         >
// //           {highlight.icon && (
// //             <img
// //               src={highlight.icon}
// //               alt=""
// //               width="105"
// //               height="105"
// //               loading="lazy"
// //             />
// //           )}

// //           <h5>{highlight.title}</h5>
// //           <p>{highlight.text}</p>
// //         </div>
// //       ))}
// //     </div>
// //   </section>

// //   {/* 5. Benefits Section */}
// //   <section className="grey2">
// //     <div className="wrap">
// //       <h2>Benefits of using Humipak</h2>

// //       <div className="two-col">
// //         {data?.hospital ? (
// //           <BenefitList group={data.hospital} />
// //         ) : (
// //           <div>
// //             <h3>Hospital Benefits</h3>
// //             <p>Reliable packaging and safe handling.</p>
// //           </div>
// //         )}

// //         {data?.cssd ? (
// //           <BenefitList group={data.cssd} />
// //         ) : (
// //           <div>
// //             <h3>CSSD Benefits</h3>
// //             <p>Supports efficient instrument processing.</p>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   </section>

// //   {/* 6. Features Section */}
// //   <section className="indigo">
// //     <div className="wrap">
// //       <h2>Humipak features</h2>

// //       <ul>
// //         {(data?.features || [
// //           "Reliable packaging solutions",
// //           "Easy handling",
// //           "Quality-focused design"
// //         ]).map((feature, index) => (
// //           <li key={index}>{feature}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   </section>

// //   {/* 7. CTA Section */}
// //   <section
// //     className="cta"
// //     style={{
// //       backgroundImage: `url(${data?.heroImage || ""})`,
// //     }}
// //   >
// //     <div className="wrap">
// //       <button
// //         type="button"
// //         className="btn big"
// //         onClick={() => setShowForm(true)}
// //       >
// //         Order Samples Now
// //       </button>

// //       <button
// //         type="button"
// //         className="btn big"
// //         onClick={() => setShowInfo(true)}
// //       >
// //         Further Information
// //       </button>
// //     </div>
// //   </section>
// // </main>


// //       <Footer />

// //       {showInfo && (
// //         <InformationModal
// //           onClose={() => setShowInfo(false)}
// //           onContact={() => {
// //             setShowInfo(false);
// //             setShowForm(true);
// //           }}
// //         />
// //       )}

// //       {showForm && (
// //         <SampleForm
// //           onClose={() => setShowForm(false)}
// //         />
// //       )}
// //     </>
// //   );
// // }











// import { useEffect, useState } from "react";
// import { fetchContent } from "./api.js";
// import {
//   Menu,
//   X,
//   ArrowRight,
//   Phone,
//   Mail,
//   MapPin,
//   CheckCircle,
//   ShieldCheck,
//   Hospital,
//   Package,
//   Briefcase,
//   Newspaper,
//   Factory,
//   Globe,
//   Linkedin,
//   Instagram,
// } from "lucide-react";

// const navigation = [
//   { label: "About Westfield Medical", id: "about" },
//   { label: "Humipak", id: "humipak" },
//   { label: "Hospital Sterile Services", id: "hospital" },
//   { label: "Medical Device Manufacturers", id: "manufacturers" },
//   { label: "News", id: "news" },
//   { label: "Job Vacancies", id: "careers" },
//   { label: "Contact Us", id: "contact" },
// ];

// function Header({ page, navigate }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleNavigate = (id) => {
//     navigate(id);
//     setMenuOpen(false);
//   };

//   return (
//     <header className="site-header">
//       <div className="top-bar">
//         <div className="container top-bar-inner">
//           <div className="top-contact">
//             <a href="mailto:sales@westmed.co.uk">
//               <Mail size={14} /> sales@westmed.co.uk
//             </a>
//             <a href="tel:+441761408800">
//               <Phone size={14} /> +44 (0)1761 408800
//             </a>
//           </div>

//           <div className="top-socials">
//             <a href="https://www.linkedin.com/company/westfield-medical-limited/" target="_blank" rel="noreferrer">
//               <Linkedin size={15} />
//             </a>
//             <a href="https://www.instagram.com/westfield_medical/" target="_blank" rel="noreferrer">
//               <Instagram size={15} />
//             </a>
//             <a href="https://x.com/WestfieldMedic1" target="_blank" rel="noreferrer">
//               X
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="container nav-container">
//         <button className="brand" onClick={() => handleNavigate("about")}>
//           <span className="brand-mark">W</span>
//           <span className="brand-text">
//             WESTFIELD
//             <small>MEDICAL</small>
//           </span>
//         </button>

//         <button
//           className="mobile-menu-button"
//           onClick={() => setMenuOpen(!menuOpen)}
//           aria-label="Toggle navigation"
//         >
//           {menuOpen ? <X /> : <Menu />}
//         </button>

//         <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
//           {navigation.map((item) => (
//             <button
//               key={item.id}
//               className={page === item.id ? "nav-link active" : "nav-link"}
//               onClick={() => handleNavigate(item.id)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }

// function Footer({ navigate }) {
//   return (
//     <footer className="site-footer">
//       <div className="container footer-grid">
//         <div className="footer-about">
//           <div className="footer-brand">
//             <span className="brand-mark">W</span>
//             <span className="brand-text">
//               WESTFIELD
//               <small>MEDICAL</small>
//             </span>
//           </div>
//           <p>
//             Supporting healthcare and medical device industries with
//             innovative packaging solutions and quality-focused services.
//           </p>
//         </div>

//         <div>
//           <h3>Quick Links</h3>
//           {navigation.map((item) => (
//             <button
//               className="footer-link"
//               key={item.id}
//               onClick={() => navigate(item.id)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>

//         <div>
//           <h3>Contact Information</h3>
//           <p><Mail size={16} /> sales@westmed.co.uk</p>
//           <p><Phone size={16} /> +44 (0)1761 408800</p>
//           <p><Globe size={16} /> www.westmed.co.uk</p>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         <div className="container">
//           © {new Date().getFullYear()} Westfield Medical. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }

// function PageHero({ eyebrow, title, description, image, children }) {
//   return (
//     <section
//       className="page-hero"
//       style={image ? { backgroundImage: `linear-gradient(90deg, rgba(4,35,65,.92), rgba(4,35,65,.45)), url("${image}")` } : {}}
//     >
//       <div className="container page-hero-content">
//         {eyebrow && <span className="eyebrow">{eyebrow}</span>}
//         <h1>{title}</h1>
//         <p>{description}</p>
//         {children}
//       </div>
//     </section>
//   );
// }

// function SectionHeading({ eyebrow, title, description }) {
//   return (
//     <div className="section-heading">
//       {eyebrow && <span className="eyebrow">{eyebrow}</span>}
//       <h2>{title}</h2>
//       {description && <p>{description}</p>}
//     </div>
//   );
// }

// function FeatureCard({ icon: Icon, title, description }) {
//   return (
//     <div className="feature-card">
//       <div className="feature-icon"><Icon size={27} /></div>
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

// function CTA({ title, description, navigate }) {
//   return (
//     <section className="cta-section">
//       <div className="container cta-inner">
//         <div>
//           <span className="eyebrow light">LET'S WORK TOGETHER</span>
//           <h2>{title}</h2>
//           <p>{description}</p>
//         </div>
//         <button className="button button-white" onClick={() => navigate("contact")}>
//           Contact Us <ArrowRight size={18} />
//         </button>
//       </div>
//     </section>
//   );
// }

// /* ---------------- ABOUT PAGE ---------------- */

// function AboutPage({ navigate }) {
//   return (
//     <>
//       <PageHero
//         eyebrow="WELCOME TO WESTFIELD MEDICAL"
//         title="Supporting Better Healthcare Through Innovation"
//         description="We provide specialist medical packaging solutions designed to support healthcare professionals and medical device manufacturers."
//       >
//         <button className="button button-primary" onClick={() => navigate("contact")}>
//           Talk to Our Team <ArrowRight size={18} />
//         </button>
//       </PageHero>

//       <section className="section container two-column">
//         <div>
//           <span className="eyebrow">ABOUT WESTFIELD MEDICAL</span>
//           <h2>Quality, innovation and reliability at the heart of what we do.</h2>
//           <p>
//             Westfield Medical focuses on providing packaging solutions for
//             healthcare environments and medical device manufacturers.
//             Our aim is to support the safe handling, protection and
//             presentation of medical products.
//           </p>
//           <p>
//             We work with customers to understand their requirements and
//             provide solutions that meet the needs of modern healthcare.
//           </p>
//           <button className="button button-primary" onClick={() => navigate("humipak")}>
//             Explore Humipak <ArrowRight size={18} />
//           </button>
//         </div>

//         <div className="about-image">
//           <img
//             src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85"
//             alt="Healthcare professional working in a medical environment"
//           />
//           <div className="image-caption">
//             <ShieldCheck size={28} />
//             <span>Focused on quality and protection</span>
//           </div>
//         </div>
//       </section>

//       <section className="section section-soft">
//         <div className="container">
//           <SectionHeading
//             eyebrow="WHAT MATTERS TO US"
//             title="Our values"
//             description="The principles that guide our approach to customers, products and service."
//           />
//           <div className="feature-grid three">
//             <FeatureCard
//               icon={ShieldCheck}
//               title="Quality"
//               description="A quality-focused approach to products, processes and customer requirements."
//             />
//             <FeatureCard
//               icon={Globe}
//               title="Innovation"
//               description="Continuously exploring practical solutions for changing healthcare needs."
//             />
//             <FeatureCard
//               icon={CheckCircle}
//               title="Reliability"
//               description="Working closely with customers to deliver dependable support and service."
//             />
//           </div>
//         </div>
//       </section>

//       <CTA
//         title="Let's discuss your requirements"
//         description="Speak with our team about your healthcare packaging needs."
//         navigate={navigate}
//       />
//     </>
//   );
// }

// /* ---------------- HUMIPAK PAGE ---------------- */

// function HumipakPage({ data, loading, error, navigate }) {
//   const [showInfo, setShowInfo] = useState(false);

//   const title = data?.title || "HUMIPAK";
//   const tagline = data?.tagline || "Next generation technology";
//   const heroImage = data?.heroImage;

//   return (
//     <>
//       <section
//         className="humipak-hero"
//         style={heroImage ? { backgroundImage: `linear-gradient(90deg, rgba(3,31,58,.92), rgba(3,31,58,.3)), url("${heroImage}")` } : {}}
//       >
//         <div className="container humipak-hero-content">
//           <span className="eyebrow light">WESTFIELD MEDICAL INNOVATION</span>
//           <h1>{title}</h1>
//           <h2>{tagline}</h2>
//           <p>
//             Discover an innovative approach to medical packaging designed
//             around the needs of healthcare professionals.
//           </p>
//           <div className="hero-actions">
//             <button className="button button-primary" onClick={() => navigate("contact")}>
//               Request Information <ArrowRight size={18} />
//             </button>
//             <button className="button button-outline" onClick={() => setShowInfo(true)}>
//               Further Information
//             </button>
//           </div>
//         </div>
//       </section>

//       {loading && (
//         <div className="loading-message">
//           <span className="loader"></span>
//           <p>Loading the latest Humipak information...</p>
//         </div>
//       )}

//       {error && (
//         <div className="container error-message">
//           Unable to load some live content. Please try again later.
//         </div>
//       )}

//       <section className="section container">
//         <SectionHeading
//           eyebrow="INTRODUCING HUMIPAK"
//           title={data?.introTitle || "A smarter approach to medical packaging"}
//           description={data?.introText || "Humipak is designed to support modern healthcare environments with practical, reliable and user-focused packaging solutions."}
//         />

//         <div className="feature-grid three">
//           <FeatureCard
//             icon={ShieldCheck}
//             title="Product Protection"
//             description="Designed to help protect medical products during handling and storage."
//           />
//           <FeatureCard
//             icon={Hospital}
//             title="Healthcare Focus"
//             description="Created with the needs of healthcare professionals and sterile services in mind."
//           />
//           <FeatureCard
//             icon={Package}
//             title="Practical Design"
//             description="A packaging approach focused on usability and efficient workflows."
//           />
//         </div>
//       </section>

//       <section className="section section-soft">
//         <div className="container two-column">
//           <div className="content-panel">
//             <span className="eyebrow">WHY HUMIPAK</span>
//             <h2>{data?.highlightsTitle || "Designed around your workflow"}</h2>
//             <p>
//               Packaging should support the people who use it. Humipak
//               focuses on practical requirements, product handling and
//               the needs of healthcare environments.
//             </p>
//             <ul className="check-list">
//               <li><CheckCircle /> Practical packaging approach</li>
//               <li><CheckCircle /> Designed for healthcare settings</li>
//               <li><CheckCircle /> Focus on product protection</li>
//               <li><CheckCircle /> Customer-focused support</li>
//             </ul>
//             <button className="button button-primary" onClick={() => setShowInfo(true)}>
//               Further Information <ArrowRight size={18} />
//             </button>
//           </div>
//           <div className="visual-card">
//             <Package size={76} />
//             <h3>HUMIPAK</h3>
//             <p>Next generation technology</p>
//           </div>
//         </div>
//       </section>

//       <section className="section container">
//         <SectionHeading
//           eyebrow="APPLICATIONS"
//           title="Supporting different healthcare environments"
//           description="Explore how packaging solutions can support different areas of healthcare and medical manufacturing."
//         />
//         <div className="feature-grid two">
//           <FeatureCard
//             icon={Hospital}
//             title="Hospital Sterile Services"
//             description="Supporting sterile services departments with packaging solutions designed around their workflows."
//           />
//           <FeatureCard
//             icon={Factory}
//             title="Medical Device Manufacturers"
//             description="Supporting manufacturers with packaging solutions for medical device requirements."
//           />
//         </div>
//       </section>

//       <CTA
//         title="Want to know more about Humipak?"
//         description="Contact Westfield Medical to discuss the product and your requirements."
//         navigate={navigate}
//       />

//       {showInfo && (
//         <div className="modal-backdrop" onClick={() => setShowInfo(false)}>
//           <div className="info-modal" onClick={(e) => e.stopPropagation()}>
//             <button className="modal-close" onClick={() => setShowInfo(false)}>
//               <X />
//             </button>
//             <span className="eyebrow">HUMIPAK INFORMATION</span>
//             <h2>Further Information</h2>
//             <p>
//               To learn more about Humipak, its features and suitability
//               for your requirements, please contact the Westfield Medical team.
//             </p>
//             <a className="button button-primary" href="mailto:sales@westmed.co.uk?subject=Humipak%20Information">
//               Email Our Team <ArrowRight size={18} />
//             </a>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// /* ---------------- HOSPITAL PAGE ---------------- */

// function HospitalPage({ navigate }) {
//   return (
//     <>
//       <PageHero
//         eyebrow="HOSPITAL STERILE SERVICES"
//         title="Supporting Hospital Sterile Services"
//         description="Packaging solutions designed to support the handling, protection and preparation of medical instruments in sterile services environments."
//       >
//         <button className="button button-primary" onClick={() => navigate("contact")}>
//           Discuss Your Needs <ArrowRight size={18} />
//         </button>
//       </PageHero>

//       <section className="section container">
//         <SectionHeading
//           eyebrow="CSSD SUPPORT"
//           title="Solutions for sterile services environments"
//           description="Understand the importance of packaging within sterile services workflows."
//         />
//         <div className="feature-grid three">
//           <FeatureCard
//             icon={Package}
//             title="Packaging Support"
//             description="Packaging options designed to support medical instrument handling and preparation."
//           />
//           <FeatureCard
//             icon={ShieldCheck}
//             title="Instrument Protection"
//             description="A focus on protecting instruments through appropriate packaging and handling."
//           />
//           <FeatureCard
//             icon={Hospital}
//             title="Workflow Awareness"
//             description="Solutions developed with the practical needs of healthcare teams in mind."
//           />
//         </div>
//       </section>

//       <section className="section section-soft">
//         <div className="container two-column">
//           <div>
//             <span className="eyebrow">SUPPORTING YOUR TEAM</span>
//             <h2>Designed with healthcare workflows in mind</h2>
//             <p>
//               Sterile services departments need dependable processes and
//               suitable packaging materials. Westfield Medical aims to
//               support these requirements through its product offering.
//             </p>
//             <ul className="check-list">
//               <li><CheckCircle /> Practical product options</li>
//               <li><CheckCircle /> Focus on handling requirements</li>
//               <li><CheckCircle /> Customer support</li>
//             </ul>
//           </div>
//           <div className="illustration-panel">
//             <Hospital size={90} />
//             <h3>Hospital Sterile Services</h3>
//             <p>Supporting healthcare professionals</p>
//           </div>
//         </div>
//       </section>

//       <CTA
//         title="Looking for packaging support?"
//         description="Talk to our team about your hospital sterile services requirements."
//         navigate={navigate}
//       />
//     </>
//   );
// }

// /* ---------------- MANUFACTURERS PAGE ---------------- */

// function ManufacturersPage({ navigate }) {
//   return (
//     <>
//       <PageHero
//         eyebrow="MEDICAL DEVICE MANUFACTURERS"
//         title="Packaging Solutions for Medical Device Manufacturers"
//         description="Explore packaging support for manufacturers looking to protect and present medical devices throughout their processes."
//       >
//         <button className="button button-primary" onClick={() => navigate("contact")}>
//           Contact Our Team <ArrowRight size={18} />
//         </button>
//       </PageHero>

//       <section className="section container">
//         <SectionHeading
//           eyebrow="MANUFACTURING SUPPORT"
//           title="Packaging designed around your product"
//           description="Every medical device has its own requirements. The right packaging approach starts with understanding your product and process."
//         />
//         <div className="feature-grid three">
//           <FeatureCard
//             icon={ShieldCheck}
//             title="Product Protection"
//             description="Consider packaging requirements that help protect products during handling and storage."
//           />
//           <FeatureCard
//             icon={Factory}
//             title="Manufacturing Needs"
//             description="Packaging support aligned with the practical needs of medical device manufacturing."
//           />
//           <FeatureCard
//             icon={Package}
//             title="Product Presentation"
//             description="Packaging options that consider both functionality and product presentation."
//           />
//         </div>
//       </section>

//       <section className="section section-soft">
//         <div className="container two-column">
//           <div className="visual-card manufacturer-visual">
//             <Factory size={78} />
//             <h3>Medical Device Packaging</h3>
//             <p>Product-focused packaging support</p>
//           </div>
//           <div>
//             <span className="eyebrow">WORK WITH US</span>
//             <h2>Let's understand your packaging requirements</h2>
//             <p>
//               Our team can discuss your product, intended use and packaging
//               requirements to help identify suitable options.
//             </p>
//             <button className="button button-primary" onClick={() => navigate("contact")}>
//               Start a Conversation <ArrowRight size={18} />
//             </button>
//           </div>
//         </div>
//       </section>

//       <CTA
//         title="Have a medical device packaging project?"
//         description="Get in touch with Westfield Medical to discuss your project."
//         navigate={navigate}
//       />
//     </>
//   );
// }

// /* ---------------- NEWS PAGE ---------------- */

// function NewsPage({ navigate }) {
//   const articles = [
//     {
//       category: "Company",
//       title: "Discover Westfield Medical",
//       description: "Learn more about our approach to healthcare packaging and the solutions we offer.",
//       icon: Globe,
//     },
//     {
//       category: "Products",
//       title: "Explore the Humipak range",
//       description: "Find out more about Humipak and its role in supporting healthcare packaging needs.",
//       icon: Package,
//     },
//     {
//       category: "Healthcare",
//       title: "Supporting sterile services",
//       description: "Explore packaging considerations for hospital sterile services departments.",
//       icon: Hospital,
//     },
//   ];

//   return (
//     <>
//       <PageHero
//         eyebrow="NEWS & UPDATES"
//         title="News and Insights"
//         description="Explore information about Westfield Medical, our products and the healthcare packaging sector."
//       />

//       <section className="section container">
//         <SectionHeading
//           eyebrow="LATEST INFORMATION"
//           title="Explore our updates"
//           description="Discover more about our products, services and areas of expertise."
//         />
//         <div className="feature-grid three news-grid">
//           {articles.map((article) => (
//             <article className="news-card" key={article.title}>
//               <div className="news-image">
//                 <article.icon size={48} />
//               </div>
//               <div className="news-content">
//                 <span className="news-category">{article.category}</span>
//                 <h3>{article.title}</h3>
//                 <p>{article.description}</p>
//                 <button className="text-button" onClick={() => navigate("humipak")}>
//                   Read More <ArrowRight size={16} />
//                 </button>
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       <CTA
//         title="Stay connected with Westfield Medical"
//         description="Contact our team to learn more about our products and services."
//         navigate={navigate}
//       />
//     </>
//   );
// }

// /* ---------------- CAREERS PAGE ---------------- */

// function CareersPage({ navigate }) {
//   return (
//     <>
//       <PageHero
//         eyebrow="CAREERS AT WESTFIELD MEDICAL"
//         title="Build Your Future With Us"
//         description="Interested in being part of a team supporting healthcare and medical packaging? We'd like to hear from you."
//       >
//         <a
//           className="button button-primary"
//           href="mailto:sales@westmed.co.uk?subject=Career%20Enquiry"
//         >
//           Send an Enquiry <ArrowRight size={18} />
//         </a>
//       </PageHero>

//       <section className="section container">
//         <div className="career-intro">
//           <div>
//             <span className="eyebrow">CAREER OPPORTUNITIES</span>
//             <h2>Interested in working with us?</h2>
//             <p>
//               We welcome enquiries from people interested in learning more
//               about opportunities at Westfield Medical.
//             </p>
//             <p>
//               For information about current vacancies and application
//               requirements, please contact our team directly.
//             </p>
//             <a
//               className="button button-primary"
//               href="mailto:sales@westmed.co.uk?subject=Current%20Vacancies%20Enquiry"
//             >
//               Enquire About Vacancies <ArrowRight size={18} />
//             </a>
//           </div>
//           <div className="career-card">
//             <Briefcase size={58} />
//             <h3>Work with us</h3>
//             <p>Ask our team about current opportunities.</p>
//           </div>
//         </div>
//       </section>

//       <section className="section section-soft">
//         <div className="container">
//           <SectionHeading
//             eyebrow="GET IN TOUCH"
//             title="Take the next step"
//             description="Send us your enquiry and our team can guide you on the next steps."
//           />
//           <div className="center-content">
//             <button className="button button-primary" onClick={() => navigate("contact")}>
//               Contact Westfield Medical <ArrowRight size={18} />
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ---------------- CONTACT PAGE ---------------- */

// function ContactPage() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
//     const mailto = `mailto:sales@westmed.co.uk?subject=${encodeURIComponent(
//       form.subject || "Website Enquiry"
//     )}&body=${encodeURIComponent(body)}`;

//     window.location.href = mailto;
//   };

//   return (
//     <>
//       <PageHero
//         eyebrow="CONTACT WESTFIELD MEDICAL"
//         title="Let's Start a Conversation"
//         description="Have a question about our products or services? Get in touch with our team."
//       />

//       <section className="section container">
//         <div className="contact-layout">
//           <div className="contact-details">
//             <span className="eyebrow">GET IN TOUCH</span>
//             <h2>We'd love to hear from you</h2>
//             <p>
//               Contact our team for product information, general enquiries
//               or to discuss your packaging requirements.
//             </p>

//             <div className="contact-detail">
//               <span className="contact-icon"><Mail /></span>
//               <div>
//                 <h3>Email</h3>
//                 <a href="mailto:sales@westmed.co.uk">sales@westmed.co.uk</a>
//               </div>
//             </div>

//             <div className="contact-detail">
//               <span className="contact-icon"><Phone /></span>
//               <div>
//                 <h3>Telephone</h3>
//                 <a href="tel:+441761408800">+44 (0)1761 408800</a>
//               </div>
//             </div>

//             <div className="contact-detail">
//               <span className="contact-icon"><MapPin /></span>
//               <div>
//                 <h3>Location</h3>
//                 <p>Westfield Medical, United Kingdom</p>
//               </div>
//             </div>
//           </div>

//           <form className="contact-form" onSubmit={handleSubmit}>
//             <h2>Send an Enquiry</h2>
//             <p>Complete the form and your email application will open with your message.</p>

//             <label>Your Name</label>
//             <input
//               type="text"
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               placeholder="Enter your name"
//               required
//             />

//             <label>Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               required
//             />

//             <label>Subject</label>
//             <input
//               type="text"
//               name="subject"
//               value={form.subject}
//               onChange={handleChange}
//               placeholder="Enter subject"
//               required
//             />

//             <label>Message</label>
//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="How can we help you?"
//               rows="5"
//               required
//             />

//             <button className="button button-primary form-submit" type="submit">
//               Send Enquiry <ArrowRight size={18} />
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

// /* ---------------- MAIN APP ---------------- */

// export default function App() {
//   const [page, setPage] = useState(
//     window.location.hash.replace("#", "") || "humipak"
//   );
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const navigate = (id) => {
//     window.location.hash = id;
//     setPage(id);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   useEffect(() => {
//     const handleHashChange = () => {
//       const nextPage = window.location.hash.replace("#", "") || "humipak";
//       setPage(nextPage);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     window.addEventListener("hashchange", handleHashChange);
//     return () => window.removeEventListener("hashchange", handleHashChange);
//   }, []);

//   useEffect(() => {
//     let active = true;

//     async function loadData() {
//       try {
//         const result = await fetchContent();
//         if (active) {
//           setData(result);
//           setError("");
//         }
//       } catch (err) {
//         if (active) {
//           setError(err.message || "Unable to load content");
//         }
//       } finally {
//         if (active) setLoading(false);
//       }
//     }

//     loadData();

//     return () => {
//       active = false;
//     };
//   }, []);

//   const validPage = navigation.some((item) => item.id === page)
//     ? page
//     : "humipak";

//   return (
//     <>
//       <Header page={validPage} navigate={navigate} />

//       <main>
//         {validPage === "about" && <AboutPage navigate={navigate} />}

//         {validPage === "humipak" && (
//           <HumipakPage
//             data={data}
//             loading={loading}
//             error={error}
//             navigate={navigate}
//           />
//         )}

//         {validPage === "hospital" && <HospitalPage navigate={navigate} />}

//         {validPage === "manufacturers" && (
//           <ManufacturersPage navigate={navigate} />
//         )}

//         {validPage === "news" && <NewsPage navigate={navigate} />}

//         {validPage === "careers" && <CareersPage navigate={navigate} />}

//         {validPage === "contact" && <ContactPage />}
//       </main>

//       <Footer navigate={navigate} />
//     </>
//   );
// }





import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import About from "./pages/About";
import Humipak from "./pages/Humipak";
import HospitalServices from "./pages/HospitalServices";
import Manufacturers from "./pages/Manufacturers";
import News from "./pages/News";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />

          <Route path="/about" element={<About />} />
          <Route path="/humipak" element={<Humipak />} />
          <Route path="/hospital" element={<HospitalServices />} />
          <Route path="/manufacturers" element={<Manufacturers />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/about" replace />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}