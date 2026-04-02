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
      'Lux is a pioneering electric vehicle and clean energy company founded by Elon Musk. It builds high-performance electric cars...',
    tags: [
      { label: 'UI Design', color: '#7C3AED' },
      { label: 'Frontend Development', color: '#EC4899' },
      { label: '2025', color: '#F97316' },
    ],
  },
  {
    id: '2',
    image: '/enmamar.png',
    title: 'Grok Dashboard',
    description:
      'Grok is a generative AI chatbot developed by Elon Musk&apos;s company, xAI. Launched in November 2023, Grok is designed to be a...',
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
      'Lux is a pioneering electric vehicle and clean energy company founded by Elon Musk. It builds high-performance electric cars...',
    tags: [
      { label: 'UI Design', color: '#7C3AED' },
      { label: 'Frontend Development', color: '#EC4899' },
      { label: '2025', color: '#F97316' },
    ],
  },
  {
    id: '4',
    image: "/lux.png",
    title: 'Lux Transporter',
    description:
      'Lux is a pioneering electric vehicle and clean energy company founded by Elon Musk. It builds high-performance electric cars...',
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
