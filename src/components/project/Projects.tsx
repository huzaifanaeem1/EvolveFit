"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FiX, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

type Projects = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  gallery?: string[];
};

const allProjects = {
  graphic: [
    {
      title: "Logo Designs",
      description: "Complete brand identity package for a tech startup",
      tags: ["Logo Design", "Brand Guidelines", "Creative Design", "Flat Logo", "Luxury Logo"],
      image: "/images/logo-banner.jpg",
      gallery: [
        "/images/l12.jpeg",
        "/images/l11.jpeg",
        "/images/l1.jpeg",
        "/images/l2.jpeg",
        "/images/l13.jpeg",
        "/images/l4.jpeg",
        "/images/l8.jpeg",
        "/images/l9.jpeg",
        "/images/l10.jpeg",
        "/images/l16.jpeg",
        "/images/l14.jpeg",
        "/images/l15.jpeg",
        "/images/l16.jpeg",
        "/images/l6.jpeg",
        "/images/l7.jpeg",
      ]
    },
    {
      title: "Vector Tracing",
      description: "Social media graphics and advertising materials",
      tags: ["Vector Art", "Print Design", "Illustration"],
      image: "/images/vector-banner.jpg",
      gallery: [
        "/images/V-22-01.jpg",
        "/images/V-2-01.jpg",
        "/images/V-3-01.jpg",
        "/images/V-4-01.jpg",
        "/images/V-5-01.jpg",
        "/images/V-6-01.jpg",
        "/images/V-7-01.jpg",
        "/images/V-8-01.jpg",
        "/images/V-9-01.jpg",
        "/images/V-10-01.jpg",
        "/images/V-11-01.jpg",
        "/images/V-12-01.jpg",
        "/images/V-13-01.jpg",
        // "/images/V-14-01.jpg",
        "/images/V-15-01.jpg",
        "/images/V-16-01.jpg",
        "/images/V-17-01.jpg",
        "/images/V-18-01.jpg",
        "/images/V-19-01.jpg",
        "/images/V-20-01.jpg",
        "/images/V-21-01.jpg",
        "/images/V-1-01.jpg",
        "/images/V-23-01.jpg",
        "/images/V-24-01.jpg",
        "/images/V-25-01.jpg",
        "/images/V-26-01.jpg",
      
      ]
    }
  ],
  web: [
    {
      title: "Stylezy E-commerce Website",
      description: "Full-featured online store with payment processing and Authentication",
      tags: ["React", "Next.js", "Stripe", "Clerk"],
      image: "/images/ecom.png",
      link: "https://marketplace-hackathon-stylezy.vercel.app/"
    },
    {
      title: "Type Blog Website",
      description: "A TypeScript-based blog platform for sharing content with a responsive design",
      tags: ["TypeScript", "Next.js", "Tailwind.css"],
      image: "/images/blog.png",
      link: "https://type-blog.vercel.app/"
    },
    {
      title: "EvolveFit Gym Website",
      description: "A user-friendly gym website for easy navigation and class scheduling",
      tags: ["TypeScript", "Next.js", "Tailwind.css"],
      image: "/images/gym.png",
      link: "https://evolve-fit-css.vercel.app/"
    },
    {
      title: "Dynamic Scenet's Perfume Website",
      description: "A sleek website for showcasing and purchasing perfumes with a modern, responsive designs",
      tags: ["Next.js","TypeScript", "Tailwind.css"],
      image: "/images/perfume.png", 
      link: "https://dynamic-scents.vercel.app/"
    },
    {
      title: "Travel Agency Website",
      description: "A responsive website for booking and exploring travel packages with an easy-to-use interface",
      tags: ["Html","Css", "JavaScript"],
      image: "/images/travel.png",
      link: "https://worldtravelagency.vercel.app/"
    },
    {
      title: "Password Strength Checker",
      description: "Productivity app with drag-and-drop functionality",
      tags: ["Python", "Streamlit"],
      image: "/images/pass.png",
      link: "https://passwordstrengthcheckerbyhuzaifanaeem.streamlit.app/"
    },
    {
      title: "Unit Convertor",
      description: "Productivity app with drag-and-drop functionality",
      tags: ["Python", "Streamlit"],
      image: "/images/unit.png",
      link: "https://unitconvertorbyhuzaifa.streamlit.app/"
    },
    {
      title: "Data Sweeper",
      description: "Productivity app with drag-and-drop functionality",
      tags: ["Python", "Streamlit"],
      image: "/images/data.png",
      link: "https://unitconvertorbyhuzaifa.streamlit.app/"
    },
  ]
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<'graphic' | 'web'>('graphic');
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (gallery: string[]) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when gallery is open
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === selectedGallery!.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(prev => 
      prev === 0 ? selectedGallery!.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-20 dark:bg-gray-900/50 bg-gray-100/50">
      <div className="container mx-auto px-6">
        {/* Header and Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            My Projects
          </h2>
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab('graphic')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'graphic'
                  ? 'bg-blue-500 text-white'
                  : 'dark:bg-white/10 dark:hover:bg-white/20 bg-black/5 hover:bg-black/10 dark:text-white text-black'
              }`}
            >
              Graphic Design
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === 'web'
                  ? 'bg-blue-500 text-white'
                  : 'dark:bg-white/10 dark:hover:bg-white/20 bg-black/5 hover:bg-black/10 dark:text-white text-black'
              }`}
            >
              Web Development
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allProjects[activeTab].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 cursor-pointer" onClick={() => {
                    if (activeTab === 'graphic' && project.gallery) {
                      openGallery(project.gallery);
                    } else if (activeTab === 'web' && project.link) {
                      window.open(project.link, '_blank');
                    }
                  }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {activeTab === 'web' && project.link && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-white">
                          <FiExternalLink size={20} />
                          <span>Visit Website</span>
                        </div>
                      </div>
                    )}
                    {activeTab === 'graphic' && project.gallery && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-white">
                          <span>View Gallery</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold dark:text-white text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="dark:text-gray-300 text-gray-700 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => {
                        if (activeTab === 'graphic' && project.gallery) {
                          openGallery(project.gallery);
                        } else if (activeTab === 'web' && project.link) {
                          window.open(project.link, '_blank');
                        }
                      }}
                      className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                    >
                      {activeTab === 'graphic' ? 'View Gallery' : 'Visit Website'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeGallery}
          >
            <button
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 p-2"
            >
              <FiX size={28} />
            </button>
            
            <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-[80vh]"
              >
                <Image
                  src={selectedGallery[currentImageIndex]}
                  alt="Design work"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevImage}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-2"
                >
                  <FiChevronLeft size={20} />
                  Previous
                </button>
                <span className="text-white">
                  {currentImageIndex + 1} / {selectedGallery.length}
                </span>
                <button
                  onClick={nextImage}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg flex items-center gap-2"
                >
                  Next
                  <FiChevronRight size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}