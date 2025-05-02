import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "../../lib/data";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
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
    <section id="projects" ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">My <span className="text-primary">Projects</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-slate-700">
            Explore my research projects and academic work in the field of biotechnology.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              variants={itemVariants}
              className="group bg-slate-50 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <Badge variant="primary-light" className="text-xs font-medium px-2 py-1 group-hover:bg-primary/20 transition-colors duration-300">{project.category}</Badge>
                  <span className="text-xs text-slate-500 group-hover:text-slate-700 transition-colors duration-300">{project.year}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-slate-600 mb-4 group-hover:text-slate-800 transition-colors duration-300">{project.description}</p>
                <Button 
                  variant="link" 
                  className="p-0 h-auto text-primary hover:text-primary/90 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300"
                >
                  Read more
                  <ArrowRight className="ml-1 h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
        >
          <Button size="lg" className="inline-flex items-center">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
