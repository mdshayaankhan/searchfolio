import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { WikipediaIcon } from '@/components/icons/WikipediaIcon';
import { Code, Languages, Menu, MessageSquare, Handshake, Users, Lightbulb, Star, User } from 'lucide-react';

const skills = {
  technical: [
    { 
      category: 'Programming Languages', 
      items: [
        { name: 'Python', icon: 'https://placehold.co/48x48.png', hint: 'python logo' },
        { name: 'Java', icon: 'https://placehold.co/48x48.png', hint: 'java logo' },
      ]
    },
    {
      category: 'Database System',
      items: [
        { name: 'MySQL', icon: 'https://placehold.co/48x48.png', hint: 'mysql logo' },
        { name: 'MongoDB', icon: 'https://placehold.co/48x48.png', hint: 'mongodb logo' },
      ]
    },
     {
      category: 'Web Development',
      items: [
        { name: 'HTML', icon: 'https://placehold.co/48x48.png', hint: 'html5 logo' },
        { name: 'CSS', icon: 'https://placehold.co/48x48.png', hint: 'css3 logo' },
        { name: 'MERN Stack', icon: <Code className="w-8 h-8 text-primary" /> },
        { name: 'JavaScript', icon: 'https://placehold.co/48x48.png', hint: 'javascript logo' },
      ]
    },
    {
      category: 'Operating System',
      items: [
        { name: 'Windows', icon: 'https://placehold.co/48x48.png', hint: 'windows logo' },
        { name: 'Linux', icon: 'https://placehold.co/48x48.png', hint: 'linux logo' },
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


export const WikipediaLayout = () => {
  return (
    <div className="bg-background text-foreground font-sans text-sm">
      {/* Main Header */}
      <header className="flex items-center justify-between p-2 border-b">
        <div className="flex items-center gap-4">
          <button className="p-2">
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex items-center gap-2">
            <WikipediaIcon className="h-10 w-auto" />
            <div>
              <p className="font-bold text-lg leading-tight">WIKIPEDIA</p>
              <p className="text-xs leading-tight">The Free Encyclopedia</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative hidden md:block">
            <input
              type="search"
              placeholder="Search Wikipedia"
              className="border rounded-sm py-1 px-2 w-64"
            />
            <button className="absolute right-0 top-0 mt-1 mr-2 text-sm font-semibold">
              Search
            </button>
          </div>
          <a href="#" className="text-blue-600 hover:underline">
            Create account
          </a>
          <a href="#" className="text-blue-600 hover:underline">
            Log in
          </a>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar (Table of Contents) */}
        <aside className="w-full md:w-48 border-b md:border-b-0 md:border-r p-4">
          <h2 className="font-bold mb-2">Contents <button className='text-xs text-blue-600 hover:underline'>[hide]</button></h2>
          <nav>
            <ul>
              <li className="mb-1"><a href="#top" className="text-blue-600 hover:underline font-bold">(Top)</a></li>
              <li className="mb-1"><a href="#about" className="text-blue-600 hover:underline">About Me</a></li>
              <li className="mb-1 pl-2"><a href="#education" className="text-blue-600 hover:underline">Education</a></li>
              <li className="mb-1 pl-2"><a href="#skills" className="text-blue-600 hover:underline">Skills</a></li>
              <li className="mb-1"><a href="#projects" className="text-blue-600 hover:underline">Projects</a></li>
              <li className="mb-1"><a href="#certifications" className="text-blue-600 hover:underline">Certifications</a></li>
              <li className="mb-1"><a href="#achievements" className="text-blue-600 hover:underline">Achievements</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8">
          {/* Article Header */}
          <header className="border-b pb-2 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-serif">MOHAMMED SHAYAAN KHAN</h1>
                <div className="text-xs text-blue-600">
                  <a href="#" className="hover:underline">Article</a>
                  <span className="mx-2">|</span>
                  <a href="#" className="hover:underline">Talk</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <a href="#" className="text-blue-600 hover:underline">Read</a>
                <a href="#" className="text-blue-600 hover:underline">Edit</a>
                <a href="#" className="text-blue-600 hover:underline">View history</a>
                <Button variant="ghost" size="sm">Tools</Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Languages className="w-4 h-4" /> 8 languages
                </Button>
              </div>
            </div>
            <p className="text-xs mt-1">From Wikipedia, the free encyclopedia</p>
          </header>

          <div className="flex flex-col lg:flex-row-reverse gap-8">
            {/* Infobox */}
            <aside className="w-full lg:w-96 border p-2 bg-slate-50 dark:bg-slate-800/50 float-right lg:float-none clear-right lg:clear-none ml-4 lg:ml-0 mb-4 lg:mb-0">
              <div className="text-center font-bold pb-2">MOHAMMED SHAYAAN KHAN</div>
              <div className="text-center text-sm pb-2">CS Student</div>
              <div className="bg-secondary p-2">
                <Image
                  src="https://placehold.co/600x400.png"
                  data-ai-hint="professional headshot"
                  alt="MOHAMMED SHAYAAN KHAN"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                 <p className="text-center text-xs pt-1">Shayaan</p>
              </div>
              <table className="w-full text-sm mt-2 table-fixed">
                <tbody>
                  <tr className="border-b"><td className="py-1 pr-2 font-semibold align-top">Born</td><td className="py-1 break-words">April 17, 2005</td></tr>
                  <tr className="border-b"><td className="py-1 pr-2 font-semibold align-top">Place</td><td className="py-1 break-words">Khammam, Telangana, India</td></tr>
                  <tr className="border-b"><td className="py-1 pr-2 font-semibold align-top">Phone No.</td><td className="py-1 break-words">+91 9059701978</td></tr>
                  <tr className="border-b"><td className="py-1 pr-2 font-semibold align-top">Email</td><td className="py-1 break-words">khanshayaanmd@gmail.com</td></tr>
                  <tr className="border-b"><td className="py-1 pr-2 font-semibold align-top">Education</td><td className="py-1 break-words">Malla Reddy University</td></tr>
                  <tr className="border-b"><td className="py-1 pr-2 font-semibold align-top">Languages</td><td className="py-1 break-words">English, Telugu, Hindi</td></tr>
                  <tr className="border-b"><td className="py-1 pr-2 font-semibold align-top break-words">Programming</td><td className="py-1 break-words">Python, Java, JS, SQL, MongoDB</td></tr>
                  <tr className="border-b"><td className="py-1 pr-2 font-semibold align-top break-words">Skills</td><td className="py-1 break-words">MERN Stack, Web Dev, Linux</td></tr>
                </tbody>
              </table>
            </aside>
            
            {/* Article Body */}
            <article className="prose prose-blue dark:prose-invert max-w-none">
              <p>
                <b>Mohammed Shayaan Khan</b> is a computer science student with a passion for emerging technologies. He aims to join an innovative organization to apply his skills in solving challenging problems and contribute to meaningful projects. He is eager to leverage his technical abilities and creative mindset to drive efficiency and innovation.
              </p>

              <h2 id="about" className="font-serif text-2xl border-b pb-1 mt-6">About Me <span className="text-sm font-sans text-blue-600">[edit]</span></h2>
              <p>
                I am passionate about exploring emerging technologies and aim to join an innovative organization where I can enhance my knowledge, tackle challenging projects, and contribute meaningfully to organizational success. I am eager to leverage my technical skills, problem-solving abilities, and creative mindset to develop solutions that drive efficiency and innovation.
              </p>
              
              <h2 id="education" className="font-serif text-2xl border-b pb-1 mt-6">Education <span className="text-sm font-sans text-blue-600">[edit]</span></h2>
              <p>
                My educational journey began at the State Board of Secondary Education, where I completed my 10th grade with a perfect score, which helped me develop a strong foundation. For my 11th and 12th grades, I continued with the State Board, securing 93%, where the focus shifted more towards science and technology, aligning with my growing interest in these fields.
              </p>
              <p>
                Currently, I am pursuing my Bachelor of Technology in Computer Science & Engineering at Malla Reddy University, with a current CGPA of 8.7/10. The co-educational environment has provided a platform for diverse interactions and collaborative learning.
              </p>
              <table className="w-full my-4 border">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-800">
                    <th className="p-2 text-left">Degree</th>
                    <th className="p-2 text-left">Institute</th>
                    <th className="p-2 text-left">Year</th>
                    <th className="p-2 text-left">Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t'><td className='p-2'>B.Tech, CSE</td><td className='p-2'>Malla Reddy university</td><td className='p-2'>2025</td><td className='p-2'>8.7 CGPA</td></tr>
                  <tr className='border-t'><td className='p-2'>12th</td><td className='p-2'>State Board of Secondary Education</td><td className='p-2'>2022</td><td className='p-2'>93%</td></tr>
                  <tr className='border-t'><td className='p-2'>10th</td><td className='p-2'>State Board of Secondary Education</td><td className='p-2'>2020</td><td className='p-2'>100%</td></tr>
                </tbody>
              </table>

              <h2 id="skills" className="font-serif text-2xl border-b pb-1 mt-6">Skills <span className="text-sm font-sans text-blue-600">[edit]</span></h2>
              <div className="space-y-6 not-prose">
                {skills.technical.map(skillCategory => (
                    <div key={skillCategory.category}>
                        <h3 className="font-semibold text-lg mb-3">{skillCategory.category}</h3>
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

               <h2 id="projects" className="font-serif text-2xl border-b pb-1 mt-6">Academic Projects <span className="text-sm font-sans text-blue-600">[edit]</span></h2>
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <b>Employee Burnout Analysis:</b> Developed a predictive model using linear regression to analyse factors contributing to employee burnout.
                        <br/>
                        <span className="text-xs">Technologies Used: Python, Pandas, Scikit-learn.</span>
                    </li>
                    <li>
                        <b>Power BI Driven Analysis of Indian Agriculture:</b> Created interactive dashboards to analyse 19 years of agricultural data.
                        <br/>
                         <span className="text-xs">Technologies Used: Power BI, Excel.</span>
                    </li>
                    <li>
                        <b>Pet Adoption Web Application:</b> Developed a MERN stack web app to connect rescue pets with adopters.
                         <br/>
                         <span className="text-xs">Technologies Used: MongoDB, Express.js, React, Node.js.</span>
                    </li>
                </ul>
              
              <h2 id="certifications" className="font-serif text-2xl border-b pb-1 mt-6">Certifications <span className="text-sm font-sans text-blue-600">[edit]</span></h2>
               <ul className="list-disc pl-5">
                  <li>Fundamentals of Java Programming</li>
                  <li>Introduction to Relational Database and SQL</li>
                  <li>Power BI driven exhaustive analysis of Indian Agricultural Sector - AICTE Internship</li>
                  <li>EDUNET FOUNDATION | SKILLSBUILD PROGRAM | ARTIFICIAL INTELLIGENCE - AICTE Internship</li>
               </ul>

               <h2 id="achievements" className="font-serif text-2xl border-b pb-1 mt-6">Achievements <span className="text-sm font-sans text-blue-600">[edit]</span></h2>
               <ul className="list-disc pl-5">
                  <li>BEST STARTUP concept at the university level - Technical Event</li>
                  <li>Achieved consistent excellence in academics.</li>
                  <li>Acknowledged for achievements in sports, particularly cricket.</li>
                  <li>Actively participated in hackathons, coding challenges, and English language competitions.</li>
               </ul>
            </article>
          </div>
        </main>
      </div>
    </div>
  );
};
