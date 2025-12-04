import { Heart, Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="section-container py-12">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold mb-4">Let's Connect</h2>
          <p className="text-background/70 mb-8 max-w-md mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat!
          </p>
          
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="mailto:your.email@example.com"
              className="w-12 h-12 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="border-t border-background/10 pt-6">
            <p className="text-sm text-background/50 flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by a passionate designer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
