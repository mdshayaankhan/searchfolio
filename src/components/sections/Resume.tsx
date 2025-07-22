import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Briefcase, GraduationCap, Award, Star, Brush, User, Phone, Mail, Linkedin, Code, Database, Server, Component, Cpu, ShieldCheck, CircuitBoard, BrainCircuit, Bot, Handshake, Users, MessageSquare, Mic, Lightbulb, Projector, Globe, Camera } from 'lucide-react';
import { Separator } from '../ui/separator';
import Image from 'next/image';

const skills = {
  technical: [
    { 
      category: 'Programming Languages', 
      items: [
        { name: 'Python', icon: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png', hint: 'python logo' },
        { name: 'Java', icon: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png', hint: 'java logo' },
      ]
    },
    {
      category: 'Database System',
      items: [
        { name: 'MySQL', icon: 'https://cdn.freebiesupply.com/logos/large/2x/mysql-5-logo-png-transparent.png', hint: 'mysql logo' },
        { name: 'MongoDB', icon: 'https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png', hint: 'mongodb logo' },
      ]
    },
     {
      category: 'Web Development',
      items: [
        { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png', hint: 'html5 logo' },
        { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png', hint: 'css3 logo' },
        { name: 'MERN Stack', icon: <Code className="w-8 h-8 text-primary" /> },
        { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png', hint: 'javascript logo' },
      ]
    },
    {
      category: 'Operating System',
      items: [
        { name: 'Windows', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Unofficial_Windows_logo_variant_-_2002%E2%80%932012_%28Multicolored%29.svg/2321px-Unofficial_Windows_logo_variant_-_2002%E2%80%932012_%28Multicolored%29.svg.png', hint: 'windows logo' },
        { name: 'Linux', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Linux_Logo_in_Linux_Libertine_Font.svg/1200px-Linux_Logo_in_Linux_Libertine_Font.svg.png', hint: 'linux logo' },
      ]
    }
  ],
  soft: [
    { name: 'Communication Skills', icon: <MessageSquare className="w-8 h-8 text-primary" /> },
    { name: 'Leadership', icon: <Handshake className="w-8 h-8 text-primary" /> },
    { name: 'Teamwork', icon: <Users className="w-8 h-8 text-primary" /> },
    { name: 'Problem-Solving', icon: <Lightbulb className="w-8 h-8 text-primary" /> },
    { name: 'Adaptability', icon: <Users className="w-8 h-8 text-primary" /> },
  ]
};

const hobbies = [
    { name: 'Traveling', icon: <Globe className="w-8 h-8 text-primary" /> },
    { name: 'Volunteering', icon: <Handshake className="w-8 h-8 text-primary" /> },
    { name: 'Sports', icon: <Star className="w-8 h-8 text-primary" /> },
    { name: 'Photography', icon: <Camera className="w-8 h-8 text-primary" /> },
];

const ResumeSection = () => {
  return (
    <Card className="border-none shadow-none bg-transparent max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className='flex flex-col items-center mb-4'>
            <h1 className="text-4xl font-bold">MOHAMMED SHAYAAN KHAN</h1>
            <div className="flex items-center flex-wrap justify-center gap-4 mt-2 text-muted-foreground">
                <div className='flex items-center gap-2'><Phone className="w-4 h-4" /> +91 – 9059701978</div>
                <div className='flex items-center gap-2'><Mail className="w-4 h-4" /> khanshayaanmd@gmail.com</div>
                <a href="https://www.linkedin.com/in/mdshayaankhan" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 text-muted-foreground hover:text-primary'>
                  <Linkedin className="w-4 h-4" /> www.linkedin.com/in/mdshayaankhan
                </a>
            </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-8">
        <div>
          <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4"><User className="w-6 h-6 text-primary" /> Career Objective</h2>
          <p className="text-foreground/80 leading-relaxed">I am passionate about exploring emerging technologies and aim to join an innovative organization where I can enhance my knowledge, tackle challenging projects, and contribute meaningfully to organizational success. I am eager to leverage my technical skills, problem-solving abilities, and creative mindset to develop solutions that drive efficiency and innovation.</p>
        </div>

        <Separator />

        <div>
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4"><GraduationCap className="w-6 h-6 text-primary" /> Education</h2>
            <div className="space-y-4">
                <div>
                    <div className="flex justify-between flex-wrap">
                        <h3 className="font-bold">Malla Reddy university, Hyderabad</h3>
                        <p className="text-muted-foreground">2021 – Present</p>
                    </div>
                    <p>Bachelor of Technology, Computer Science & Engineering</p>
                    <p className="text-sm text-muted-foreground">Current CGPA: 8.7/10</p>
                </div>
                 <div>
                    <div className="flex justify-between flex-wrap">
                        <h3 className="font-bold">State Board of Secondary Education</h3>
                         <p className="text-muted-foreground">2020-2022</p>
                    </div>
                    <p>11th & 12th (Senior Secondary Examination)</p>
                    <p className="text-sm text-muted-foreground">93%</p>
                </div>
                <div>
                    <div className="flex justify-between flex-wrap">
                        <h3 className="font-bold">State Board of Secondary Education</h3>
                        <p className="text-muted-foreground">2020</p>
                    </div>
                    <p>10th (Secondary Examination)</p>
                    <p className="text-sm text-muted-foreground">100%</p>
                </div>
            </div>
        </div>

        <Separator />
        
        <div>
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Star className="w-6 h-6 text-primary" /> Technical Skills</h2>
            <div className="space-y-6">
                {skills.technical.map(skillCategory => (
                    <div key={skillCategory.category}>
                        <h3 className="font-semibold text-lg mb-3">i. {skillCategory.category}</h3>
                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                            {skillCategory.items.map(item => (
                                <div key={item.name} className="flex flex-col items-center gap-2 w-24 text-center">
                                    {typeof item.icon === 'string' ? (
                                        <Image src={item.icon} alt={item.name} width={48} height={48} data-ai-hint={item.hint} className="w-12 h-12 object-contain"/>
                                    ) : (
                                        item.icon
                                    )}
                                    <span className="text-sm">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <Separator />

        <div>
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Briefcase className="w-6 h-6 text-primary" /> Academic Projects</h2>
            <div className="space-y-6">
                <div>
                    <div className="flex justify-between flex-wrap">
                        <h3 className="font-bold">Employee Burnout Analysis (AICTE Internship Project)</h3>
                        <p className="text-sm text-muted-foreground">Dec 2024</p>
                    </div>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-foreground/80">
                      <li><strong>Description:</strong> Developed a predictive model using linear regression to analyse factors contributing to employee burnout. Conducted exploratory data analysis, data cleaning, and feature engineering.</li>
                      <li><strong>Technologies Used:</strong> Python, Google Colab, Pandas, Scikit-learn, GridSearchCV.</li>
                      <li><strong>Key Achievements:</strong> Achieved an R² score of 0.85 after hyperparameter tuning; reduced model error by 20%.</li>
                    </ul>
                    <a href="https://github.com/mdshayaankhan/Employee-Burnout-Analysis" target="_blank" rel="noreferrer" className="text-primary hover:underline text-sm mt-1 inline-block">View Repository</a>
                </div>
                 <div>
                    <div className="flex justify-between flex-wrap">
                        <h3 className="font-bold">Power BI Driven Analysis of Indian Agriculture (AICTE Internship Project)</h3>
                        <p className="text-sm text-muted-foreground">Nov 2024</p>
                    </div>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-foreground/80">
                        <li><strong>Description:</strong> Created interactive dashboards to analyse 19 years of agricultural data across crops, seasons, and regions. Provided actionable insights for policymakers.</li>
                        <li><strong>Technologies Used:</strong> Power BI, Excel.</li>
                        <li><strong>Key Achievements:</strong> Identified underperforming crops and regions; presented findings to stakeholders to inform policy decisions.</li>
                    </ul>
                    <a href="https://github.com/mdshayaankhan/Agricultural-Analysis" target="_blank" rel="noreferrer" className="text-primary hover:underline text-sm mt-1 inline-block">View Repository</a>
                </div>
                 <div>
                    <div className="flex justify-between flex-wrap">
                        <h3 className="font-bold">Pet Adoption Web Application (Academic Project)</h3>
                        <p className="text-sm text-muted-foreground">July 2023</p>
                    </div>
                    <ul className="list-disc list-inside mt-1 space-y-1 text-foreground/80">
                      <li><strong>Description:</strong> Developed a MERN stack web app to connect rescue pets with adopters, featuring a secure user interface and real-time updates.</li>
                      <li><strong>Technologies:</strong> MongoDB, Express.js, React, Node.js.</li>
                      <li><strong>Key Achievements:</strong> Implemented a user-friendly interface, resulting in a 40% increase in adoption inquiries within three months, establishing a best practice model for future digital initiatives.</li>
                    </ul>
                    <a href="https://github.com/mdshayaankhan/PetAdoption" target="_blank" rel="noreferrer" className="text-primary hover:underline text-sm mt-1 inline-block">View Repository</a>
                </div>
            </div>
        </div>

        <Separator />

        <div>
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Award className="w-6 h-6 text-primary" /> Certification & Achievements</h2>
            <div className="space-y-2">
                <div>
                    <h3 className="font-semibold text-lg mb-2">Certifications</h3>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        <li>Fundamentals of Java Programming</li>
                        <li>Introduction to Relational Database and SQL</li>
                        <li>Power BI driven exhaustive analysis of Indian Agricultural Sector - AICTE Internship</li>
                        <li>EDUNET FOUNDATION |SKILLSBUILD PROGRAM | ARTIFICIAL INTELLIGENCE- AICTE Internship</li>
                        <li>BEST STARTUP concept at the university level -Technical Event</li>
                    </ul>
                </div>
                <div className="mt-4">
                     <h3 className="font-semibold text-lg mb-2">Achievements</h3>
                     <ul className="list-disc list-inside space-y-2 text-foreground/80">
                        <li><strong>Academic:</strong> Achieved consistent excellence in academics.</li>
                        <li><strong>Co-curricular:</strong> Acknowledged for achievements in sports, particularly cricket.</li>
                        <li><strong>Extracurricular:</strong> Actively participated in hackathons, coding challenges, and English language competitions.</li>
                        <li>Recognized for presenting the best startup concept at the university level, showcasing innovation and entrepreneurial skills.</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Star className="w-6 h-6 text-primary" /> Strengths</h2>
                 <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {skills.soft.map(item => (
                        <div key={item.name} className="flex flex-col items-center gap-2 w-24 text-center">
                            {item.icon}
                            <span className="text-sm">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Brush className="w-6 h-6 text-primary" /> Hobbies</h2>
                 <div className="flex flex-wrap gap-x-8 gap-y-4">
                    {hobbies.map(item => (
                        <div key={item.name} className="flex flex-col items-center gap-2 w-24 text-center">
                            {item.icon}
                            <span className="text-sm">{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
        <Separator />
        
        <div>
          <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4"><User className="w-6 h-6 text-primary" /> Personal Information</h2>
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>Father’s Name:</strong> Mohammed Sarwar Khan</li>
                <li><strong>Date of Birth:</strong> April 17, 2005</li>
                <li><strong>Nationality:</strong> Indian</li>
                <li><strong>Languages known:</strong> English, Telugu, Hindi</li>
                <li><strong>Permanent Address:</strong> Srinivasa Nagar, Khammam, Telangana 507003</li>
            </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResumeSection;
