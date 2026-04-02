import Link from 'next/link';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: Array<{
    label: string;
    color: string;
  }>;
  href?: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  tags,
  href = '/',
}: ProjectCardProps) {
  return (
    <div className="flex flex-col">
      {/* Project Image */}
      <Link href={href} className="block mb-6 rounded-lg overflow-hidden h-64 md:h-72">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105"
        />
      </Link>

      {/* Project Title */}
      <h3 className="text-xl font-bold text-black mb-3">{title}</h3>

      {/* Project Description */}
      <p className="text-gray-600 text-sm mb-6 line-clamp-3">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs font-medium px-3 py-1 rounded-full"
            style={{ color: tag.color, backgroundColor: `${tag.color}15` }}
          >
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}
