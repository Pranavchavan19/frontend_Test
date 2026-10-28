// import { useEffect, useState } from "react";
// import { fetchContent } from "./api.js";
// import SampleForm from "./SampleForm.jsx";

// const NAV = ["About Westfield Medical", "Humipak", "Hospital Sterile Services",
//   "Medical Device Manufacturers", "News", "Job Vacancies", "Contact Us"];

// // function Header() {
// //   return (
// //     <header>
// //       <div className="topbar">
// //         <div className="wrap">
// //           <a href="mailto:sales@westmed.co.uk">sales@westmed.co.uk</a>
// //           <a href="tel:+441761408800">+44 (0)1761 408800</a>
// //         </div>
// //       </div>
// //       <div className="wrap mainbar">
// //         <a className="brand" href="/">Westfield Medical</a>
// //         <nav aria-label="Main">
// //           {NAV.map((n) => (
// //             <a key={n} href="#" className={n === "Humipak" ? "active" : ""}>{n}</a>
// //           ))}
// //         </nav>
// //       </div>
// //     </header>
// //   );
// // }

// function Header() {
//   return (
//     <header>
//       <div className="topbar">
//         <div className="wrap topbar-wrap">
//           <div className="topbar-contact">
//             <a href="mailto:sales@westmed.co.uk">
//               sales@westmed.co.uk
//             </a>
//             <a href="tel:+441761408800">
//               +44 (0)1761 408800
//             </a>
//           </div>

          // <div className="topbar-socials">
          //   {/* X / Twitter */}
          //   <a href="https://x.com/WestfieldMedic1" target="_blank" rel="noreferrer" aria-label="X">
          //     <svg viewBox="0 0 24 24" aria-hidden="true">
          //       <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.5L5.3 22H2.1l7.3-8.4L1.5 2h6.5l4.5 6.9L18.9 2Zm-1.1 18h1.7L6.9 3.9H5.1L17.8 20Z" fill="currentColor" />
          //     </svg>
          //   </a>

          //   {/* Instagram */}
          //   <a href="https://www.instagram.com/westfield_medical/" target="_blank" rel="noreferrer" aria-label="Instagram">
          //     <svg viewBox="0 0 24 24" aria-hidden="true">
          //       <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
          //       <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
          //       <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" />
          //     </svg>
          //   </a>

          //   {/* Email */}
          //   <a href="mailto:sales@westmed.co.uk" aria-label="Email">
          //     <svg viewBox="0 0 24 24" aria-hidden="true">
          //       <rect x="2.5" y="4.5" width="19" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
          //       <path d="m3.5 6 8.5 7 8.5-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          //     </svg>
          //   </a>

            
// {/* LinkedIn */}
// <a
//   href="https://www.linkedin.com/company/westfield-medical-limited/"
//   target="_blank"
//   rel="noreferrer"
//   aria-label="LinkedIn"
//   className="linkedin-social"
// >
//   <svg
//     viewBox="0 0 24 24"
//     aria-hidden="true"
//     fill="currentColor"
//   >
//     <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"/>
//   </svg>
// </a>

//           </div>
//         </div>
//       </div>

//       <div className="wrap mainbar">
//         <a className="brand" href="/">Westfield Medical</a>
//         <nav aria-label="Main">
//           {NAV.map((n) => (
//             <a key={n} href="#" className={n === "Humipak" ? "active" : ""}>
//               {n}
//             </a>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       <div className="wrap footer-grid">
//         <address>
//           <strong>Westfield Medical</strong><br />
//           Second Avenue, Westfield Trading Estate<br />
//           Midsomer Norton, Somerset BA3 4DP
//         </address>
//         <p>Company Registration No. 2769324 | VAT No. 241 2552 40<br />
//           Copyright {new Date().getFullYear()} © Westfield Medical Ltd</p>
//       </div>
//     </footer>
//   );
// }

// function BenefitList({ group }) {
//   return (
//     <div>
//       <h3>{group.heading}</h3>
//       <ul>{group.items.map((i) => <li key={i}>{i}</li>)}</ul>
//     </div>
//   );
// }

// export default function App() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState("");
//   const [showForm, setShowForm] = useState(false);

//   useEffect(() => {
//     fetchContent().then(setData).catch((e) => setError(e.message));
//   }, []);

//   return (
//     <>
//       <Header />
//       <main>
//         {error && <p className="wrap err">{error}</p>}
//         {!data && !error && <p className="wrap">Loading…</p>}
//         {data && (
//           <>
//             <section className="hero" style={{ backgroundImage: `url(${data.heroImage})` }}>
//               <div className="hero-box">
//                 <h1>{data.title}</h1>
//                 <p>{data.tagline}</p>
//               </div>
//             </section>

//             <section className="grey">
//               <div className="wrap intro">
//                 {data.intro.map((p, i) => <p key={i}>{p}</p>)}
//                 <p><strong>{data.robotNote}</strong></p>
//               </div>
//             </section>

//             <section className="blue">
//               <blockquote className="wrap">
//                 <p>“{data.testimonial.quote}”</p>
//                 <footer><strong>{data.testimonial.name}</strong> / {data.testimonial.role}</footer>
//               </blockquote>
//             </section>

//             <section>
//               <div className="wrap highlights">
//                 {data.highlights.map((h) => (
//                   <div key={h.title} className="highlight">
//                     <img src={h.icon} alt="" width="105" height="105" loading="lazy" />
//                     <h5>{h.title}</h5>
//                     <p>{h.text}</p>
//                   </div>
//                 ))}
//               </div>
//             </section>

//             <section className="grey2">
//               <div className="wrap">
//                 <h2>Benefits of using Humipak</h2>
//                 <div className="two-col">
//                   <BenefitList group={data.hospital} />
//                   <BenefitList group={data.cssd} />
//                 </div>
//               </div>
//             </section>

//             <section className="indigo">
//               <div className="wrap">
//                 <h2>Humipak features</h2>
//                 <ul>{data.features.map((f) => <li key={f}>{f}</li>)}</ul>
//               </div>
//             </section>

//             <section className="cta" style={{ backgroundImage: `url(${data.heroImage})` }}>
//               <div className="wrap">
//                 <button className="btn big" onClick={() => setShowForm(true)}>Order Samples Now</button>
//                 <a className="btn big" href="#">Further Information</a>
//               </div>
//             </section>
//           </>
//         )}
//       </main>
//       <Footer />
//       {showForm && <SampleForm onClose={() => setShowForm(false)} />}
//     </>
//   );
// }





import { useEffect, useState } from "react";
import { fetchContent } from "./api.js";
import SampleForm from "./SampleForm.jsx";

const NAV = [
  "About Westfield Medical",
  "Humipak",
  "Hospital Sterile Services",
  "Medical Device Manufacturers",
  "News",
  "Job Vacancies",
  "Contact Us",
];

function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="wrap topbar-wrap">
          <div className="topbar-contact">
            <a href="mailto:sales@westmed.co.uk">
              sales@westmed.co.uk
            </a>
            <a href="tel:+441761408800">
              +44 (0)1761 408800
            </a>
          </div>

          <div className="topbar-socials">
            {/* X / Twitter */}
            <a href="https://x.com/WestfieldMedic1" target="_blank" rel="noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-5-7.5L5.3 22H2.1l7.3-8.4L1.5 2h6.5l4.5 6.9L18.9 2Zm-1.1 18h1.7L6.9 3.9H5.1L17.8 20Z" fill="currentColor" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/westfield_medical/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.5" cy="6.8" r="1.2" fill="currentColor" />
              </svg>
            </a>

            {/* Email */}
            <a href="mailto:sales@westmed.co.uk" aria-label="Email">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2.5" y="4.5" width="19" height="15" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="m3.5 6 8.5 7 8.5-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            {/* LinkedIn */}
<a
  href="https://www.linkedin.com/company/westfield-medical-limited/"
  target="_blank"
  rel="noreferrer"
  aria-label="LinkedIn"
  className="linkedin-social"
>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="currentColor"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"/>
  </svg>
</a>
          </div>
        </div>
      </div>

      <div className="wrap mainbar">
        <a className="brand" href="/">
          Westfield Medical
        </a>

        <nav aria-label="Main">
          {NAV.map((n) => (
            <a
              key={n}
              href="#"
              className={n === "Humipak" ? "active" : ""}
            >
              {n}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <address>
          <strong>Westfield Medical</strong>
          <br />
          Email:{" "}
          <a href="mailto:sales@westmed.co.uk">
            sales@westmed.co.uk
          </a>
          <br />
          Phone:{" "}
          <a href="tel:+441761408800">
            +44 (0)1761 408800
          </a>
        </address>

        <p>
          Humipak — Medical packaging solutions.
          <br />
          © {new Date().getFullYear()} Westfield Medical.
        </p>
      </div>
    </footer>
  );
}

function BenefitList({ group }) {
  return (
    <div>
      <h3>{group.heading}</h3>
      <ul>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function InformationModal({ onClose, onContact }) {
  return (
    <div
      className="modal"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="info-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close information"
        >
          ×
        </button>

        <h2 id="info-title">Further Information</h2>

        <p>
          Discover how Humipak can support hospital sterile
          services and medical device manufacturers.
        </p>

        <h3>About Humipak</h3>

        <p>
          For more information about Humipak products, product
          suitability, or sample requests, contact the Westfield
          Medical team.
        </p>

        <h3>Contact Westfield Medical</h3>

        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:sales@westmed.co.uk">
            sales@westmed.co.uk
          </a>
        </p>

        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+441761408800">
            +44 (0)1761 408800
          </a>
        </p>

        <button
          type="button"
          className="btn big"
          onClick={onContact}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    fetchContent()
      .then(setData)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      <Header />

      <main>
        {error && <p className="wrap err">{error}</p>}

        {!data && !error && (
          <p className="wrap">Loading...</p>
        )}

        
{/* {!data && !error && (
  <div className="loading-container" role="status" aria-live="polite">
    <div className="loader"></div>

    <h2>Please Wait...</h2>

    <p>We're preparing everything for you.</p>

    <span className="loading-text">
      Loading, please wait...
    </span>
  </div>
)} */}


        {data && (
          <>
            <section
              className="hero"
              style={{
                backgroundImage: `url(${data.heroImage})`,
              }}
            >
              <div className="hero-box">
                <h1>{data.title}</h1>
                <p>{data.tagline}</p>
              </div>
            </section>

            <section className="grey">
              <div className="wrap intro">
                {data.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                <p>
                  <strong>{data.robotNote}</strong>
                </p>
              </div>
            </section>

            <section className="blue">
              <blockquote className="wrap">
                <p>“{data.testimonial.quote}”</p>
                <footer>
                  <strong>{data.testimonial.name}</strong>
                  {" / "}
                  {data.testimonial.role}
                </footer>
              </blockquote>
            </section>

            <section>
              <div className="wrap highlights">
                {data.highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="highlight"
                  >
                    <img
                      src={highlight.icon}
                      alt=""
                      width="105"
                      height="105"
                      loading="lazy"
                    />
                    <h5>{highlight.title}</h5>
                    <p>{highlight.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grey2">
              <div className="wrap">
                <h2>Benefits of using Humipak</h2>

                <div className="two-col">
                  <BenefitList group={data.hospital} />
                  <BenefitList group={data.cssd} />
                </div>
              </div>
            </section>

            <section className="indigo">
              <div className="wrap">
                <h2>Humipak features</h2>

                <ul>
                  {data.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section
              className="cta"
              style={{
                backgroundImage: `url(${data.heroImage})`,
              }}
            >
              <div className="wrap">
                <button
                  type="button"
                  className="btn big"
                  onClick={() => setShowForm(true)}
                >
                  Order Samples Now
                </button>

                <button
                  type="button"
                  className="btn big"
                  onClick={() => setShowInfo(true)}
                >
                  Further Information
                </button>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer />

      {showInfo && (
        <InformationModal
          onClose={() => setShowInfo(false)}
          onContact={() => {
            setShowInfo(false);
            setShowForm(true);
          }}
        />
      )}

      {showForm && (
        <SampleForm
          onClose={() => setShowForm(false)}
        />
      )}
    </>
  );
}
