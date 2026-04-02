import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/footer';
import SkillsSection from '@/components/skills';
import ContactPage from '@/components/contact';

const projects = [
  {
    id: '1',
    image: "/lux.png",
    title: 'Lux Transporter',
    description:
      'Luxtransporter is the ultimate destination for bespoke luxury travel experiences From private aviation to exclusive yacht ...',
    href: 'https://www.luxtransporter.com/',
    tags: [
      { label: 'UI Design', color: '#7C3AED' },
      { label: 'Frontend Development', color: '#EC4899' },
      { label: '2025', color: '#F97316' },
    ],
  },
  {
    id: '2',
    image: '/enmamar.png',
    title: 'Enamamar - Online Course Platform',
    description:
      'Enmamar is designed to deliver structured, accessible learning experiences across various subjects.',
    href: 'https://enmamar.com/',
    tags: [
      { label: 'Front/back end', color: '#06B6D4' },
      { label: '2024', color: '#F97316' },
    ],
  },
  {
    id: '3',
    image: "/church.png",
    title: 'Church Donation Website',
    description:
      'Debre kidusan psx is a church based website tailored to encourag fellow christians to contribute and be part of the community...',
    href: 'https://debrekidusanpdx.com/',
    tags: [
      { label: 'UI Design', color: '#7C3AED' },
      { label: 'Frontend Development', color: '#EC4899' },
      { label: '2025', color: '#F97316' },
    ],
  },
  {
    id: '4',
    image: "/productivity.png",
    title: 'Stille - personal project',
    description:
      'Stille is a mindful productivity tool designed for those seeking a balanced approach to work and life.',
    href: 'https://productivity-sandy-xi.vercel.app/',
    tags: [
      { label: 'UI Design', color: '#7C3AED' },
      { label: 'Frontend Development', color: '#EC4899' },
      { label: '2025', color: '#F97316' },
    ],
  },
];

export default function Home() {
  return (
    <div className=" min-h-screen bg-gray-50">
      <HeroSection />
      <ProjectsSection projects={projects} />
      <SkillsSection />
      <ContactPage />
      <Footer />
    </div>
  );
}
