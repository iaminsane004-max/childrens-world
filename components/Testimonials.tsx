"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Vishnu Jayapalan",
    program: "Local Guide",
    text: "Children’s World daycare has been a real blessing for us during a tough time as working parents living away from our hometown. Ajitha Madam and the staffs are very supportive and always take good care of our child.",
    rating: 5,
    bg: "bg-sunny-yellow/10",
    avatarBg: "bg-sunny-yellow",
    initials: "VJ"
  },
  {
    name: "Gopika Madhu",
    program: "Parent Review",
    text: "Children's World Day Care Center provides a caring and supportive environment for children. The staff is highly professional and attentive, ensuring that each child receives the individual care and attention they need.",
    rating: 5,
    bg: "bg-mint-green/10",
    avatarBg: "bg-mint-green",
    initials: "GM"
  },
  {
    name: "Aneeta John",
    program: "Parent Review",
    text: "My daughter has been going to children's world for the last 3 years. I highly recommend this day care for parents who need a trustworthy day care/ after school facility for kids. Even at short notice they arrange for homely food for kids.",
    rating: 5,
    bg: "bg-coral-peach/10",
    avatarBg: "bg-coral-peach",
    initials: "AJ"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-warm-sand/20 border-b-4 border-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="bg-coral-peach text-charcoal px-3.5 py-1 text-xs font-bold font-fredoka rounded-full border-2 border-charcoal inline-block mb-3 shadow-[2px_2px_0px_0px_#2D2A26]">
            PARENT REVIEWS
          </span>
          <h2 className="text-3xl md:text-4xl font-fredoka font-extrabold text-charcoal mb-4">Hear From Our Families</h2>
          <p className="text-charcoal/80 max-w-xl mx-auto text-sm md:text-base font-semibold">
            Read authentic reviews from families who have grown with our school guides.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Comic Speech Bubble */}
              <div className={`cartoon-card ${review.bg} p-6 relative mb-6 w-full flex-grow`}>
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="fill-charcoal text-charcoal" size={13} />
                  ))}
                </div>
                <p className="text-charcoal/85 text-xs font-semibold leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                {/* Speech Bubble Arrow */}
                <div className="absolute bottom-[-13px] left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 bg-white border-r-4 border-b-4 border-charcoal" style={{ backgroundColor: review.bg.includes("sunny") ? "#FFFDF0" : review.bg.includes("mint") ? "#F0FDF4" : "#FFF2E6" }} />
              </div>

              {/* Avatar sticker */}
              <div className="flex items-center gap-3 mt-2">
                <div className={`w-10 h-10 rounded-full border-3 border-charcoal ${review.avatarBg} shadow-[2px_2px_0px_0px_#2D2A26] flex items-center justify-center font-fredoka font-extrabold text-xs text-charcoal`}>
                  {review.initials}
                </div>
                <div className="text-left">
                  <div className="font-fredoka font-extrabold text-xs text-charcoal leading-none">{review.name}</div>
                  <div className="text-[9px] font-fredoka font-extrabold text-charcoal/60 uppercase tracking-wide mt-1">{review.program}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
