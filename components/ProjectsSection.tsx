import ProjectCard from './ProjectCard';

interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  tags: Array<{
    label: string;
    color: string;
  }>;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg p-12">
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-12">
            <span className="bg-gray-800 text-white px-4 py-2 rounded-lg text-xl">
              📁
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Meet some of my Works
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
