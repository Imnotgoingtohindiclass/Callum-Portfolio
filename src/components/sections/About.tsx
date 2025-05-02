import { useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button"; // Not used in the render
import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
// Import data from the new file
import { aboutMeParagraphs, keyDetails, educationExperience } from "../../lib/data"; // Adjust the path as needed

// ArrowRight component was not used in the render
// function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12h14" />
//       <path d="m12 5 7 7-7 7" />
//     </svg>
//   );
// }


export default function About() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Left side: About Me text and details */}
          <motion.div
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold mb-2">About <span className="text-primary">Me</span></h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>

            {/* Render About Me paragraphs from data */}
            {aboutMeParagraphs.map((paragraph, index) => (
              <p key={index} className={`text-slate-700 ${index === aboutMeParagraphs.length - 1 ? 'mb-6' : 'mb-4'}`}>
                {paragraph}
              </p>
            ))}

            {/* Render Key Details from data */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {keyDetails.map((detail, index) => {
                const IconComponent = detail.icon; // Get the Lucide icon component
                return (
                  <div key={index} className="flex items-center gap-3">
                    {/* Using the hardcoded background color as it was in the original */}
                    <div className="w-10 h-10 rounded-full bg-[#5eead4] flex items-center justify-center">
                      {/* Render the icon component */}
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{detail.title}</h3>
                      <p className="text-slate-600 text-sm">{detail.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right side: Education & Experience timeline */}
          <motion.div
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <div className="bg-slate-50 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Education & Experience</h2>

              <div className="space-y-8">
                {/* Render timeline entries from data */}
                {educationExperience.map((entry, index) => (
                   // Always apply border-l-2, but make border-transparent for the last item
                   <div
                      key={index}
                      className={"relative pl-8 border-l-2 border-[#5eead4]"}
                   >
                    {/* The dot */}
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                    <div>
                      <span className="text-sm text-primary font-medium">{entry.years}</span>
                      <h3 className="text-lg font-semibold">{entry.title}</h3>
                      <p className="text-slate-600">{entry.institution}</p>
                      {entry.description && (
                         <p className="text-sm text-slate-500 mt-1">{entry.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}