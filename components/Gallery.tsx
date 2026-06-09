"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  { id: 1, category: "Activities", src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEWJAAjyX37tEmo0YffjPj2OYBPlcgcc_EM3YNmtr1Py-arQ8P5AjgM8kzyLBuZDFwgFA_68_-rUu-J8eUhmCI7p9UPf6G2ioZmlCqmQLqJGUHWwzcvHSzSWnEo_tuOweo7exs=w800-h600-k-no", alt: "Outdoor Playground" },
  { id: 2, category: "Infant Care", src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAEgzlEcV1KEUkWgtp7Gd-lE1dUDwRWYAEmtxq_i0eHQZbi4eT4UjqyFiDmi4lDhPBGRNuHHYBxaII2OcLdiBobEmDWdYDuQR5UeZVcNg5O7RMWrdvlXwcKOLitITLT8xV8wzbvVGw=w800-h600-k-no", alt: "Indoor Playroom Slide" },
  { id: 3, category: "Tuition Classes", src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAGq3qhMP3-9vLIgCjUHPvySs2GlJJ-39vTPS3iLplehreh79YeyhkzOscOJIoGtxd-aCbfAShBQBvyNTWZ5C_URaPFJF7_fL2mdnscNTn4HVPgO7j6UV8KQBk1xDggIaLzzx5k2zg=w800-h600-k-no", alt: "Kids Studying in Class" },
  { id: 4, category: "Events", src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAE2wgHMMErk43WJVHTMkMxV4nhlbQ5ff304dzwD_QyDuq_FVXJlQtU_J4mRqn03APwXOuFOuJyX3npBXzx1EH-yWk9pLJYLovZrHEFeYcB0a3Bw3yqiExI2k6D1GciArHv4dNP4=w800-h600-k-no", alt: "Onam Pookalam Decoration" },
  { id: 5, category: "Preschool", src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFCmq2lv9qCXJs0TYVAbD5UzMAuPzK-DI6XYn4_thjbCnYE7uMHOLzhXnP2S3vcBxLoIJcn0y-3dNuz7SC_3DBNHWnRHDLHvdj0CXyUyBUjkjhe1Xd7d4HSCRX94ns47Id8Wua5ww=w800-h600-k-no", alt: "Pre-school Activity Room" },
  { id: 6, category: "Activities", src: "https://lh3.googleusercontent.com/gps-cs-s/APNQkAFVw0uBKnWyC2ic_O4682F1RkmK6c1UUgBE2-UOqAvaYz3ec-5Dgw089Nca_oiIApsjmI6oJsCiY6iTPleb5Ke3aMKgwTBoeBudXOIXSi-81HDBMcipTZPAvfNfRHabiIeLhavv=w800-h600-k-no", alt: "Daycare Main Entrance" },
];

const categories = ["All", "Infant Care", "Preschool", "Activities", "Events", "Tuition Classes"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-white border-b-4 border-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="bg-sunny-yellow text-charcoal px-3.5 py-1 text-xs font-bold font-fredoka rounded-full border-2 border-charcoal inline-block mb-3 shadow-[2px_2px_0px_0px_#2D2A26]">
            CAMPUS PHOTO ALBUM
          </span>
          <h2 className="text-3xl md:text-4xl font-fredoka font-extrabold text-charcoal mb-4">Our Gallery</h2>
          <p className="text-charcoal/80 max-w-xl mx-auto mb-8 text-sm md:text-base font-semibold">
            Take a look inside our classrooms, active games, and creative study schedules.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cartoon-btn px-4 py-1.5 text-xs ${
                  filter === cat 
                    ? "bg-sunny-yellow text-charcoal" 
                    : "bg-white text-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Polaroid Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className={`relative group bg-white p-3.5 border-4 border-charcoal rounded-2xl shadow-[4px_4px_0px_0px_#2D2A26] cursor-pointer break-inside-avoid inline-block w-full transition-transform duration-200 ${
                  img.id % 2 === 0 ? "rotate-1.5 hover:rotate-0" : "-rotate-1.5 hover:rotate-0"
                }`}
                onClick={() => setSelectedImage(img.src)}
              >
                <div className="relative rounded-lg overflow-hidden border-2 border-charcoal/20">
                  <Image 
                    src={img.src} 
                    alt={img.alt} 
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                      <div className="w-10 h-10 bg-white border-3 border-charcoal rounded-full flex items-center justify-center text-charcoal shadow-[2px_2px_0px_0px_#2D2A26]">
                        <Maximize2 size={18} />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Polaroid label text */}
                <div className="mt-4 flex justify-between items-center px-1">
                  <span className="font-fredoka font-extrabold text-xs text-charcoal uppercase tracking-wider">
                    {img.alt}
                  </span>
                  <span className="text-[9px] font-fredoka font-extrabold uppercase bg-sky-cyan border-2 border-charcoal px-2 py-0.5 rounded-full text-charcoal">
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/90 backdrop-blur-xs p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white border-3 border-charcoal shadow-[2px_2px_0px_0px_#2D2A26] flex items-center justify-center text-charcoal hover:scale-105 active:scale-95 transition-transform"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full rounded-2xl border-4 border-charcoal shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}