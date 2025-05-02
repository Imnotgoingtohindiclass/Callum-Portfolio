import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SkillBar } from "@/components/ui/skill-bar";
import { Badge } from "@/components/ui/badge";
import { labSkills, compSkills, additionalSkills } from "../../lib/data";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
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
    <section id="skills" ref={ref} className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">My <span className="text-primary">Skills</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-slate-700">
            My expertise spans various areas of biotechnology, from laboratory techniques to computational analysis tools.
          </p>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Laboratory Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6">Laboratory Techniques</h3>
            
            <div className="space-y-6">
              {labSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Computational Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-6">Computational & Analysis Skills</h3>
            
            <div className="space-y-6">
              {compSkills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Additional Skills */}
        <motion.div 
          className="mt-16"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Competencies</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill) => (
              <Badge
                key={skill}
                variant="primary-light"
                className="px-4 py-2 text-sm font-medium shadow-md"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
