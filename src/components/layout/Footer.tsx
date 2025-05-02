import { scrollToElement } from "@/lib/utils";
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Mail 
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const handleClickNav = (id: string) => {
    scrollToElement(id);
  };

  return (
    <footer className="bg-slate-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clipRule="evenodd" />
              </svg>
              <span>Callum Lim</span>
            </a>
            <p className="text-slate-400 mt-2">Biotechnology Researcher & Student</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:contact@example.com" className="text-slate-300 hover:text-primary transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} Callum Lim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
