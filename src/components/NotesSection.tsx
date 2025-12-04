import { useState } from "react";
import { BookOpen, ChevronRight, Zap } from "lucide-react";

const Dialog = ({ open, onOpenChange, children }) => (
  <div 
    className={`fixed inset-0 z-50 overflow-y-auto ${open ? 'block' : 'hidden'}`}
    style={{ backgroundColor: open ? 'rgba(0, 0, 0, 0.5)' : 'transparent', transition: 'background-color 0.3s' }}
    onClick={() => onOpenChange(false)}
  >
    <div className="flex min-h-full items-center justify-center p-4">
      <div 
        className={`w-full max-w-lg rounded-xl bg-card border border-border shadow-2xl transform transition-all duration-300 ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
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

interface Note {
  id: number;
  subject: string;
  description: string;
  topics: string[];
  content_html?: string; 
}

const notes: Note[] = [
  {
    id: 1,
    subject: "Web Development (Full Stack)",
    description: "Comprehensive notes on Frontend (HTML, CSS, JS/React) and Backend (PHP, Laravel, Laragon).",
    topics: ["HTML5 Semantics", "CSS Layout", "Bootstrap/UI", "JavaScript/React", "PHP Fundamentals", "Laravel Framework", "Laragon"],
    content_html: `
      <h3 class="font-bold text-xl mb-2 text-primary">Frontend Development</h3>
      <p class="mb-4">The client-side development focuses on the user experience and visual interface:</p>
      <ul>
        <li><strong>HTML5 Semantics:</strong> Using correct tags (<code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>) for structure, accessibility, and SEO.</li>
        <li><strong>CSS Layout:</strong> Mastering Flexbox and Grid for responsive, modern layouts.</li>
        <li><strong>JavaScript ES6+/React:</strong> Understanding core concepts, asynchronous programming (Promises, async/await), and using modern libraries like React for building complex user interfaces.</li>
        <li><strong>Bootstrap:</strong> A powerful, open-source CSS framework for creating responsive, mobile-first websites quickly with pre-built components and utility classes.</li>
      </ul>

      <h3 class="font-bold text-xl mb-2 mt-6 text-primary">Backend Development & Environment</h3>
      <p class="mb-4">The server-side development manages data, logic, and application performance:</p>
      <ol>
        <li><strong>PHP Fundamentals:</strong> A widely-used server-side scripting language, particularly popular in web development. Key areas include server-side processing, database interaction, and session management.</li>
        <li><strong>Laravel Framework:</strong> A leading, elegant PHP framework known for its expressive syntax, MVC (Model-View-Controller) architecture, and features like routing, database ORM (Eloquent), and template engine (Blade). It speeds up complex application development.</li>
        <li><strong>Laragon:</strong> A portable, isolated development environment (like XAMPP or MAMP) that provides a fast, one-click installer for WAMP (Windows, Apache/Nginx, MySQL, PHP). It simplifies local setup and management of multiple PHP/Laravel projects.</li>
      </ol>
    `,
  },
  {
    id: 2,
    subject: "Database Management",
    description: "SQL queries, database design, and normalization concepts.",
    topics: ["SQL Basics", "Database Design", "Normalization", "Entity Relationships"],
    content_html: `
      <p>Relational databases are critical for data integrity and structure. Key concepts:</p>
      <ul>
        <li><strong>Normalization:</strong> Organizing tables to reduce data redundancy (1NF, 2NF, 3NF).</li>
        <li><strong>SQL:</strong> Writing efficient queries using JOINs, aggregations (COUNT, SUM), and subqueries.</li>
        <li><strong>Transactions:</strong> Ensuring ACID properties (Atomicity, Consistency, Isolation, Durability) are maintained during data operations.</li>
      </ul>
    `,
  },
  {
    id: 3,
    subject: "Object-Oriented Programming",
    description: "OOP principles, design patterns, and best practices.",
    topics: ["Encapsulation", "Inheritance", "Polymorphism", "Design Patterns"],
    content_html: `
      <p>OOP helps in structuring code into modular, reusable, and maintainable units. The four pillars are:</p>
      <ul>
        <li><strong>Encapsulation:</strong> Bundling data and methods that operate on the data (hiding internal state).</li>
        <li><strong>Inheritance:</strong> Creating new classes based on existing ones.</li>
        <li><strong>Polymorphism:</strong> Allowing methods to do different things based on the object it is called upon.</li>
        <li><strong>Abstraction:</strong> Showing only essential information and hiding complex implementation details.</li>
      </ul>
    `,
  },
  {
    id: 4,
    subject: "Burp Suite Core Tools (P R I S S)",
    description: "Integrated toolkit para sa web security testing — ginagamit ng security pros at bug bounty hunters.",
    topics: ["Proxy", "Repeater", "Intruder", "Scanner", "Sequencer"],
    content_html: `
      <h3 class="font-bold text-xl mb-2 text-primary">Key Concepts:</h3>
      <p class="mb-4">Burp Suite is an essential, integrated toolkit used by security professionals and bug bounty hunters to perform web application security testing. It is a powerful magnifying glass and toolkit for web traffic.</p>
      
      <h4 class="font-semibold text-lg mt-4 mb-2">Core Tools — Remember P R I S S:</h4>
      <ol>
        <li><strong>Proxy:</strong> Intercepts and modifies HTTP/S traffic, acting like a man-in-the-middle to analyze requests and responses (paulit ulit).</li>
        <li><strong>Repeater:</strong> Allows a user to take a captured request, modify it, and re-send it multiple times (pwedeng isend multiple).</li>
        <li><strong>Intruder:</strong> Automates sending payloads for attacks like SQLi or XSS. Attack modes include Sniper, Battering ram, Pitchfork, and Cluster bomb.</li>
        <li><strong>Scanner (Pro):</strong> Automatically identifies common web application vulnerabilities.</li>
        <li><strong>Sequencer:</strong> Checks the randomness and predictability (predictable?) of security-critical tokens, such as session IDs.</li>
      </ol>

      <h3 class="font-bold text-xl mb-2 mt-6 text-primary">Conclusion: Burp Suite for Web Security</h3>
      <p>Essential tool para sa web app testing and vulnerability scanning. Available sa Community (free) at Professional (paid). Continuous learning is key — the more you use Burp, the better you get in finding and fixing web security issues.</p>
    `,
  },
  {
    id: 5,
    subject: "DVWA (Damn Vulnerable Web App)",
    description: "A PHP/MySQL web application intentionally built to be insecure for hacking and securing practice.",
    topics: ["Learning Environment", "Vulnerability Practice", "Secure Coding", "Legal Hacking"],
    content_html: `
      <p>DVWA is a demonstration web application written in PHP and MySQL that is intentionally insecure. This environment is used by students and professionals to practice identifying, exploiting, and securing common web vulnerabilities in a legal and safe environment (Ginagamit para mag-practice ng hacking and securing apps sa legal environment).</p>
      <p>It includes common vulnerabilities like SQL Injection, XSS, CSRF, and File Inclusion, allowing hands-on learning across different security levels.</p>
    `,
  },
  {
    id: 6,
    subject: "CWE-35 Path Traversal (LFI/RFI)",
    description: "Attacker gains access to unauthorized files or directories by manipulating file paths using dot-dot-slash (../).",
    topics: ["Directory Traversal", "File System", "Input Validation", "Canonicalization"],
    content_html: `
      <h3 class="font-bold text-xl mb-2 text-primary">CWE-35: Path Traversal (Directory Traversal)</h3>
      <p class="mb-4">This vulnerability occurs when an attacker gains access to unauthorized files or directories by manipulating file paths using symbols like <code>../</code> or <code>..\\</code>.</p>
      
      <h4 class="font-semibold text-lg mt-4 mb-2">How it Works: File System Basics</h4>
      <p>File systems are structured like a tree (folders inside folders).</p>
      <ul>
        <li><code>.</code> = current directory</li>
        <li><code>..</code> = parent directory</li>
      </ul>
      <p class="mt-2">Attackers exploit these symbols to “move up” the tree. </p>
      <p class="mt-2"><strong>Example:</strong> If a web application retrieves a file based on user input, the malicious path <code>/safe/../etc/passwd</code> can be normalized to <code>/etc/passwd</code>, exposing sensitive system files.</p>

      <h4 class="font-semibold text-lg mt-4 mb-2">Consequences</h4>
      <ul>
        <li>Unauthorized access to sensitive information (e.g., source code, configuration files).</li>
        <li>Modification or deletion of critical files.</li>
        <li>Further system compromise if attacker gains read access to credentials or private keys.</li>
      </ul>

      <h4 class="font-semibold text-lg mt-4 mb-2">Common Attack Techniques (Payloads)</h4>
      <ul class="grid grid-cols-2 gap-x-4">
        <li>Simple: <code>../</code> or <code>..\\</code></li>
        <li>URL encode: <code>%2e%2e%2f</code></li>
        <li>Double encode: <code>%252e%252e%252f</code></li>
        <li>Unicode encode: <code>%u002e%u002e%u002f</code></li>
        <li>Mangled paths: <code>....//...</code></li>
        <li>Null byte termination: <code>%00</code> (can sometimes bypass older filters)</li>
      </ul>
      
      <h4 class="font-semibold text-lg mt-6 mb-2 text-primary">Prevention Checklist</h4>
      <ol>
        <li><strong>Normalize Paths:</strong> Use built-in functions to resolve relative paths and canonicalize the final path.</li>
        <li><strong>Boundary Check:</strong> Reject the request if the normalized path attempts to escape the predefined base directory.</li>
        <li><strong>Allowlist Input:</strong> Validate & allowlist filenames (only expected names).</li>
        <li><strong>Avoid Raw Input:</strong> Never use raw user input directly in file path construction.</li>
        <li><strong>Least Privilege:</strong> Restrict file permissions and use sandboxing (like <code>chroot</code>) to minimize the impact of a successful exploit.</li>
      </ol>
    `,
  },
  {
    id: 7,
    subject: "CWE-79 Cross-Site Scripting (XSS)",
    description: "A web security vulnerability that allows an attacker to compromise interactions between users and a vulnerable application.",
    topics: ["Reflected XSS", "Stored XSS", "DOM-Based XSS", "Output Encoding", "CSP"],
    content_html: `
      <h3 class="font-bold text-xl mb-2 text-primary">CWE-79: Cross-Site Scripting (XSS)</h3>
      <p class="mb-4">XSS is a web security vulnerability that allows an attacker to compromise the interactions that users have with a vulnerable application.</p>
      
      <h4 class="font-semibold text-lg mt-4 mb-2">How it Works</h4>
      <ol>
        <li>Attacker injects malicious JavaScript (the payload).</li>
        <li>The vulnerable application/page displays this payload without proper escaping.</li>
        <li>The victim's browser executes the script in the context of the site.</li>
      </ol>
      <p class="mt-2">This effectively bypasses the browser's same-origin policy, allowing the attacker to compromise the user-site interaction. </p>

      <h4 class="font-semibold text-lg mt-4 mb-2">Types of XSS Attacks (R S D U Self)</h4>
      <ul class="space-y-2">
        <li><strong>Reflected (R):</strong> Payload ipinapasa sa request (URL/form); hindi naka-store. User must click crafted link. <em>(Persistence: non-persistent)</em>. <strong>Remember:</strong> Reflected = Request &rarr; Response.</li>
        <li><strong>Stored (S):</strong> Payload naka-store sa server (comments, profiles, DB). Maraming users ma-apektuhan. <em>(Persistence: persistent)</em>. <strong>Remember:</strong> Stored = saved &rarr; many victims.</li>
        <li><strong>DOM-Based (D):</strong> Client-side only. JS modifies the DOM using untrusted data (e.g., from the URL hash) &mdash; server maaaring walang alam. <em>(Persistence: client-side)</em>. <strong>Remember:</strong> DOM = browser only, Type 0.</li>
        <li><strong>Universal (uXSS / U):</strong> Exploits a browser or extension flaw, affecting any site visited (Special/Critical).</li>
        <li><strong>Self-XSS (Self):</strong> Social engineering; user pinapapasok script sa console (not a direct site bug).</li>
      </ul>

      <h4 class="font-semibold text-lg mt-6 mb-2">Consequences</h4>
      <ul>
        <li>Session hijacking / cookie theft (Theft of <code>document.cookie</code>).</li>
        <li>Data theft / Account takeover.</li>
        <li>Site defacement / Phishing overlays.</li>
        <li>Unauthorized actions on victim’s behalf (e.g., initiating fund transfers).</li>
      </ul>
      
      <h4 class="font-semibold text-lg mt-6 mb-2 text-primary">XSS Prevention</h4>
      <ol>
        <li><strong>Contextual Output Encoding/Escaping:</strong> The most crucial defense. Encode data based on where it will be placed (HTML, JS, URL, attribute).</li>
        <li><strong>Input Validation:</strong> Check the type, length, and allowed characters of user input.</li>
        <li><strong>Content Security Policy (CSP):</strong> A strong defense header to limit allowed script sources (inline scripts, remote domains).</li>
        <li><strong>HTTPOnly Cookies:</strong> Set the <code>HttpOnly</code> flag on cookies to block client-side JavaScript access.</li>
        <li><strong>Sanitization:</strong> Use secure libraries (e.g., DOMPurify) to remove dangerous markup before display, especially for user-generated HTML.</li>
        <li><strong>Avoid Unsafe Functions:</strong> Do not use functions like <code>innerHTML</code>, <code>document.write()</code>, or <code>eval()</code> with untrusted data.</li>
      </ol>
    `,
  },
  {
    id: 8,
    subject: "Cyber Hygiene & Defensive Measures",
    description: "Practical steps for personal online safety, including password, network, and data protection.",
    topics: ["Social Engineering", "Phishing", "MFA", "VPN", "Backups", "Software Updates", "Antivirus"],
    content_html: `
      <h3 class="font-bold text-xl mb-2 text-primary">Common Attacks & Defensive Strategies</h3>
      <p class="mb-4">A combination of psychological manipulation and technical defenses keeps you secure online. </p>

      <h4 class="font-semibold text-lg mt-4 mb-2">1. Social Engineering & Phishing</h4>
      <p><strong>Social Engineering (SE):</strong> Manipulating a human target into giving sensitive information (e.g., "people hacker").</p>
      <p><strong>Phishing:</strong> A subtype of SE using deceptive communications (emails, SMS) to lure individuals.
      <ul class="ml-4 list-disc space-y-1 mt-1">
        <li><strong>Smishing:</strong> Phishing over SMS.</li>
        <li><strong>Vishing:</strong> Phishing over voice (voice chat/call).</li>
        <li><strong>Types:</strong> General (mass, easy to spot), Spearphishing (targeted small groups), Whaling (targeting high-value individuals).</li>
      </ul>
      <p class="mt-2"><strong>Prevention:</strong> Always verify identity, delete unknown emails, avoid clicking suspicious links/attachments, and never make personal info public.</p>

      <h4 class="font-semibold text-lg mt-4 mb-2">2. Malware and Ransomware</h4>
      <p><strong>Malware:</strong> Malicious software used for stealing information and C2 (Command and Control).</p>
      <p><strong>Ransomware:</strong> Specialized malware that encrypts systems and demands money, spreading rapidly (e.g., WannaCry using EternalBlue vulnerability).</p>
      <p class="mt-2"><strong>Prevention:</strong> Always accept software updates/patches, use up-to-date Antivirus with signature updates, beware of downloads, and never plug in untrusted devices.</p>

      <h4 class="font-semibold text-lg mt-4 mb-2">3. Authentication & Password Security</h4>
      <ul class="ml-4 list-disc space-y-1 mt-1">
        <li><strong>Strong Passwords:</strong> Long, random combinations of mixed case letters, symbols, and numbers, or using a long passphrase.</li>
        <li><strong>Weak Passwords:</strong> Short, simple words, common names/years, and password reuse.</li>
        <li><strong>MFA (Multi-Factor Authentication):</strong> Requires more than one factor (e.g., TOTP - Time-based One-Time Password) to log in, significantly blocking attackers.</li>
        <li><strong>Password Managers:</strong> Recommended tool to safely store encrypted passwords in "vaults" and generate strong, unique passwords.</li>
      </ul>

      <h4 class="font-semibold text-lg mt-4 mb-2">4. Network Safety and Backups</h4>
      <ul class="ml-4 list-disc space-y-1 mt-1">
        <li><strong>Public Wi-Fi:</strong> Dangerous due to Man-in-the-Middle (MITM) attacks. Use a trusted VPN (like ProtonVPN, Mullvad) to encrypt all incoming/outgoing traffic.</li>
        <li><strong>Website Security:</strong> Ensure connections use HTTPS (HyperText Transfer Protocol Secure), which employs TLS (Transport Layer Security) for encryption.</li>
        <li><strong>Backups:</strong> Essential defensive measure. Follow the <strong>Golden 3-2-1 Rule</strong>: <strong>3</strong> copies of data (original + 2 backups), stored on <strong>2</strong> different media types, with <strong>1</strong> copy stored off-site.</li>
      </ul>
    `,
  },
  {
    id: 9,
    subject: "Cryptography and Hash Functions",
    description: "Core principles of secure communication, including encryption types, algorithms, and data integrity.",
    topics: ["Symmetric Encryption", "Asymmetric Encryption", "Hashing", "Integrity", "Non-repudiation", "AES", "RSA"],
    content_html: `
      <h3 class="font-bold text-xl mb-2 text-primary">Principles of Cryptography</h3>
      <p class="mb-4">Cryptography ensures secure communication through four main goals:</p>
      <ol>
        <li><strong>Encryption:</strong> Hiding the code (plaintext to ciphertext).</li>
        <li><strong>Authentication:</strong> Verifying the identity of the sender/receiver.</li>
        <li><strong>Integrity:</strong> Making sure the file has not been changed (uses hash functions).</li>
        <li><strong>Non-Repudiation:</strong> Proof of who sent the message (cannot deny it).</li>
      </ol>

      <h4 class="font-semibold text-lg mt-4 mb-2">Encryption Types (Ciphers)</h4>
      <ul class="space-y-2">
        <li><strong>Symmetric Encryption (One Key):</strong> Uses the same secret key for both encryption and decryption.
          <ul class="ml-6 list-disc mt-1">
            <li><strong>Algorithms:</strong> AES (famous, secure), DES (old, insecure), IDEA, RC (Rivest Cipher).</li>
          </ul>
        </li>
        <li><strong>Asymmetric Encryption (Two Keys):</strong> Uses a public key for encryption and a different private key for decryption.
          <ul class="ml-6 list-disc mt-1">
            <li><strong>Algorithms:</strong> RSA (for public key encryption), DSA/ECDSA (for digital signatures).</li>
          </ul>
        </li>
      </ul>

      <h4 class="font-semibold text-lg mt-4 mb-2">Hash Functions</h4>
      <p>Takes plaintext and produces a unique, fixed-length hashed text (a digest). Primarily used for integrity checking (if the hash changes, the data changed).</p>

      <h4 class="font-semibold text-lg mt-4 mb-2">Transport Encryption</h4>
      <p>Protection while data is moving (in transit). <strong>End-to-End (E2E) Encryption</strong> means only the server (or sender) and the receiver can read/have access to the data.</p>
    `,
  },
  {
    id: 10,
    subject: "CWE-78 OS Command Injection",
    description: "Exploiting an application vulnerability to execute arbitrary commands on the host operating system.",
    topics: ["Arbitrary Commands", "Command Separators", "Argument Injection", "Command Injection", "Parameterization"],
    content_html: `
      <h3 class="font-bold text-xl mb-2 text-primary">CWE-78: OS Command Injection</h3>
      <p class="mb-4">An attack where an attacker exploits a vulnerability in an application to make the host operating system execute arbitrary commands, granting the attacker full control, even if the app normally lacks direct OS access.</p>
      
      <h4 class="font-semibold text-lg mt-4 mb-2">Vulnerability Point: External Input & Separators</h4>
      <p>The vulnerability arises when un-filtered user input is directly used in a command execution function.</p>
      <p><strong>Special Characters:</strong> Command separators like <code>;</code>, <code>&</code>, <code>|</code>, or <code>||</code> allow an attacker to chain their own command after the intended one.</p>
      
      <h4 class="font-semibold text-lg mt-4 mb-2">Subtypes</h4>
      <ul class="space-y-2">
        <li><strong>Argument Injection:</strong> The input becomes an argument to a fixed command.
          <p class="text-sm text-gray-600 mt-1"><em>Example:</em> <code>system("nslookup [HOSTNAME]")</code> where <code>[HOSTNAME]</code> contains <code>; malicious_command</code>.</p>
        </li>
        <li><strong>Command Injection:</strong> The input fully dictates which program and command to run.
          <p class="text-sm text-gray-600 mt-1"><em>Example:</em> <code>exec([COMMAND])</code> where <code>[COMMAND]</code> is provided entirely by the attacker.</p>
        </li>
      </ul>

      <h4 class="font-semibold text-lg mt-6 mb-2 text-primary">Primary Mitigations</h4>
      <ol>
        <li><strong>Output Encoding/Escaping/Quoting:</strong> The command execution utility safely handles special characters.</li>
        <li><strong>Parameterization / Safe Functions:</strong> Use functions that pass arguments separately from the command string.</li>
        <li><strong>Defense-in-Depth:</strong> Input Validation (checking format/length), Attack Surface Reduction, and using vetted libraries.</li>
      </ol>
    `,
  },
  {
    id: 11,
    subject: "CWE-89 SQL Injection",
    description: "Manipulating an application's SQL query by injecting malicious instructions via untrusted user input.",
    topics: ["SQL Query", "Untrusted Input", "Login Bypass", "Prepared Statements", "Input Validation"],
    content_html: `
      <h3 class="font-bold text-xl mb-2 text-primary">CWE-89: SQL Injection (Structured Query Language)</h3>
      <p class="mb-4">This happens when an application uses untrusted user input to construct an SQL query without properly neutralizing special characters. This allows an attacker to inject their own SQL commands, potentially gaining unauthorized access to the database.</p>
      
      <h4 class="font-semibold text-lg mt-4 mb-2">Example: Login Bypass</h4>
      <p><strong>Intended Query:</strong> <code>SELECT * FROM users WHERE username = 'USER' AND password = 'PASS';</code></p>
      <p><strong>Malicious Input:</strong> Username: <code>' OR '1'='1</code></p>
      <p><strong>Resulting Query:</strong> <code>SELECT * FROM users WHERE username = '' OR '1'='1' AND password = 'PASS';</code></p>
      <p class="text-sm text-red-500">The <code>'1'='1'</code> condition is always true, bypassing the intended password check.</p>

      <h4 class="font-semibold text-lg mt-6 mb-2 text-primary">Primary Mitigations</h4>
      <ol>
        <li><strong>Prepared Statements (Parameterization):</strong> The most effective defense. The query structure is sent to the database separately from the user data, so input is treated strictly as data, never as executable code.</li>
        <li><strong>Input Validation:</strong> Limiting the format, length, and allowed characters of user input to reduce the attack surface.</li>
        <li><strong>Stored Procedures:</strong> Safe only if they do not contain dynamic SQL concatenation.</li>
        <li><strong>Escaping:</strong> Used only as a last resort, as it is highly error-prone.</li>
      </ol>
    `,
  },
  {
    id: 12,
    subject: "Cloud and Virtualization Fundamentals",
    description: "Concepts of hypervisors, cloud storage, deployment models, and access security.",
    topics: ["Hypervisor Type 1/2", "Cloud Models", "CASB", "CDN", "Virtualization"],
    content_html: `
      <h3 class="font-bold text-xl mb-2 text-primary">Virtualization (Hypervisors)</h3>
      <p class="mb-4">Virtualization allows running multiple Operating Systems (OS) on a single physical machine using a <strong>Hypervisor</strong> (Virtual Machine Monitor).</p>
      <ul class="space-y-2">
        <li><strong>Type 1 (Native/Bare-metal):</strong> Runs directly on the host hardware (e.g., ESXi, Proxmox), giving it direct access to resources.</li>
        <li><strong>Type 2 (Hosted):</strong> Runs as a software layer on top of an existing host OS (e.g., VirtualBox, VMware Workstation).</li>
      </ul>
      <p class="mt-4 text-sm text-muted-foreground">Flow: Hardware &rarr; [Type 1 Hypervisor] &rarr; Virtualized OSes (or) Hardware &rarr; Host OS &rarr; [Type 2 Hypervisor] &rarr; Virtualized OSes.</p>

      <h4 class="font-semibold text-lg mt-4 mb-2">Cloud Deployment Models</h4>
      <ul class="ml-4 list-disc space-y-1">
        <li><strong>Public:</strong> Resources shared over the internet (AWS, Google Drive). Most common.</li>
        <li><strong>Private:</strong> Cloud environment functions within an internal environment (e.g., AWS GovCloud).</li>
        <li><strong>Hybrid:</strong> Mix of private and public, using both internal organizational resources and public services.</li>
        <li><strong>Community:</strong> Resources and costs are shared among several organizations with a common service need.</li>
      </ul>

      <h4 class="font-semibold text-lg mt-4 mb-2">Cloud Services and Security</h4>
      <ul class="ml-4 list-disc space-y-1">
        <li><strong>Cloud Storage:</strong> Applications (Drive, Dropbox) and File Synchronization (auto-update).</li>
        <li><strong>CDN (Content Delivery Network):</strong> Optimizes speed by finding the closest server to the user.</li>
        <li><strong>CASB (Cloud Access Security Broker):</strong> Ensures the right device uses the right security when connecting to the cloud, monitoring usage and controlling access to reduce data theft.</li>
      </ul>
    `,
  },
  {
    id: 13,
    subject: "Integration Technologies and Python Fundamentals",
    description: "Key concepts in connecting different systems, including the role of Middleware, APIs, and Customer Relationship Management (CRM) systems, alongside foundational knowledge of Python programming.",
    topics: [
      "Middleware Concepts (EAI)",
      "API Gateways and REST APIs",
      "Customer Relationship Management (CRM)",
      "Python Basics and Syntax",
      "System Interoperability"
    ],
    content_html: "<h3>System Integration Essentials</h3><p><strong>Middleware:</strong> Software that acts as a bridge between operating systems, databases, and applications, enabling communication and data exchange. Often used in Enterprise Application Integration (EAI) to connect disparate systems across an organization.</p><p><strong>API (Application Programming Interface):</strong> A set of rules and protocols for building and interacting with software applications. REST (Representational State Transfer) is a common architectural style for web APIs, using standard HTTP methods (GET, POST, PUT, DELETE).</p><p><strong>CRM (Customer Relationship Management):</strong> A technology for managing all your company's relationships and interactions with customers and potential customers. The goal is to improve business relationships.</p><h3>Python Fundamentals</h3><ul><li><strong>Syntax:</strong> Python emphasizes readability, often using indentation (whitespace) to define code blocks (e.g., in loops and functions), unlike many languages that use curly braces.</li><li><strong>Data Types:</strong> Includes basic types like <code>int</code>, <code>float</code>, <code>str</code>, and complex types like <code>list</code> (ordered, mutable), <code>tuple</code> (ordered, immutable), <code>dict</code> (key-value pairs, mutable), and <code>set</code> (unordered, unique elements).</li><li><strong>Control Flow:</strong> Uses <code>if/elif/else</code> for conditional logic and <code>for</code> and <code>while</code> loops for iteration.</li></ul>"
  },
  {
    id: 14,
    subject: "Data Flow Diagrams and System Analysis",
    description: "Understanding the core responsibilities of a System Analyst and the process of documenting system data flows using Data Flow Diagrams (DFD) from Context (Level 0) down to Level 2 modeling.",
    topics: [
      "System Analyst Role and Skills",
      "DFD Context Diagram (Level 0)",
      "DFD Decomposition (Level 1 and 2)",
      "Process Modeling and Data Stores",
      "External Entities"
    ],
    content_html: "<h3>Role of the System Analyst</h3><p>The System Analyst (SA) bridges the gap between business needs and IT solutions. Their roles include gathering requirements, analyzing existing systems, designing new systems (logical and physical design), and managing system implementation.</p><h3>Data Flow Diagrams (DFDs)</h3><p>DFDs model how information flows through a system. They use four primary symbols: Processes, Data Stores, External Entities, and Data Flows.</p><p><strong>Levels of DFDs:</strong></p><ul><li><strong>Context Diagram (Level 0):</strong> The highest-level view. Shows the entire system as a single process and its interactions with External Entities (sources and sinks of data). [Image of DFD Context Diagram]</li><li><strong>Level 1 Diagram:</strong> Decomposes the single process from the Context Diagram into its major functional processes. It shows the flow of data between these processes and the major Data Stores.</li><li><strong>Level 2 Diagram:</strong> Decomposes a single process from the Level 1 Diagram into even more detailed sub-processes. This level often provides enough detail for programmers to understand the logic needed.</li></ul>"
  },
  {
    id: 15,
    subject: "Web Application Development Stack (PHP/Laravel)",
    description: "A practical guide to building web applications, focusing on responsive front-end design with Bootstrap and back-end development using PHP, the Laravel framework, and the Laragon local development environment.",
    topics: [
      "Bootstrap (CSS Framework)",
      "PHP Fundamentals",
      "Laravel Framework & MVC",
      "Laragon Local Server Setup",
      "Basic CRUD Operations"
    ],
    content_html: "<h3>Front-End Design with Bootstrap</h3><p><strong>Bootstrap:</strong> The most popular CSS framework for developing responsive and mobile-first websites. It provides pre-designed CSS and JavaScript components (e.g., navigation bars, modals, buttons) that speed up front-end development. The key is its 12-column Grid System for responsive layouts.</p><h3>Back-End Development Stack</h3><ul><li><strong>PHP Fundamentals:</strong> A powerful server-side scripting language primarily used for web development. Essential concepts include variables, arrays, conditional statements, loops, and working with superglobals (<code>$_GET</code>, <code>$_POST</code>).</li><li><strong>Laragon:</strong> A portable, isolated, fast, and powerful universal development environment for PHP, Node.js, Python, Java, etc. It simplifies the setup of Apache/Nginx, MySQL, and PHP on a local machine.</li><li><strong>Laravel Framework & MVC:</strong> Laravel is a robust PHP framework designed to make complex web applications easier to build. It follows the <strong>Model-View-Controller (MVC)</strong> architectural pattern:<ul><li><strong>Model:</strong> Handles the data and business logic (interacts with the database).</li><li><strong>View:</strong> Presents the data to the user (HTML, often generated using Blade templates).</li><li><strong>Controller:</strong> Handles user input, processes requests, and selects the appropriate Model and View.</li></ul></li><li><strong>Basic CRUD Operations:</strong> The fundamental database operations (Create, Read, Update, Delete) are essential for any web application, managed through Laravel's Eloquent ORM.</li></ul>"
  }
];

const NotesSection = () => {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getNoteIcon = (subject: string) => {
    if (subject.includes("Burp Suite") || subject.includes("DVWA") || subject.includes("CWE-") || subject.includes("Cyber Hygiene") || subject.includes("Cryptography")) {
      return <Zap className="w-6 h-6 text-indigo-600" />; 
    }
    return <BookOpen className="w-6 h-6 text-primary" />;
  };

  const getNoteIconBg = (subject: string) => {
    if (subject.includes("Burp Suite") || subject.includes("DVWA") || subject.includes("CWE-") || subject.includes("Cyber Hygiene") || subject.includes("Cryptography")) {
      return "bg-indigo-200"; 
    }
    return "bg-rose-light";
  };

  const cardFeminine = "bg-white/50 backdrop-blur-sm border border-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1";
  const sectionContainer = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16";
  const sectionTitle = "text-4xl font-extrabold text-foreground font-serif text-left";
  const sectionSubtitle = "text-lg text-muted-foreground text-left mt-2";

  return (
    <section id="notes" className="bg-secondary/30 min-h-screen pt-16 pb-32">
      <div className={sectionContainer}>
        <div className="mb-12">
          <h2 className={sectionTitle}>Study Notes</h2>
          <p className={sectionSubtitle}>Knowledge from different subjects</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <div
              key={note.id}
              onClick={() => {
                setSelectedNote(note);
                setIsModalOpen(true);
              }}
              className={`${cardFeminine} cursor-pointer group transition-all duration-300 ease-in-out`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${getNoteIconBg(note.subject)}`}>
                  {getNoteIcon(note.subject)}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors truncate">
                    {note.subject}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {note.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-4" />
              </div>
            </div>
          ))}
        </div>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          {/* Modal Content */}
          <DialogContent className="bg-white border-gray-200 rounded-xl max-w-2xl">
            <DialogHeader>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${getNoteIconBg(selectedNote?.subject || '')}`}>
                  {getNoteIcon(selectedNote?.subject || '')}
              </div>
              <DialogTitle className="font-serif text-3xl">
                {selectedNote?.subject}
              </DialogTitle>
            </DialogHeader>
            <p className="text-foreground mt-4 mb-4 font-medium">{selectedNote?.description}</p>
            
            {/* RENDER DETAILED CONTENT HERE */}
            {selectedNote && selectedNote.content_html && (
                <div 
                    className="text-muted-foreground leading-relaxed [&>h3]:text-xl [&>h4]:text-lg [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5"
                    dangerouslySetInnerHTML={{ __html: selectedNote.content_html }}
                />
            )}
            
            <div className="space-y-2 pt-4 border-t border-dashed border-gray-200 mt-4">
              <p className="font-medium text-foreground">Topics covered:</p>
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

const TailwindScript = () => (
    <script src="https://cdn.tailwindcss.com"></script>
);

export default NotesSection;