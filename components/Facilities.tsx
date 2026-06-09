"use client";

import { motion } from "framer-motion";
import { Shield, Home, TreePine, Moon, Utensils, BookHeart, Palette, GraduationCap } from "lucide-react";

const facilities = [
  { title: "Safe Classrooms", desc: "Sunny learning rooms with soft-edge tables and child-proof gates.", icon: <Shield size={20} />, color: "bg-sky-cyan" },
  { title: "Indoor Soft Zone", desc: "Soft play climbers, blocks, and visual sensory boards.", icon: <Home size={20} />, color: "bg-mint-green" },
  { title: "Playground", desc: "Equipped play area with safe slides, swings, and climbing frames.", icon: <TreePine size={20} />, color: "bg-sunny-yellow" },
  { title: "Nap & Rest Zone", desc: "Cozy quiet rooms with clean individual mats for peaceful nap times.", icon: <Moon size={20} />, color: "bg-coral-peach" },
  { title: "Dietician Meals", desc: "Cooked sanitary meals focusing on plant nutrients and allergies.", icon: <Utensils size={20} />, color: "bg-lilac-purple" },
  { title: "Reading Corner", desc: "Picture storybooks, sensory books, and cozy kid lounge logs.", icon: <BookHeart size={20} />, color: "bg-white" },
  { title: "Tuition Desk", desc: "Quiet study zones with charts, books, and curriculum mentors.", icon: <GraduationCap size={20} />, color: "bg-mint-green" },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-canvas border-b-4 border-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <span className="bg-mint-green text-charcoal px-3.5 py-1 text-xs font-bold font-fredoka rounded-full border-2 border-charcoal inline-block mb-3 shadow-[2px_2px_0px_0px_#2D2A26]">
              OUR CAMPUS
            </span>
            <h2 className="text-3xl md:text-4xl font-fredoka font-extrabold text-charcoal mb-4">Camp facilities</h2>
            <p className="text-charcoal/80 text-sm md:text-base font-semibold">
              Take a walk through our happy, visual space created to make daily child care safe & stress-free.
            </p>
          </div>
          <button className="cartoon-btn bg-white text-charcoal px-5 py-2.5 text-sm self-start md:self-auto">
            Virtual Tour
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {facilities.map((facility, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03, duration: 0.4 }}
              className={`cartoon-card ${facility.color} p-5 flex flex-col items-start w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]`}
            >
              <div className="w-10 h-10 rounded-xl bg-white border-3 border-charcoal shadow-[2px_2px_0px_0px_#2D2A26] flex items-center justify-center mb-4">
                {facility.icon}
              </div>
              <h3 className="text-sm font-fredoka font-extrabold text-charcoal mb-2 leading-tight">{facility.title}</h3>
              <p className="text-charcoal/85 text-xs font-semibold leading-relaxed">{facility.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
