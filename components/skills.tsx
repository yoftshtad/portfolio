import React from 'react';
// Importing from various icon sets inside react-icons
import { FaFigma, FaReact, FaWordpress, FaBolt } from 'react-icons/fa6';
import { SiFramer, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { HiSparkles } from 'react-icons/hi2';

const SkillCard = ({ 
  icon: Icon, 
  title, 
  description, 
  iconBgColor,
  iconColor
}: { 
  icon: React.ElementType, 
  title: string, 
  description: string, 
  iconBgColor: string,
  iconColor: string
}) => (
  <div className="group p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start text-left h-full">
    <div className={`p-3 rounded-xl mb-6 ${iconBgColor}`}>
      <Icon className={`w-6 h-6 ${iconColor}`} />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed text-[15px]">
      {description}
    </p>
  </div>
);

export default function SkillsSection() {
  const skills = [
    {
      title: "Figma",
      icon: FaFigma,
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      description: "Designing high-fidelity prototypes and maintainable design systems with a focus on user experience."
    },
    {
      title: "Framer",
      icon: SiFramer,
      iconBgColor: "bg-pink-100",
      iconColor: "text-pink-600",
      description: "Building high-end web animations and interactive components that bring static designs to life."
    },
    {
      title: "Next.js",
      icon: SiNextdotjs,
      iconBgColor: "bg-slate-100",
      iconColor: "text-slate-800",
      description: "Developing SEO-friendly, performant full-stack applications using the latest App Router features."
    },
    {
      title: "React",
      icon: FaReact,
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      description: "Crafting scalable frontend architectures with reusable components and efficient state management."
    },
    {
      title: "Tailwind CSS",
      icon: SiTailwindcss,
      iconBgColor: "bg-cyan-100",
      iconColor: "text-cyan-500",
      description: "Rapidly building custom user interfaces with a utility-first approach and responsive design."
    },
    {
      title: "WordPress / Performance", // Combined your 6th & 7th (fast) requests
      icon: FaBolt, // Using the Bolt icon for "Fast"
      iconBgColor: "bg-amber-100",
      iconColor: "text-amber-600",
      description: "Optimizing sites for blazing-fast speed metrics, web vitals, and instant load times."
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section with React Icon Sparkles */}
        <div className="flex items-center gap-3 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            My skills
          </h2>
          <HiSparkles className="text-amber-400 w-8 h-8 md:w-10 md:h-10" />
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}