import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    category: string;
    images: string[];
    details?: string;
  } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{project.title}</DialogTitle>
        </DialogHeader>
        
        {/* Image Carousel */}
        <div className="relative aspect-video bg-secondary rounded-xl overflow-hidden">
          {project.images.length > 0 ? (
            <>
              <img
                src={project.images[currentImage]}
                alt={`${project.title} - Screenshot ${currentImage + 1}`}
                className="w-full h-full object-contain"
              />
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 rounded-full flex items-center justify-center hover:bg-card transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-card/80 rounded-full flex items-center justify-center hover:bg-card transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImage ? "bg-primary" : "bg-card/60"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              No screenshots yet
            </div>
          )}
        </div>

        {/* Project details */}
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
            {project.category}
          </span>
          <p className="text-muted-foreground leading-relaxed">
            {project.details || project.description}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
