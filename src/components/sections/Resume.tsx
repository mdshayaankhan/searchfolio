import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download, Briefcase, GraduationCap, Award, Star, Brush, User, Phone, Mail, Linkedin, Code, Database, Server, Component, Cpu, ShieldCheck, CircuitBoard, BrainCircuit, Bot, Handshake, Users, MessageSquare, Mic, Lightbulb, Projector } from 'lucide-react';
import { Separator } from '../ui/separator';
import Image from 'next/image';

const skills = {
  technical: [
    { 
      category: 'Programming Languages', 
      items: [
        { name: 'C++', icon: 'https://placehold.co/48x48.png', hint: 'c++ logo' },
        { name: 'Python', icon: 'https://placehold.co/48x48.png', hint: 'python logo' },
        { name: 'Java', icon: 'https://placehold.co/48x48.png', hint: 'java logo' },
        { name: 'SQL', icon: 'https://placehold.co/48x48.png', hint: 'sql logo' },
        { name: 'JavaScript', icon: 'https://placehold.co/48x48.png', hint: 'javascript logo' },
      ]
    },
    {
      category: 'Web Development',
      items: [
        { name: 'HTML', icon: 'https://placehold.co/48x48.png', hint: 'html5 logo' },
        { name: 'CSS', icon: 'https://placehold.co/48x48.png', hint: 'css3 logo' },
        { name: 'Firebase', icon: 'https://placehold.co/48x48.png', hint: 'firebase logo' },
        { name: 'Node.js', icon: 'https://placehold.co/48x48.png', hint: 'nodejs logo' },
        { name: 'React', icon: 'https://placehold.co/48x48.png', hint: 'react logo' },
      ]
    },
    {
      category: 'Machine Learning and Data Science',
      items: [
        { name: 'Model Development', icon: <BrainCircuit className="w-8 h-8 text-primary" /> },
        { name: 'Data Analysis', icon: <Database className="w-8 h-8 text-primary" /> },
        { name: 'Data Visualization', icon: <Bot className="w-8 h-8 text-primary" /> },
      ]
    },
    {
      category: 'Cryptography',
      items: [
        { name: 'Encryption', icon: <ShieldCheck className="w-8 h-8 text-primary" /> },
        { name: 'Network Security', icon: <Server className="w-8 h-8 text-primary" /> },
        { name: 'Discrete Mathematics', icon: <Component className="w-8 h-8 text-primary" /> },
        { name: 'Block Chain', icon: <Cpu className="w-8 h-8 text-primary" /> },
      ]
    },
    {
      category: 'Operating Systems',
      items: [
        { name: 'Linux', icon: 'https://placehold.co/48x48.png', hint: 'linux logo' },
        { name: 'Windows', icon: 'https://placehold.co/48x48.png', hint: 'windows logo' },
        { name: 'Ubuntu', icon: 'https://placehold.co/48x48.png', hint: 'ubuntu logo' },
        { name: 'macOS', icon: 'https://placehold.co/48x48.png', hint: 'apple logo' },
      ]
    },
    {
      category: 'IoT (Internet of Things)',
      items: [
        { name: 'Arduino', icon: 'https://placehold.co/48x48.png', hint: 'arduino logo' },
        { name: 'ESP', icon: 'https://placehold.co/48x48.png', hint: 'esp32 logo' },
        { name: 'PCB designs', icon: <CircuitBoard className="w-8 h-8 text-primary" /> },
        { name: 'Sensors', icon: <Component className="w-8 h-8 text-primary" /> },
      ]
    }
  ],
  soft: [
    { name: 'Leadership', icon: <Handshake className="w-8 h-8 text-primary" /> },
    { name: 'Teamwork', icon: <Users className="w-8 h-8 text-primary" /> },
    { name: 'Communication', icon: <MessageSquare className="w-8 h-8 text-primary" /> },
    { name: 'Public Speaking', icon: <Mic className="w-8 h-8 text-primary" /> },
    { name: 'Problem-Solving', icon: <Lightbulb className="w-8 h-8 text-primary" /> },
    { name: 'Project Management', icon: <Projector className="w-8 h-8 text-primary" /> },
  ]
};

const ResumeSection = () => {
  return (
    <Card className="border-none shadow-none bg-transparent max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className='flex flex-col items-center mb-4'>
            <h1 className="text-4xl font-bold">MOHAMMED SHAYAAN KHAN</h1>
            <div className="flex items-center flex-wrap justify-center gap-4 mt-2 text-muted-foreground">
                <div className='flex items-center gap-2'><Phone className="w-4 h-4" /> +91 – 9059701978</div>
                <div className='flex items-center gap-2'><Mail className="w-4 h-4" /> khanshayaanmd@gmail.com</div>
                <div className='flex items-center gap-2'><Linkedin className="w-4 h-4" /> www.linkedin.com/in/mdshayaankhan</div>
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
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Star className="w-6 h-6 text-primary" /> A. Technical Skills</h2>
            <div className="space-y-6">
                {skills.technical.map(skillCategory => (
                    <div key={skillCategory.category}>
                        <h3 className="font-semibold text-lg mb-3">i. {skillCategory.category}</h3>
                        <div className="flex flex-wrap gap-x-8 gap-y-4">
                            {skillCategory.items.map(item => (
                                <div key={item.name} className="flex flex-col items-center gap-2 w-20 text-center">
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
            <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4 mt-8"><Star className="w-6 h-6 text-primary" /> B. Soft Skills</h2>
             <div className="flex flex-wrap gap-x-8 gap-y-4">
                {skills.soft.map(item => (
                    <div key={item.name} className="flex flex-col items-center gap-2 w-24 text-center">
                        {item.icon}
                        <span className="text-sm">{item.name}</span>
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
            <ul className="list-disc list-inside space-y-2 text-foreground/80">
              <li>Fundamentals of Java Programming</li>
              <li>Introduction to Relational Database and SQL</li>
              <li>Power BI driven exhaustive analysis of Indian Agricultural Sector - AICTE Internship</li>
              <li>EDUNET FOUNDATION |SKILLSBUILD PROGRAM | ARTIFICIAL INTELLIGENCE- AICTE Internship</li>
              <li>BEST STARTUP concept at the university level -Technical Event</li>
              <li><strong>Academic:</strong> Achieved consistent excellence in academics.</li>
              <li><strong>Co-curricular:</strong> Acknowledged for achievements in sports, particularly cricket.</li>
              <li><strong>Extracurricular:</strong> Actively participated in hackathons, coding challenges, and English language competitions.</li>
              <li>Recognized for presenting the best startup concept at the university level, showcasing innovation and entrepreneurial skills.</li>
            </ul>
        </div>
        
        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Star className="w-6 h-6 text-primary" /> Strengths</h2>
                 <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Communication Skills</li>
                    <li>Leadership</li>
                    <li>Teamwork</li>
                    <li>Problem-Solving</li>
                    <li>Adaptability</li>
                </ul>
            </div>
            <div>
                <h2 className="flex items-center gap-3 text-2xl font-semibold mb-4"><Brush className="w-6 h-6 text-primary" /> Hobbies</h2>
                 <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    <li>Traveling</li>
                    <li>Volunteering</li>
                    <li>Sports</li>
                    <li>Photography</li>
                </ul>
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
