import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { scrollToElement } from "@/lib/utils";
import { motion } from "framer-motion";
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Mail, 
  ArrowRight, 
  Download 
} from "lucide-react";
import { personalInfo } from "@/data";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.opacity = "1";
    }
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef} 
      className="min-h-screen relative overflow-hidden pt-24 pb-8 md:pb-0 opacity-0 transition-opacity duration-700"
    >
      {/* Split background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc] from-50% to-[#0f172a] to-50% z-0 md:block hidden"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc] from-50% to-[#0f172a] to-50% z-0 md:hidden block"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row min-h-[calc(100vh-6rem)] items-center">
          {/* Left Content */}
          <motion.div 
            className="w-full md:w-1/2 md:pr-8 py-8 md:py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I am</h1>
              <h2 className="text-5xl md:text-6xl font-bold mb-4 text-primary">{personalInfo.name}</h2>
              <p className="text-xl text-slate-600 mb-6">{personalInfo.title}</p>
              <p className="text-slate-700 mb-8">
                {personalInfo.description}
              </p>
              
              <div className="flex gap-4 mb-8 md:mb-0">
                <a 
                  href={personalInfo.socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Linkedin className="h-6 w-6 text-slate-700" />
                </a>
                <a 
                  href={personalInfo.socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Github className="h-6 w-6 text-slate-700" />
                </a>
                <a 
                  href={personalInfo.socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Twitter className="h-6 w-6 text-slate-700" />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <Mail className="h-6 w-6 text-slate-700" />
                </a>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center items-center py-8 md:py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#5eead4] rounded-full absolute -top-3 -right-3"></div>
              <img
                src="https://images.unsplash.com/photo-1594608661623-aa0bd3a69799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Profile" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl relative z-10 bg-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
