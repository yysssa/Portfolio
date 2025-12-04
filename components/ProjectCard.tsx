import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
  onClick: () => void;
}

const ProjectCard = ({ title, description, category, imageUrl, onClick }: ProjectCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group card-feminine cursor-pointer overflow-hidden"
    >
      {/* Image container */}
      <div className="aspect-video bg-secondary rounded-xl mb-4 overflow-hidden relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
            Screenshot
          </div>
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
          <ExternalLink className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* Content */}
      <span className="text-xs font-medium text-primary uppercase tracking-wider">
        {category}
      </span>
      <h3 className="font-serif text-lg font-semibold text-foreground mt-1 mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
