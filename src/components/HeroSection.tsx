import { ArrowDown } from "lucide-react";
import profileImage from '../assets/profile.png';

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-rose-light rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent rounded-full blur-3xl opacity-40" />
      
      <div className="section-container w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <div className="order-2 md:order-1 animate-fade-in-left">
            <p className="text-primary font-medium mb-4 tracking-wide">Hello, I'm Alyssa Mae M. Dato</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Creative <span className="text-gradient">UI/UX</span> Designer
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg">
              I enjoy designing digital experiences that are easy to use and pleasant. I focus on making interfaces clear and functional.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-in-right">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-rose p-1 animate-float">
                <div className="w-full h-full rounded-full bg-card overflow-hidden flex items-center justify-center">
                  
                  {/* 2. Hardcoded Image Tag using the imported variable */}
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-contain"
                  />
                  
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold rounded-full" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;