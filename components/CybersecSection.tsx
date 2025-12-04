import { useState } from "react";
import { Shield, Terminal, ChevronRight } from "lucide-react";

const Dialog = ({ open, onOpenChange, children }) => (
  <div 
    className={`fixed inset-0 z-50 overflow-y-auto ${open ? 'block' : 'hidden'}`}
    style={{ backgroundColor: open ? 'rgba(0, 0, 0, 0.5)' : 'transparent', transition: 'background-color 0.3s' }}
    onClick={() => onOpenChange(false)}
  >
    <div className="flex min-h-full items-center justify-center p-4">
      <div 
        className={`w-full max-w-2xl rounded-xl bg-card border border-border shadow-2xl transform transition-all duration-300 ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()} 
      >
        {children}
      </div>
    </div>
  </div>
);

const DialogContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const DialogHeader = ({ children }) => (
  <div className="flex flex-col space-y-1.5 text-center sm:text-left">{children}</div>
);

const DialogTitle = ({ children, className = "" }) => (
  <h2 className={`text-2xl font-semibold leading-none tracking-tight font-serif ${className}`}>{children}</h2>
);

interface CybersecNote {
  id: number;
  platform: string;
  title: string;
  description: string;
  topics: string[];
  icon: "tryhackme" | "hackthebox";
}

const cybersecNotes: CybersecNote[] = [
  {
  id: 1,
  platform: "HackTheBox",
  title: "Introduction to Information Security",
  icon: "hackthebox",
  topics: ["CIA Triad", "Threats", "Security Controls", "Risk Management"],
  description: `
      <h3 class="font-bold text-xl mb-2 text-primary">Introduction to Information Security</h3>
      <p class="mb-4">
        This lesson taught me the basics of information security in a very clear way. I learned why keeping data safe is important for both 
        companies and individuals. Information security is all about protecting data and systems from people who shouldn’t access them. 
        The module explained the CIA Triad: Confidentiality (keeping information secret), Integrity (keeping it accurate), and Availability 
        (making it accessible when needed). It also showed different types of threats like malware, phishing, ransomware, and social 
        engineering. I now understand that security isn’t only about software, but also about human behavior and proper rules. 
        Finally, I learned about risk management, which is about finding and fixing weak spots before hackers exploit them.
      </p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>CIA Triad:</strong> Confidentiality, Integrity, and Availability; the foundation of all security practices.</li>
        <li><strong>Threats & Vulnerabilities:</strong> Different ways attackers can harm systems, like malware, phishing, or weak passwords.</li>
        <li><strong>Security Controls:</strong> Tools and methods like passwords, encryption, firewalls, and access restrictions.</li>
        <li><strong>Risk Management:</strong> How organizations identify, analyze, and reduce risks to avoid security problems.</li>
      </ul>
  `
},
{
  id: 2,
  platform: "HackTheBox",
  title: "Introduction to Web Applications",
  icon: "hackthebox",
  topics: ["HTTP Basics", "Frontend vs Backend", "Client-Server Model", "Web Vulnerabilities"],
  description: `
      <h3 class="font-bold text-xl mb-2 text-primary">Introduction to Web Applications</h3>
      <p class="mb-4">
        This lesson explained how websites and web applications work behind the scenes. I learned how a browser sends a request to a 
        server using HTTP, and how the server responds with data that the browser shows to users. It taught the difference between 
        frontend (what users see) and backend (how the server handles data). I also learned why websites have vulnerabilities if user 
        input is not checked, passwords are weak, or servers are misconfigured. This lesson made me understand why hackers try things 
        like SQL injection or cross-site scripting, and why developers must follow security best practices.
      </p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>HTTP Basics:</strong> How browsers and servers communicate, including requests, responses, and status codes.</li>
        <li><strong>Frontend vs Backend:</strong> Frontend is what the user interacts with; backend is where data is stored and processed.</li>
        <li><strong>Client-Server Model:</strong> User sends request → server processes → server returns response to user.</li>
        <li><strong>Common Web Vulnerabilities:</strong> Problems like SQL Injection, XSS, CSRF, and weak authentication that attackers can exploit.</li>
      </ul>
  `
},
{
  id: 3,
  platform: "TryHackMe",
  title: "Offensive & Defensive Security",
  icon: "tryhackme",
  topics: ["Offensive Security", "Defensive Security", "Attack Lifecycle", "Security Terms"],
  description: `
      <h3 class="font-bold text-xl mb-2 text-primary">Offensive & Defensive Security</h3>
      <p class="mb-4">
        This lesson helped me understand the two sides of cybersecurity. Offensive security is about ethically testing systems 
        by simulating hacker attacks to find weaknesses before real attackers do. Defensive security focuses on protecting systems, 
        monitoring them, and stopping attacks. I also learned about the attack lifecycle, including reconnaissance, scanning, exploitation, 
        and maintaining access. The module explained many common security terms like payload, exploit, and vulnerability. It made me 
        realize that understanding both offense and defense is necessary to become a good security professional.
      </p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Offensive Security:</strong> Activities like scanning for vulnerabilities, exploiting weaknesses, and testing systems ethically.</li>
        <li><strong>Defensive Security:</strong> Monitoring logs, preventing attacks, and responding to security incidents.</li>
        <li><strong>Attack Lifecycle:</strong> Steps attackers take to breach systems: Recon → Scan → Exploit → Maintain Access.</li>
        <li><strong>Security Terms:</strong> Basic words used in cybersecurity, like vulnerability, exploit, payload, and threat.</li>
      </ul>
  `
},
{
  id: 4,
  platform: "TryHackMe",
  title: "Blue Team Basics",
  icon: "tryhackme",
  topics: ["SIEM Tools", "Incident Response", "Threat Analysis", "Monitoring Techniques"],
  description: `
      <h3 class="font-bold text-xl mb-2 text-primary">Blue Team Basics</h3>
      <p class="mb-4">
        This lesson focused on the Blue Team, which is the defensive side of cybersecurity. Blue Team members watch systems, analyze 
        alerts, and respond to attacks. I learned how SIEM tools collect and organize logs to help detect threats quickly. I also learned 
        the steps of incident response, which includes identifying, containing, and fixing security issues. Monitoring techniques like 
        network traffic analysis and endpoint protection are very important to catch attackers early. This lesson showed me how defenders 
        think and work to keep systems safe.
      </p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>SIEM Tools:</strong> Platforms that collect, analyze, and report on logs to detect threats faster.</li>
        <li><strong>Incident Response:</strong> Steps to investigate and fix security problems after an attack.</li>
        <li><strong>Threat Analysis:</strong> Understanding attacker methods to prevent future attacks.</li>
        <li><strong>Monitoring Techniques:</strong> Watching network and endpoint activity for suspicious behavior.</li>
      </ul>
  `
},
{
  id: 5,
  platform: "TryHackMe",
  title: "Careers in Cybersecurity",
  icon: "tryhackme",
  topics: ["Penetration Tester", "SOC Analyst", "Incident Responder", "Threat Hunter"],
  description: `
      <h3 class="font-bold text-xl mb-2 text-primary">Careers in Cybersecurity</h3>
      <p class="mb-4">
        This lesson introduced me to different jobs in cybersecurity. Each role has different responsibilities, skills, and tools. 
        Penetration testers legally hack systems to find weaknesses. SOC analysts monitor security events and respond to alerts. 
        Incident responders manage breaches and help recover systems. Threat hunters proactively look for hidden attacks inside networks. 
        Learning about these roles helped me see what career paths I might like and what skills I need to develop for each one.
      </p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>Penetration Tester:</strong> Tests systems by ethically exploiting vulnerabilities.</li>
        <li><strong>SOC Analyst:</strong> Watches security alerts and investigates issues.</li>
        <li><strong>Incident Responder:</strong> Responds to and fixes security breaches.</li>
        <li><strong>Threat Hunter:</strong> Searches networks for hidden threats before they cause harm.</li>
      </ul>
  `
},
{
  id: 6,
  platform: "TryHackMe",
  title: "What is Networking?",
  icon: "tryhackme",
  topics: ["IP Addressing", "Routing & Switching", "Protocols", "Packets"],
  description: `
      <h3 class="font-bold text-xl mb-2 text-primary">What is Networking?</h3>
      <p class="mb-4">
        This lesson taught me the basics of networking and how computers talk to each other. I learned that data is broken into packets 
        and sent through routers and switches to reach the correct destination. Protocols like TCP, UDP, and ICMP define the rules for 
        communication. Networking is important in cybersecurity because most attacks travel through networks, so understanding it is 
        crucial to protect systems.
      </p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>IP Addressing:</strong> How devices identify each other on a network.</li>
        <li><strong>Routing & Switching:</strong> How data travels through networks to reach the right destination.</li>
        <li><strong>Protocols:</strong> Rules for sending and receiving data (TCP, UDP, ICMP).</li>
        <li><strong>Packets:</strong> Small pieces of data sent across networks to form messages or files.</li>
      </ul>
  `
},
{
  id: 7,
  platform: "TryHackMe",
  title: "DNS in Detail",
  icon: "tryhackme",
  topics: ["DNS Lookup Process", "Record Types", "DNS Attacks", "Resolvers"],
  description: `
      <h3 class="font-bold text-xl mb-2 text-primary">DNS in Detail</h3>
      <p class="mb-4">
        This lesson explained how DNS works to translate website names into IP addresses. I learned the full process: 
        the browser asks a resolver, which goes through root servers, TLD servers, and authoritative servers to find the correct IP. 
        I also learned about DNS record types (A, AAAA, CNAME, MX, TXT) and how attackers can misuse DNS with attacks like spoofing, 
        cache poisoning, and hijacking. Understanding DNS is important because it is a common target for hackers.
      </p>
      <ul class="list-disc ml-6 space-y-2">
        <li><strong>DNS Lookup Process:</strong> Browser &rarr; Resolver &rarr; Root &rarr; TLD &rarr; Authoritative server &rarr; Returns IP address.</li>
        <li><strong>Record Types:</strong> Different records like A, AAAA, CNAME, MX, TXT store various information.</li>
        <li><strong>DNS Attacks:</strong> Techniques attackers use to redirect or manipulate traffic.</li>
        <li><strong>Resolvers:</strong> Servers that store DNS answers and help browsers find IP addresses.</li>
      </ul>
  `
}
];

const CybersecSection = () => {
  const [selectedNote, setSelectedNote] = useState<CybersecNote | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionContainer = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16";
  const sectionTitle = "text-4xl font-extrabold text-foreground font-serif text-center";
  const sectionSubtitle = "text-lg text-muted-foreground text-center mt-2";
  const cardFeminine = "bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1";


  return (
    <section id="cybersec" className="bg-secondary/30 min-h-screen pt-16 pb-32">
      <div className={sectionContainer}>
        <div className="mb-12">
          <h2 className={sectionTitle}>Cybersecurity Journey</h2>
          <p className={sectionSubtitle}>Knowledge from TryHackMe & Hack The Box</p>
        </div>

        {/* LAYOUT FIX: Changed from sm:grid-cols-2 to sm:grid-cols-2 lg:grid-cols-3 to match the requested layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cybersecNotes.map((note, index) => (
            <div
              key={note.id}
              onClick={() => {
                setSelectedNote(note);
                setIsModalOpen(true);
              }}
              className={`${cardFeminine} cursor-pointer group animate-fade-in`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon and background logic based on platform */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  note.icon === "tryhackme" ? "bg-rose-light" : "bg-accent"
                }`}>
                  {note.icon === "tryhackme" ? (
                    <Shield className="w-6 h-6 text-primary" /> // TryHackMe -> Shield (Rose BG)
                  ) : (
                    <Terminal className="w-6 h-6 text-accent-foreground" /> // HackTheBox -> Terminal (Accent BG)
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {note.platform}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors truncate">
                    {note.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {/* Extract plain text snippet for display on the card */}
                    {note.description.replace(/<[^>]*>/g, '').substring(0, 100)}...
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-4" />
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="bg-card border-border">
            <DialogHeader>
               {/* Icon in Modal Header for consistency */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${
                  selectedNote?.icon === "tryhackme" ? "bg-rose-light" : "bg-accent"
              }`}>
                {selectedNote?.icon === "tryhackme" ? (
                    <Shield className="w-6 h-6 text-primary" />
                ) : (
                    <Terminal className="w-6 h-6 text-accent-foreground" />
                )}
              </div>
              <DialogTitle className="font-serif text-3xl">
                {selectedNote?.title}
              </DialogTitle>
            </DialogHeader>
            <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full w-fit">
              {selectedNote?.platform}
            </span>
            
            {/* Use dangerouslySetInnerHTML to render the rich HTML content */}
            {selectedNote?.description && (
                <div 
                    className="text-muted-foreground leading-relaxed mt-4 [&>h3]:text-xl [&>h4]:text-lg [&>ul]:space-y-2 [&>p]:mb-4"
                    dangerouslySetInnerHTML={{ __html: selectedNote.description }}
                />
            )}
            
            {/* Topics are shown separately at the bottom */}
            <div className="space-y-2 pt-4 border-t border-dashed border-gray-200 mt-4">
              <p className="font-medium text-foreground">Topics learned:</p>
              <ul className="flex flex-wrap gap-2">
                {selectedNote?.topics.map((topic, index) => (
                  <li key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full shadow-sm">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};


const TailwindScript = () => (
    <script src="https://cdn.tailwindcss.com"></script>
);
const TailwindConfig = `
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap');
</style>
<script>
  tailwind.config = {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
        },
        colors: {
          border: 'hsl(214.3 31.8% 91.4%)',
          input: 'hsl(214.3 31.8% 91.4%)',
          ring: 'hsl(222.2 47.4% 11.2%)',
          background: 'hsl(0 0% 100%)',
          foreground: 'hsl(222.2 47.4% 11.2%)',
          primary: {
            DEFAULT: 'hsl(340 82% 52%)', // Rose Pink
            foreground: 'hsl(0 0% 100%)',
          },
          secondary: {
            DEFAULT: 'hsl(210 40% 96.1%)',
            foreground: 'hsl(222.2 47.4% 11.2%)',
          },
          accent: {
            DEFAULT: 'hsl(210 40% 96.1%)', // Light Gray/Blue
            foreground: 'hsl(222.2 47.4% 11.2%)',
          },
          card: {
            DEFAULT: 'hsl(0 0% 100%)',
            foreground: 'hsl(222.2 47.4% 11.2%)',
          },
          muted: {
            DEFAULT: 'hsl(210 40% 96.1%)',
            foreground: 'hsl(215.4 16.3% 46.9%)',
          },
          'rose-light': 'hsl(340 82% 90%)',
        },
        borderRadius: {
          xl: '12px',
          lg: '8px',
          md: '6px',
        },
      }
    }
  }
</script>
`;

export default CybersecSection;