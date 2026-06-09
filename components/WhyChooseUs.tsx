"use client";

import { motion } from "framer-motion";
import { Award, Users, Heart, Smile, Coffee, BookOpen, Brain, MessageSquare } from "lucide-react";

const features = [
  { title: "25 Years Trust", desc: "Providing safe local child care & tuitions since 2001.", icon: <Award size={20} className="text-charcoal" />, color: "bg-sunny-yellow" },
  { title: "Patient Mentors", desc: "Qualified educators who love teaching with visuals and fun.", icon: <Users size={20} className="text-charcoal" />, color: "bg-mint-green" },
  { title: "Super Safe Area", desc: "Locked safety gates, perimeter fencing, and vetted entries.", icon: <Heart size={20} className="text-charcoal" />, color: "bg-coral-peach" },
  { title: "Fun Playground", desc: "Equipped play area with safe slides, swings, and climbing frames.", icon: <Smile size={20} className="text-charcoal" />, color: "bg-sky-cyan" },
  { title: "Happy Breakfast", desc: "Fresh, healthy meals planned by pediatric dietician guides.", icon: <Coffee size={20} className="text-charcoal" />, color: "bg-lilac-purple" },
  { title: "Study Guides", desc: "Curated academic tutoring packages and daily homework help.", icon: <BookOpen size={20} className="text-charcoal" />, color: "bg-white" },
  { title: "Creative Play", desc: "Focusing on hand-eye coordination, speech, and socialization.", icon: <Brain size={20} className="text-charcoal" />, color: "bg-sunny-yellow" },
  { title: "Open Desk Policy", desc: "Transparent review cycles and daily direct phone reports.", icon: <MessageSquare size={20} className="text-charcoal" />, color: "bg-mint-green" },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white border-b-4 border-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="bg-coral-peach text-charcoal px-3.5 py-1 text-xs font-bold font-fredoka rounded-full border-2 border-charcoal inline-block mb-3 shadow-[2px_2px_0px_0px_#2D2A26]">
            OUR CORE VALUES
          </span>
          <h2 className="text-3xl md:text-4xl font-fredoka font-extrabold text-charcoal mb-4">Why Families Choose Us</h2>
          <p className="text-charcoal/80 max-w-xl mx-auto text-sm md:text-base font-semibold">
            We provide a visual, clean, and structured learning space designed specifically for your child&apos;s happiness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.04, duration: 0.4 }}
              className={`cartoon-card ${feature.color} p-6 flex flex-col items-start`}
            >
              <div className="w-10 h-10 rounded-xl bg-white border-3 border-charcoal shadow-[2px_2px_0px_0px_#2D2A26] flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base font-fredoka font-extrabold text-charcoal mb-2 leading-tight">{feature.title}</h3>
              <p className="text-charcoal/85 text-xs font-semibold leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}