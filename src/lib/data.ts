import { Briefcase, MapPin, GraduationCap, Info, LucideIcon } from "lucide-react";

interface KeyDetail {
  icon: LucideIcon;
  title: string;
  value: string;
  bgColor: string;
}

interface TimelineEntry {
  years: string;
  title: string;
  institution: string;
  description?: string;
}

export const aboutMeParagraphs: string[] = [
    "I'm a Secondary 4 student at SST, currently exploring biotechnology through my Independent Research Project. I have a keen interest in genetic engineering and how it can solve real-world problems, especially in health and sustainability.",
    "Through hands-on lab work and self-directed learning, I've been developing skills in basic microbiology, DNA analysis, and scientific communication. I enjoy bridging what I learn in class with current research and real-world applications."
];  

export const keyDetails: KeyDetail[] = [
    {
    icon: GraduationCap,
    title: "Level",
    value: "Secondary 4",
    bgColor: "bg-[#5eead4]",
    },
    {
    icon: MapPin,
    title: "Location",
    value: "Singapore",
    bgColor: "bg-[#5eead4]",
    },
    {
    icon: GraduationCap,
    title: "School",
    value: "School of Science and Technology",
    bgColor: "bg-[#5eead4]",
    },
    {
    icon: Info,
    title: "Interests",
    value: "Synthetic Biology, Bioethics",
    bgColor: "bg-[#5eead4]",
    },
];  

export const educationExperience: TimelineEntry[] = [
{
    years: "2024 - Present",
    title: "Independent Research Project (IDP)",
    institution: "SST",
    description: "Focusing on biotechnology and real-world applications of genetic modification.",
},
{
    years: "2022 - Present",
    title: "Student Leader - Science Mentorship",
    institution: "SST",
    description: "Organised science outreach and mentoring for juniors in STEM topics.",
},
{
    years: "2021 - 2023",
    title: "Biotechnology Elective",
    institution: "SST",
    description: "Covered lab safety, micropipetting, gel electrophoresis, and DNA extraction.",
},
{
    years: "June 2023",
    title: "Biotech Internship (Attachment)",
    institution: "A*STAR (Hypothetical/Example)",
    description: "Shadowed scientists and learned about current research in synthetic biology.",
}
];


export const projects = [
    {
    id: 1,
    title: "DNA Extraction from Strawberries",
    description: "Experimented with extracting DNA using household materials to understand cell structure and genetic material.",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Genetics",
    year: "2023"
    },
    {
    id: 2,
    title: "Antibacterial Properties of Natural Substances",
    description: "Tested garlic, turmeric, and other substances against bacterial growth on agar plates.",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Microbiology",
    year: "2023"
    },
    {
    id: 3,
    title: "Bioplastics from Starch",
    description: "Produced simple biodegradable plastic from tapioca starch and studied its properties.",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Environmental",
    year: "2024"
    },
    {
    id: 4,
    title: "CRISPR Simulation Research",
    description: "Created a visual explainer and infographic on how CRISPR-Cas9 works and its ethical issues.",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Bioethics",
    year: "2024"
    },
    {
    id: 5,
    title: "Bacterial Growth Lab Report",
    description: "Analysed how environmental factors affect bacterial growth using data from classroom experiments.",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Lab Techniques",
    year: "2023"
    },
    {
    id: 6,
    title: "Vaccination Awareness Poster",
    description: "Designed a science communication poster to explain how vaccines work and why they matter.",
    image: "https://images.unsplash.com/photo-1530210124550-912dc1381cb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Public Health",
    year: "2022"
    }
];

export const labSkills = [
    { name: "Micropipetting & Measurement", percentage: 90 },
    { name: "Gel Electrophoresis", percentage: 80 },
    { name: "DNA Extraction", percentage: 85 },
    { name: "Agar Plate Preparation", percentage: 75 },
    { name: "Sterile Technique & Safety", percentage: 80 }
];

export const compSkills = [
    { name: "Python for Data Analysis", percentage: 85 },
    { name: "Spreadsheet Modelling", percentage: 90 },
    { name: "Bioinformatics Tools", percentage: 70 },
    { name: "Presentation Design", percentage: 95 },
    { name: "Data Visualization", percentage: 80 }
];  

export const additionalSkills = [
    "Scientific Writing",
    "Basic Research Presentation",
    "Time Management in Projects",
    "Following SOPs",
    "Team Collaboration",
    "Ethical Considerations in Biotech",
    "Curiosity-Driven Inquiry"
];