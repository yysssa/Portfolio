import { useState } from "react";
import { Figma, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Design {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  figmaUrl?: string; 
  category: string;
}

const designs: Design[] = [
  {
    id: 1,
    title: "Figma Parallax",
    description: "A simple UI concept demonstrating Parallax Scrolling, where background content moves slower than foreground content. This project focused on practicing fundamental Figma prototyping and simple micro-animations.",
    category: "WEB",
    figmaUrl: "https://embed.figma.com/proto/cJbz8LwxdVvsVeQjdSkWEp/Parallax?scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&node-id=1-330&embed-host=share",
  },
  {
    id: 2,
    title: "Simple Login Page UI",
    description: "A clean, basic design focusing on form layout, input field styling",
    category: "Web",
    figmaUrl: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FnsNdGByTSsbZj2eVG8hhSo%2FloginPage%3Fnode-id%3D1-4%26starting-point-node-id%3D1%253A4%26t%3DvF3eZGN0putXOkwd-1", 
  },
  {
    id: 3,
    title: "Juice Product Carousel",
    description: "An interactive UI component focusing on smooth horizontal scrolling (carousel) and modern product card presentation for a juice brand.",
    category: "WEB",
    figmaUrl: "https://embed.figma.com/proto/CWPC3othVEhdpOGv4fCQ0K/Carousel?node-id=6-2&embed-host=share",
  },
  {
    id: 4,
    title: "Passport Tracking System UI",
    description: "A comprehensive interface designed for users to track their passport application status and view necessary documentation and requirements.",
    category: "Web",
    figmaUrl: "https://embed.figma.com/proto/2O5ezOMEjUbWsoZfhWVjiZ/Dustin-D.-Tuazon-s-team-library?node-id=2312-2&starting-point-node-id=2312%3A2&embed-host=share",
  },
];

const DesignsSection = () => {
  const [selectedDesign, setSelectedDesign] = useState<Design | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="designs" className="bg-background">
      <div className="section-container">
        <div className="mb-12">
          <h2 className="section-title">UI/UX Designs</h2>
          <p className="section-subtitle">
            Creative designs I've crafted <br />
            Click to View
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {designs.map((design, index) => (
            <div
              key={design.id}
              onClick={() => {
                setSelectedDesign(design);
                setIsModalOpen(true);
              }}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] bg-secondary rounded-2xl overflow-hidden mb-4 relative shadow-card transition-all duration-300 group-hover:shadow-hover group-hover:-translate-y-1">
                {design.imageUrl ? (
                  <img
                    src={design.imageUrl}
                    alt={design.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground gap-2 bg-gradient-to-br from-accent to-rose-light">
                    <Figma className="w-8 h-8" />
                    <span className="text-xs">Design Preview</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {design.category}
              </span>
              <h3 className="font-serif text-base font-semibold text-foreground mt-1 group-hover:text-primary transition-colors">
                {design.title}
              </h3>
            </div>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          {/* Updated max-w-2xl to max-w-4xl for better Figma viewing */}
          <DialogContent className="max-w-4xl bg-card border-border"> 
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl">
                {selectedDesign?.title}
              </DialogTitle>
            </DialogHeader>
            
            {/* START: Updated content block to render Figma iframe */}
            <div className="relative w-full aspect-video bg-secondary rounded-xl overflow-hidden mb-4">
              {selectedDesign?.figmaUrl ? (
                <iframe
                  src={selectedDesign.figmaUrl}
                  className="w-full h-full border-none"
                  allowFullScreen
                  loading="lazy"
                  title={`${selectedDesign.title} Figma Embed`}
                />
              ) : selectedDesign?.imageUrl ? (
                <img
                  src={selectedDesign.imageUrl}
                  alt={selectedDesign.title}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-gradient-to-br from-accent to-rose-light">
                  <Figma className="w-12 h-12" />
                </div>
              )}
            </div>
            {/* END: Updated content block */}
            
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full">
              {selectedDesign?.category}
            </span>
            <p className="text-muted-foreground mt-2">{selectedDesign?.description}</p>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default DesignsSection;