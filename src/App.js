import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnchor, faShip, faCompass } from "@fortawesome/free-solid-svg-icons";

import ctaBackground from "./images/breakwater-after-sunset-SBI-300145284.jpg";

import logo from "./images/harbourView.png";
import clarBeckett from "./images/testimonials/ClaraBeckett.jpg";
import liamMacInnis from "./images/testimonials/LiamMacInnis.jpg";
import sophieMacDougall from "./images/testimonials/SophieMacDougall.jpg";
import hero from "./images/open-hand-palms-holding-metal-compass.jpg";
import ctaIcon from "./images/cta-icon.svg";

import nasa_Image from "./images/nasa_image_vierwer.jpg";
import taylor_swift from "./images/taylor_swift.jpg";
import fortnite_news from "./images/fortnite_news.jpg";
import marvel_comic_app from "./images/marvel_comic_app.jpg";
import nhl_roster_app from "./images/nhl_roster_app.jpg";
import giphyImage from "./images/giphy_app.jpg";

import product_icon_coding from "./images/coding.png";
import product_icon_fixing from "./images/fixing.png";
import product_icon_hosting from "./images/hosting.png";
import sunsetPhoto from "./images/young-man-enjoying-the-sunset.jpg";
import React, { useRef, useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";
import Contact from "./Contact";

function App() {
  const testimonialRef = useRef(null);
  const portfolioRef = useRef(null);
  const servicesRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (!isContactPage && activeSection) {
      const ref = getRefBySection(activeSection);
      if (ref && ref.current) {
        smoothScrollTo(ref.current, 1500, -100);
        setActiveSection("");
      }
    }
  }, [isContactPage, activeSection]);

  const getRefBySection = (section) => {
    switch (section) {
      case "services":
        return servicesRef;
      case "portfolio":
        return portfolioRef;
      case "testimonials":
        return testimonialRef;
      default:
        return null;
    }
  };

  const showContactForm = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional: adds an animation
    });
    setIsContactPage(true);
  };

  const smoothScrollTo = (element, duration, offset) => {
    const targetY = element.getBoundingClientRect().top + window.scrollY + offset;
    const startY = window.scrollY;
    const change = targetY - startY;
    let currentTime = 0;
    const increment = 20;

    console.log(`Scrolling to ${element.tagName} at position ${targetY}`);

    const animateScroll = () => {
      currentTime += increment;
      const val = easeInOutQuad(currentTime, startY, change, duration);
      window.scrollTo(0, val);
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  };

  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return (
    <div className="app">
      <header>
        <div className="header-logo-container">
          <img onClick={() => setIsContactPage(false)} className="header-logo" src={logo} alt="logo" />
          <div className="header-nav">
            <h1 className="title">HARBOURVIEW DESIGNS</h1>
            <div className="hamburger">
              <Hamburger toggled={isMenuOpen} color="#333" toggle={() => setIsMenuOpen(!isMenuOpen)} />
            </div>
            <nav>
              <ul className={isMenuOpen ? "open" : ""}>
                <li
                  onClick={() => {
                    setIsContactPage(false);
                    setActiveSection("services");
                    setIsMenuOpen(false);
                  }}
                >
                  Services
                </li>
                <li
                  onClick={() => {
                    setIsContactPage(false);
                    setActiveSection("portfolio");
                    setIsMenuOpen(false);
                  }}
                >
                  Portfolio
                </li>
                {/* <li
									onClick={() => {
										setIsContactPage(false);
										setActiveSection("testimonials");
										setIsMenuOpen(false);
									}}
								>
									Testimonials
								</li> */}
                <li
                  onClick={() => {
                    showContactForm();
                    setIsMenuOpen(false);
                  }}
                >
                  Contact
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {isContactPage ? (
        <Contact />
      ) : (
        <div>
          <section
            className="cta"
            style={{
              backgroundImage: `url(${ctaBackground})`,
              height: "500px",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="cta-left">
              <h2>
                Set sail on <span>your</span> digital journey.
              </h2>
              <p>Embark on a voyage of digital transformation with Harbourview Designs.</p>
              <p> Our team of experts will help you navigate the vast sea of the internet and chart a course to success.</p>
              <button className="cta-button" onClick={showContactForm}>
                Get Started
              </button>
            </div>
            <div className="cta-right">
              <img className="cta-icon" src={ctaIcon} alt="webdesign icon" />
            </div>
          </section>
          <section className="tag-line">
            <div className="hero">
              <div className="hero-text">
                <h2>Chart Your Course to Digital Excellence</h2>
                <p>
                  Navigating the digital seas can be daunting, especially when your online lighthouse—your website—no longer guides your ideal
                  clientele to your shores.
                </p>
                <p>
                  Your website should be a true reflection of your unique vision, a beacon attracting your dream clients amidst the fog of online
                  noise. You deserve better than someone selling you a re-packaged wordpress template, shopify or wix site.
                </p>
                <p>
                  HarbourView Designs is your compass in the vast digital ocean, offering you a website that not only stands out but also sets the
                  course for your business growth, making waves in your industry and genuinely impacting your audience.
                </p>
              </div>
              <img src={hero} alt="person holding a compass" />
            </div>
          </section>
          <section>
            <div className="services-container">
              <div className="service-copy">
                <h3>Embark on your Journey of Innovation</h3>
                <FontAwesomeIcon className="service-copy-icons" icon={faCompass} />
                <p>
                  Our bespoke website design service isn't just about creating a site; it's about crafting an online identity that truly encapsulates
                  the essence of your brand.
                </p>
                <p>With a blend of aesthetic appeal and functional design, we ensure your website stands out in the vast sea of the internet.</p>
              </div>
              <div className="service-copy">
                <h3>Set Sail with Seamless Development</h3>
                <FontAwesomeIcon className="service-copy-icons" icon={faShip} />
                <p>From the foundational code to the user-facing interface, our development process is like a well-charted map.</p>
                <p>
                  We use cutting-edge technologies to build websites that are not only visually stunning but also robust, secure, scalable and
                  responsive.
                </p>
              </div>
              <div className="service-copy">
                <h3>Anchor Your Site with Reliable Hosting</h3>
                <FontAwesomeIcon className="service-copy-icons" icon={faAnchor} />

                <p>Your digital presence deserves a safe harbor. </p>
                <p>
                  Our hosting solutions offer unparalleled security, speed, and uptime, ensuring your website is accessible to your audience anytime,
                  anywhere
                </p>
              </div>
            </div>
          </section>
          <section ref={portfolioRef} className="portfolio">
            <div className="portfolio-header">
              <h2>Our Work</h2>
              <p>
                We've had the pleasure of working with a diverse range of clients, from small businesses to large corporations. Here are some of the
                projects we've completed.
              </p>
            </div>
            <div className="portfolio-images">
              <div className="portfolio-image">
                <img src={nasa_Image} alt="nasa media viewer website" />
              </div>
              <div className="portfolio-image">
                <img src={taylor_swift} alt="The Ultimate Taylor Swift App" />
              </div>
              <div className="portfolio-image">
                <img src={fortnite_news} alt="fortnite news viewer" />
              </div>
              <div className="portfolio-image">
                <img src={marvel_comic_app} alt="marvel comic app" />
              </div>
              <div className="portfolio-image">
                <img src={nhl_roster_app} alt="nhl roster app" />
              </div>
              <div className="portfolio-image">
                <img src={giphyImage} alt="giphy app" />
              </div>
            </div>
          </section>
          <section ref={servicesRef} className="products">
            <div className="portfolio-header">
              <h2>Our Services</h2>
            </div>
            <div className="products-container">
              <div className="product">
                <div className="product-header">
                  <img src={product_icon_coding} alt="web development icon" />
                  <h3>We create</h3>
                </div>
                <div className="product-text">
                  <p>
                    At HarbourView Designs, we don't do one-size-fits-all. Our websites are handcrafted, ensuring a dynamic, responsive, and modern
                    web presence that stands out from the sea of template-based sites.
                  </p>
                  <p>
                    Say goodbye to the limitations of platforms like Wix, Shopify, or WordPress templates, and hello to a fully customizable digital
                    landscape that truly reflects your brand's uniqueness and vision.
                  </p>
                </div>
                <button onClick={showContactForm}>Learn More</button>
              </div>
              <div className="product">
                <div className="product-header">
                  <img src={product_icon_fixing} alt="existing site repair icon" />
                  <h3>We fix</h3>
                </div>
                <div className="product-text">
                  <p>
                    Is your website outdated, slow, or not mobile-friendly? We can help. Our team of experts will revamp your existing site, ensuring
                    it's modern, responsive, and functional.
                  </p>
                  <p>
                    We'll work with you to identify areas for improvement and implement solutions that enhance your site's performance, user
                    experience, and visual appeal.
                  </p>
                </div>
                <button onClick={showContactForm}>Learn More</button>
              </div>
              <div className="product">
                <div className="product-header">
                  <img src={product_icon_hosting} alt="hosting icon" />
                  <h3>We host</h3>
                </div>
                <div className="product-text">
                  <p>
                    Your website deserves a safe harbor. Our hosting solutions offer unparalleled security, speed, and uptime, ensuring your site is
                    accessible to your audience anytime, anywhere. We'll take care of the hosting and domain registration.
                  </p>
                  <p>With our reliable hosting services, you can rest easy knowing your digital presence is in good hands.</p>
                </div>
                <button onClick={showContactForm}>Learn More</button>
              </div>
            </div>
          </section>
          <section
            className="sunset"
            style={{
              backgroundImage: `url(${sunsetPhoto})`,
              height: "500px",
              width: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h2>
              Life is beautiful and fleeting - don't spend it wrestling with websites. Leave the complexities to us, and focus on what truly matters.
            </h2>
          </section>
          {/* <section ref={testimonialRef} className="testimonials">
						<div className="testimonial">
							<img src={clarBeckett} alt="Clara Beckett" />
							<p>
								"Harbourview Designs took our outdated website and transformed it into a modern,
								mobile-friendly site that our customers love. The team was professional, responsive,
								and a pleasure to work with."
							</p>
							<p>- Clara Beckett, Nova Seafoods Ltd., Director of Marketing</p>
						</div>
						<div className="testimonial">
							<img src={liamMacInnis} alt="Liam MacInnis" />
							<p>
								"We were blown away by the quality of work and level of professionalism Harbourview
								Designs provided. They created a website that not only met our specifications but
								exceeded our expectations."
							</p>
							<p>- Liam MacInnis, Highland Retreats, Owner</p>
						</div>

						<div className="testimonial">
							<img src={sophieMacDougall} alt="Sophie MacDougall" />
							<p>
								"Harbourview Designs was a pleasure to work with. They were able to take our vision
								and turn it into a reality. The team was responsive, creative, and professional
								throughout the entire process."
							</p>
							<p>-Sophie MacDougall, COO, East Coast Craft Brewers</p>
						</div>
					</section> */}
        </div>
      )}
      <footer>
        <div className="footer-logo-container">
          <img className="footer-logo" src={logo} alt="logo" />
          <div className="footer-nav">
            <nav>
              <ul>
                <li
                  onClick={() => {
                    setIsContactPage(false);
                    setActiveSection("services");
                  }}
                >
                  Services
                </li>
                <li
                  onClick={() => {
                    setIsContactPage(false);
                    setActiveSection("portfolio");
                  }}
                >
                  Portfolio
                </li>
                {/* <li
									onClick={() => {
										setIsContactPage(false);
										setActiveSection("testimonials");
									}}
								>
									Testimonials
								</li> */}
                <li onClick={() => setIsContactPage(true)}>Contact</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="footer-copy">
          <p>&copy; 2024 HarbourView Designs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
