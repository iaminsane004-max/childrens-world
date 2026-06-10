"use client";

import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";
import Facilities from "../components/Facilities";
import Gallery from "../components/Gallery";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Baby,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Clock,
  Phone,
  Mail,
  Menu,
  X,
  MapPin
} from "lucide-react";

// Inline Kawaii SVG Character Helpers for instant illustration loads
export function MrPencil() {
  return (
    <svg viewBox="0 0 100 160" className="w-20 h-32 select-none pointer-events-none filter drop-shadow-[3px_3px_0px_rgba(45,42,38,0.15)]">
      {/* Body */}
      <rect x="25" y="40" width="50" height="80" fill="#FFDC60" stroke="#2D2A26" strokeWidth="4.5" rx="4" />
      {/* Lead Tip */}
      <polygon points="25,40 50,8 75,40" fill="#FCE4D6" stroke="#2D2A26" strokeWidth="4.5" />
      <polygon points="41,20 50,8 59,20" fill="#2D2A26" stroke="#2D2A26" strokeWidth="2" />
      {/* Eraser */}
      <rect x="25" y="115" width="50" height="18" fill="#FFA984" stroke="#2D2A26" strokeWidth="4.5" rx="4" />
      <rect x="25" y="108" width="50" height="8" fill="#A5DEE4" stroke="#2D2A26" strokeWidth="4.5" />
      {/* Face */}
      <circle cx="42" cy="72" r="5" fill="#2D2A26" />
      <circle cx="58" cy="72" r="5" fill="#2D2A26" />
      {/* Smile */}
      <path d="M 45 84 Q 50 90 55 84" fill="none" stroke="#2D2A26" strokeWidth="4" strokeLinecap="round" />
      {/* Rosy cheeks */}
      <circle cx="35" cy="78" r="3.5" fill="#FFA984" opacity="0.85" />
      <circle cx="65" cy="78" r="3.5" fill="#FFA984" opacity="0.85" />
      {/* Legs */}
      <line x1="40" y1="133" x2="40" y2="148" stroke="#2D2A26" strokeWidth="5" strokeLinecap="round" />
      <line x1="60" y1="133" x2="60" y2="148" stroke="#2D2A26" strokeWidth="5" strokeLinecap="round" />
      {/* Arms */}
      <path d="M 25 76 Q 12 68 8 78" fill="none" stroke="#2D2A26" strokeWidth="4.5" strokeLinecap="round" />
      <path d="M 75 76 Q 88 64 94 54" fill="none" stroke="#2D2A26" strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export function Booky() {
  return (
    <svg viewBox="0 0 120 140" className="w-24 h-28 select-none pointer-events-none filter drop-shadow-[3px_3px_0px_rgba(45,42,38,0.15)]">
      {/* Pages Shadow */}
      <rect x="25" y="35" width="75" height="85" fill="#EAE8E4" stroke="#2D2A26" strokeWidth="5" rx="12" />
      {/* Book Spine / Cover */}
      <rect x="20" y="30" width="75" height="85" fill="#B1E5C9" stroke="#2D2A26" strokeWidth="5" rx="12" />
      {/* Page lines indicator */}
      <line x1="86" y1="40" x2="86" y2="110" stroke="#2D2A26" strokeWidth="3.5" strokeDasharray="2 3" />
      {/* Bookmark ribbon */}
      <path d="M 48 30 L 48 60 L 53 53 L 58 60 L 58 30" fill="#FFA984" stroke="#2D2A26" strokeWidth="3" />
      {/* Face */}
      <circle cx="44" cy="72" r="5" fill="#2D2A26" />
      <circle cx="66" cy="72" r="5" fill="#2D2A26" />
      <path d="M 50 84 Q 55 89 60 84" fill="none" stroke="#2D2A26" strokeWidth="4" strokeLinecap="round" />
      {/* Cheek dots */}
      <circle cx="36" cy="77" r="3" fill="#FFA984" opacity="0.85" />
      <circle cx="74" cy="77" r="3" fill="#FFA984" opacity="0.85" />
      {/* Legs */}
      <line x1="43" y1="115" x2="38" y2="132" stroke="#2D2A26" strokeWidth="4.5" strokeLinecap="round" />
      <line x1="68" y1="115" x2="73" y2="132" stroke="#2D2A26" strokeWidth="4.5" strokeLinecap="round" />
      {/* Arms */}
      <path d="M 20 73 Q 10 80 14 89" fill="none" stroke="#2D2A26" strokeWidth="4" strokeLinecap="round" />
      <path d="M 95 73 Q 105 80 101 89" fill="none" stroke="#2D2A26" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function Appy() {
  return (
    <svg viewBox="0 0 100 110" className="w-20 h-22 select-none pointer-events-none filter drop-shadow-[3px_3px_0px_rgba(45,42,38,0.15)]">
      {/* Leaf Stem */}
      <path d="M 50 30 Q 55 12 65 18" fill="none" stroke="#2D2A26" strokeWidth="5" strokeLinecap="round" />
      <path d="M 58 16 Q 64 8 72 16 Q 64 22 58 16 Z" fill="#B1E5C9" stroke="#2D2A26" strokeWidth="3" />
      {/* Body */}
      <path d="M 20 50 C 15 35, 40 28, 50 38 C 60 28, 85 35, 80 50 C 75 75, 65 92, 50 90 C 35 92, 25 75, 20 50 Z" fill="#FFA984" stroke="#2D2A26" strokeWidth="5" />
      {/* Face */}
      <circle cx="40" cy="56" r="4.5" fill="#2D2A26" />
      <circle cx="60" cy="56" r="4.5" fill="#2D2A26" />
      <path d="M 46 68 Q 50 73 54 68" fill="none" stroke="#2D2A26" strokeWidth="3.5" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="32" cy="62" r="3" fill="#2D2A26" opacity="0.1" />
      <circle cx="68" cy="62" r="3" fill="#2D2A26" opacity="0.1" />
      {/* Little tiny feet */}
      <path d="M 38 90 C 38 96, 42 96, 42 90" fill="none" stroke="#2D2A26" strokeWidth="4" strokeLinecap="round" />
      <path d="M 62 90 C 62 96, 58 96, 58 90" fill="none" stroke="#2D2A26" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Contact form state
  const [parentName, setParentName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [program, setProgram] = useState("Infant Care");
  const [inquiryDetails, setInquiryDetails] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!parentName.trim()) {
      alert("Please enter your name");
      return;
    }
    const formattedPhone = "919387257010";
    const text = `Hi! I'm ${parentName}. I would like to inquire about ${program} for my ${childAge || "N/A"} year child. Details: ${inquiryDetails || "None provided"}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Page Loading screen timer (Desktop only)
  useEffect(() => {
    if (!isMobileView && isLoading) {
      const timer = setTimeout(() => setIsLoading(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [isMobileView, isLoading]);

  // Sticky Nav state listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bubbly staggered child container animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  } as const;

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } }
  } as const;

  return (
    <div className="min-h-screen bg-canvas text-charcoal font-quicksand font-bold selection:bg-sunny-yellow/40">
      
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            {isMobileView ? (
              <>
                {/* Solid dark background to ensure homepage is hidden while video loads */}
                <div className="absolute inset-0 bg-charcoal z-0" />

                {/* Mobile View: Full background video */}
                <video
                  src="/123.mp4"
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
                
                {/* Subtle dark overlay to ensure readability of the logo and button */}
                <div className="absolute inset-0 bg-black/40 z-20 pointer-events-none" />

                {/* Content */}
                <div className="relative z-30 flex flex-col items-center justify-between h-[65vh] px-6 text-center">
                  <div className="flex-1 flex flex-col items-center justify-center">
                    {/* Logo only */}
                    <div className="text-4xl font-fredoka font-extrabold text-white flex flex-col items-center gap-3 drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                      <span>CHILDREN&apos;S</span>
                      <span className="bg-sunny-yellow text-charcoal px-4 py-1.5 rounded-2xl border-3 border-charcoal shadow-[4px_4px_0px_0px_#2D2A26] inline-block -rotate-2">
                        WORLD
                      </span>
                    </div>
                  </div>

                  {/* Click/Tap to Enter Prompt */}
                  <div className="w-full flex justify-center pb-6">
                    <button
                      onClick={() => setIsLoading(false)}
                      className="cartoon-btn bg-sunny-yellow text-charcoal text-base px-8 py-3.5 w-full max-w-[280px] cursor-pointer shadow-[5px_5px_0px_0px_#2D2A26] active:translate-y-1 active:shadow-[2px_2px_0px_0px_#2D2A26] transition-all"
                    >
                      Proceed to Home Page
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Desktop View: Solid yellow background */}
                <div className="absolute inset-0 bg-sunny-yellow z-0" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="mb-8"
                  >
                    <Appy />
                  </motion.div>
                  <motion.h1
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-fredoka font-extrabold text-charcoal tracking-wide text-center uppercase px-6"
                  >
                    CHILDREN&apos;S WORLD
                  </motion.h1>
                  <span className="text-xs uppercase font-fredoka tracking-[0.25em] text-charcoal/60 mt-4 px-4">
                    Making learning happy & simple since 2002
                  </span>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comic Book Nav Bar */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? "bg-white border-b-4 border-charcoal py-3 shadow-[0_4px_0_0_#2D2A26]" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-xl md:text-2xl font-fredoka font-extrabold text-charcoal flex items-center gap-2">
            CHILDREN&apos;S 
            <span className="bg-sunny-yellow text-charcoal px-2 py-0.5 rounded-xl border-3 border-charcoal shadow-[3px_3px_0px_0px_#2D2A26] inline-block -rotate-2">
              WORLD
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-5 items-center">
            <a href="#about" className="hover:text-coral-peach font-fredoka text-sm transition-colors px-3 py-1 rounded-lg border-2 border-transparent hover:border-charcoal hover:bg-canvas">About</a>
            <a href="#programs" className="hover:text-coral-peach font-fredoka text-sm transition-colors px-3 py-1 rounded-lg border-2 border-transparent hover:border-charcoal hover:bg-canvas">Programs</a>
            <a href="#facilities" className="hover:text-coral-peach font-fredoka text-sm transition-colors px-3 py-1 rounded-lg border-2 border-transparent hover:border-charcoal hover:bg-canvas">Facilities</a>
            <a href="#gallery" className="hover:text-coral-peach font-fredoka text-sm transition-colors px-3 py-1 rounded-lg border-2 border-transparent hover:border-charcoal hover:bg-canvas">Gallery</a>
            <a href="#contact" className="cartoon-btn bg-coral-peach text-white text-xs px-4 py-2 hover:bg-coral-peach/90">
              Enroll Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-1.5 border-3 border-charcoal rounded-xl bg-white text-charcoal shadow-[2px_2px_0px_0px_#2D2A26]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-charcoal p-6 flex flex-col space-y-3 shadow-[0_4px_0_0_#2D2A26]">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-fredoka text-sm px-4 py-2 border-2 border-charcoal rounded-xl bg-canvas text-charcoal">About</a>
            <a href="#programs" onClick={() => setMobileMenuOpen(false)} className="font-fredoka text-sm px-4 py-2 border-2 border-charcoal rounded-xl bg-canvas text-charcoal">Programs</a>
            <a href="#facilities" onClick={() => setMobileMenuOpen(false)} className="font-fredoka text-sm px-4 py-2 border-2 border-charcoal rounded-xl bg-canvas text-charcoal">Facilities</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="font-fredoka text-sm px-4 py-2 border-2 border-charcoal rounded-xl bg-canvas text-charcoal">Gallery</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="cartoon-btn bg-coral-peach text-white py-2 text-center text-sm">
              Enroll Now
            </a>
          </div>
        )}
      </nav>

      {/* Illustrative Hero Section */}
      <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="lg:col-span-7">
            <span className="bg-lilac-purple text-charcoal px-3.5 py-1 text-xs font-bold font-fredoka rounded-full border-2 border-charcoal inline-block mb-4 -rotate-1 shadow-[2px_2px_0px_0px_#2D2A26]">
              WELCOME TO HAPPY LEARNING!
            </span>
            <h1 className="text-4xl md:text-6xl font-fredoka font-extrabold text-charcoal mb-6 leading-tight">
              Simple, happy child care & tuitions
            </h1>
            <p className="text-base md:text-lg text-charcoal/85 mb-8 max-w-xl font-quicksand font-semibold leading-relaxed">
              We believe education should be visual, colorful, and fun! For 24 years, our home campus has provided loving daycare, preschool programs, and primary-to-high school tutoring.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#contact" className="cartoon-btn bg-coral-peach text-white text-base px-6 py-3.5 w-full sm:w-auto text-center">
                Enroll Today
              </a>
              <a href="#about" className="cartoon-btn bg-white text-charcoal text-base px-6 py-3.5 w-full sm:w-auto text-center">
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Staggered Floating Kawaii Characters */}
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md bg-sky-cyan border-4 border-charcoal rounded-[2.5rem] p-10 shadow-[8px_8px_0px_0px_#2D2A26] flex items-center justify-center gap-4 min-h-[260px]">
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="z-10">
                <MrPencil />
              </motion.div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut", delay: 0.3 }} className="z-10 -mt-6">
                <Booky />
              </motion.div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 2.0, ease: "easeInOut", delay: 0.6 }} className="z-10">
                <Appy />
              </motion.div>
              <div className="absolute bottom-4 text-center font-fredoka text-xs text-charcoal/70 uppercase tracking-widest font-bold">
                Our Waving Friends
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bubbly Trust Stats Section */}
      <section className="py-12 bg-white border-y-4 border-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8 md:gap-16 text-center"
          >
            {[
              { label: "Community Trust", value: "Est. 2002", color: "bg-sunny-yellow" },
              { label: "Qualified Team", value: "Best Faculty", color: "bg-mint-green" },
              { label: "Secured Campus", value: "Safe Campus", color: "bg-coral-peach" },
            ].map((stat, idx) => (
              <motion.div key={idx} variants={fadeInUp} className="flex flex-col items-center">
                <div className={`w-32 h-32 rounded-full border-4 border-charcoal ${stat.color} shadow-[4px_4px_0px_0px_#2D2A26] flex flex-col items-center justify-center p-3 mb-4 -rotate-1 hover:rotate-2 transition-transform`}>
                  <div className="text-lg md:text-xl font-fredoka font-extrabold text-charcoal leading-none mb-1">{stat.value}</div>
                </div>
                <div className="text-xs font-fredoka font-extrabold text-charcoal uppercase tracking-wider max-w-[150px]">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Playful Programs Section */}
      <section id="programs" className="py-20 bg-lilac-purple/15 border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="bg-mint-green text-charcoal px-3 py-1 text-xs font-bold font-fredoka rounded-full border-2 border-charcoal inline-block mb-3 shadow-[2px_2px_0px_0px_#2D2A26]">
              OUR PROGRAMS
            </span>
            <h2 className="text-3xl md:text-4xl font-fredoka font-extrabold text-charcoal mb-4">Classes We Offer</h2>
            <p className="text-charcoal/80 max-w-xl mx-auto text-sm md:text-base font-semibold">
              Tailored study and development guides to fit every milestone of childhood.
            </p>
          </div>

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8"
          >
            {[
              { title: "Infant Care", age: "2 to 18 Months", desc: "Safe nurseries with personal cribs, sensory play guides, and feeding logs.", time: "Full & Half Day", bg: "bg-white", icon: <Baby size={22} className="text-charcoal" /> },
              { title: "Preschool", age: "1.5 to 4 Years", desc: "Fun illustrative group play for early letters, motor skills, and creative crafts.", time: "8:30 AM - 12:30 PM", bg: "bg-sunny-yellow", icon: <BookOpen size={22} className="text-charcoal" /> },
              { title: "Primary Care", age: "7 to 12 Years", desc: "After-school study prep, healthy lunches, and complete homework reviews.", time: "1:00 PM - 6:30 PM", bg: "bg-coral-peach", icon: <ShieldCheck size={22} className="text-charcoal" /> },
              { title: "Tuition Center", age: "KG to High School", desc: "Math, Science, and Language prep guides led by patient subject mentors.", time: "Flexible blocks", bg: "bg-sky-cyan", icon: <GraduationCap size={22} className="text-charcoal" /> },
              { title: "Extended Care", age: "Corporate Families", desc: "Late child supervision with bedtime storybooks, dinner, and free play.", time: "Until 8:00 PM", bg: "bg-lilac-purple", icon: <Clock size={22} className="text-charcoal" /> },
            ].map((program, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className={`cartoon-card ${program.bg} p-6 flex flex-col justify-between w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)]`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border-3 border-charcoal shadow-[2px_2px_0px_0px_#2D2A26] flex items-center justify-center mb-5">
                    {program.icon}
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-fredoka font-extrabold text-charcoal">{program.title}</h3>
                    <span className="text-[9px] font-fredoka font-extrabold uppercase bg-white border-2 border-charcoal px-2 py-0.5 rounded-full text-charcoal">
                      {program.age}
                    </span>
                  </div>
                  <p className="text-charcoal/80 text-xs font-semibold leading-relaxed mb-4">{program.desc}</p>
                </div>
                <div className="pt-3 border-t-2 border-charcoal/20 flex items-center justify-between text-[11px] font-fredoka font-extrabold text-charcoal/60">
                  <span>Schedule:</span>
                  <span className="text-charcoal">{program.time}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Campus Facilities */}
      <Facilities />

      {/* Daycare Video Showcase Section */}
      <section className="py-20 bg-sunny-yellow/10 border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Portrait Video Player */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] aspect-[9/16] bg-white border-4 border-charcoal rounded-[2rem] shadow-[8px_8px_0px_0px_#2D2A26] overflow-hidden group">
                <video 
                  src="/123.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                />
              </div>
            </div>

            {/* Right Column: Info & Details */}
            <div className="lg:col-span-7">
              <span className="bg-lilac-purple text-charcoal px-3 py-1 text-xs font-bold font-fredoka rounded-full border-2 border-charcoal inline-block mb-3 shadow-[2px_2px_0px_0px_#2D2A26]">
                DAYCARE VIDEO TOUR
              </span>
              <h2 className="text-3xl md:text-4xl font-fredoka font-extrabold text-charcoal mb-6 leading-tight">
                See How Our Daycare Sparkles!
              </h2>
              <p className="text-charcoal/80 text-sm md:text-base mb-8 font-semibold leading-relaxed">
                We provide a safe, reliable, and supportive second home for your children. From school pickups and academic tuitions to warm, homely meals and flexible timings, we are here to support working families.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { title: "Homely Food", desc: "Homely, fresh meals arranged for kids even at short notice.", bg: "bg-sunny-yellow" },
                  { title: "School Pick-Up", desc: "Convenient pickup from local schools available for kids.", bg: "bg-mint-green" },
                  { title: "Flexible Timings", desc: "Extended and supportive timings on request for working parents.", bg: "bg-coral-peach" },
                  { title: "School Tuition", desc: "Experienced tutors for dedicated homework and study help.", bg: "bg-sky-cyan" },
                ].map((item, idx) => (
                  <div key={idx} className="cartoon-card bg-white p-5 flex flex-col items-start">
                    <div className={`w-8 h-8 rounded-lg ${item.bg} border-2 border-charcoal shadow-[2px_2px_0px_0px_#2D2A26] mb-3`} />
                    <h3 className="text-sm font-fredoka font-extrabold text-charcoal mb-1">{item.title}</h3>
                    <p className="text-charcoal/70 text-xs font-semibold">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Visual Polaroid Gallery */}
      <Gallery />

      {/* Parent Testimonials */}
      <Testimonials />

      {/* Bubbly Contact Section */}
      <section id="contact" className="py-20 bg-canvas relative overflow-hidden border-t-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-lilac-purple border-4 border-charcoal shadow-[8px_8px_0px_0px_#2D2A26] rounded-[2rem] p-8 md:p-14 text-charcoal relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-12 relative z-10 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-fredoka font-extrabold mb-4 text-charcoal">Let&apos;s talk learning!</h2>
                <p className="text-charcoal/80 text-sm md:text-base mb-8 leading-relaxed font-semibold">
                  Want to see our happy learning areas? Inquire below or message our support desk to schedule a tour!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-white border-3 border-charcoal flex items-center justify-center text-charcoal flex-shrink-0"><MapPin size={18} /></div>
                    <div>
                      <div className="text-[10px] text-charcoal/60 font-fredoka font-extrabold uppercase">Campus Address</div>
                      <div className="font-fredoka font-extrabold text-xs text-charcoal leading-snug">Christ Nagar Rd, Kanaka Nagar, Kowdiar, Thiruvananthapuram, Kerala 695003</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-white border-3 border-charcoal flex items-center justify-center text-charcoal flex-shrink-0"><Phone size={18} /></div>
                    <div>
                      <div className="text-[10px] text-charcoal/60 font-fredoka font-extrabold uppercase">Phone Inquiry</div>
                      <div className="font-fredoka font-extrabold text-sm text-charcoal">+91 93872 57010</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-white border-3 border-charcoal flex items-center justify-center text-charcoal flex-shrink-0"><Mail size={18} /></div>
                    <div>
                      <div className="text-[10px] text-charcoal/60 font-fredoka font-extrabold uppercase">Email Desk</div>
                      <div className="font-fredoka font-extrabold text-sm text-charcoal">childrensworlddc.2002@gmail.com</div>
                    </div>
                  </div>
                </div>

                {/* Google Maps Cartoon Frame */}
                <div className="mt-6 rounded-2xl border-4 border-charcoal overflow-hidden shadow-[4px_4px_0px_0px_#2D2A26] h-48 bg-white">
                  <iframe 
                    src="https://maps.google.com/maps?q=Children's%20World%20Kowdiar%20Thiruvananthapuram%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0" 
                    allowFullScreen={false} 
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              {/* Bubbly Form */}
              <div className="bg-white rounded-2xl p-6 md:p-8 text-charcoal border-4 border-charcoal shadow-[4px_4px_0px_0px_#2D2A26]">
                <h3 className="text-xl font-fredoka font-extrabold mb-5 text-charcoal">Send a Message</h3>
                <form className="space-y-4" onSubmit={handleContactSubmit}>
                  <div>
                    <label className="block text-[10px] font-fredoka font-extrabold text-charcoal uppercase tracking-wider mb-1">Parent&apos;s Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-2.5 cartoon-input text-xs font-semibold" 
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-fredoka font-extrabold text-charcoal uppercase tracking-wider mb-1">Child&apos;s Age</label>
                      <input 
                        type="text" 
                        placeholder="Age" 
                        className="w-full px-4 py-2.5 cartoon-input text-xs font-semibold" 
                        value={childAge}
                        onChange={(e) => setChildAge(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-fredoka font-extrabold text-charcoal uppercase tracking-wider mb-1">Select Program</label>
                      <select 
                        className="w-full px-4 py-2.5 cartoon-input text-xs font-semibold text-charcoal"
                        value={program}
                        onChange={(e) => setProgram(e.target.value)}
                      >
                        <option>Infant Care</option>
                        <option>Preschool</option>
                        <option>Primary Care</option>
                        <option>Tuition Center</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-fredoka font-extrabold text-charcoal uppercase tracking-wider mb-1">Inquiry Details</label>
                    <textarea 
                      placeholder="Tell us how we can help..." 
                      rows={3} 
                      className="w-full px-4 py-2.5 cartoon-input text-xs font-semibold resize-none"
                      value={inquiryDetails}
                      onChange={(e) => setInquiryDetails(e.target.value)}
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full cartoon-btn bg-sunny-yellow text-charcoal py-3 text-sm">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comic Footer */}
      <footer className="bg-charcoal text-white py-12 text-xs text-center border-t-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-lg font-fredoka font-extrabold text-white flex items-center gap-2">
            CHILDREN&apos;S 
            <span className="bg-sunny-yellow text-charcoal px-2 py-0.5 rounded-lg border-2 border-charcoal inline-block -rotate-1">
              WORLD
            </span>
          </div>
          <div className="flex space-x-6 font-fredoka font-extrabold">
            <a href="#" className="hover:text-sunny-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sunny-yellow transition-colors">Terms of Service</a>
          </div>
          <div className="text-[10px] text-white/40 font-fredoka">
            &copy; 2026 Children&apos;s World. Handcrafted with happy outlines.
          </div>
        </div>
      </footer>
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919387257010"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA56] text-white rounded-full border-4 border-charcoal shadow-[4px_4px_0px_0px_#2D2A26] hover:scale-105 active:scale-95 transition-transform group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.393 9.805-9.799.002-2.592-1.002-5.029-2.829-6.858C16.427 2.12 13.998.985 11.993.985c-5.405 0-9.806 4.394-9.809 9.801-.001 1.733.454 3.424 1.32 4.93L2.43 20.306l4.217-1.152zM17.067 14c-.274-.137-1.62-.8-1.87-.892-.252-.093-.437-.137-.62.137-.184.274-.71.892-.87 1.075-.158.184-.317.205-.59.07-2.652-1.324-4.32-2.316-5.834-4.925-.398-.687.398-.638 1.14-2.134.126-.252.063-.473-.03-.663-.095-.19-.778-1.87-1.066-2.564-.28-.674-.563-.58-.778-.592-.2-.01-.43-.01-.66-.01-.23 0-.6.086-.913.431-.314.346-1.198 1.173-1.198 2.86 0 1.687 1.23 3.317 1.402 3.546.173.23 2.42 3.693 5.86 5.176 2.87 1.236 3.453 1.01 4.673.896 1.22-.114 2.617-.852 2.985-1.677.368-.826.368-1.534.258-1.677-.109-.143-.398-.23-.672-.367z" />
        </svg>
        <span className="absolute left-16 bg-white border-2 border-charcoal text-charcoal font-fredoka font-extrabold text-[10px] px-3 py-1 rounded-xl shadow-[2px_2px_0px_0px_#2D2A26] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}