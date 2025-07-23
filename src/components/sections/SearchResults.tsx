
'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  FileText,
  Briefcase,
  Send,
  User,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

const searchResults = [
  {
    title: 'About Me',
    url: '#',
    displayUrl: 'shayaan.dev/about',
    description:
      "A passionate and driven computer science student with a strong foundation in software development and a keen interest in emerging technologies. My objective is to leverage my skills in a challenging environment that promotes learning and growth, allowing me to contribute to innovative projects and make a meaningful impact.",
    command: 'about',
  },
  {
    title: 'Projects',
    url: '#',
    displayUrl: 'shayaan.dev/projects',
    description:
      'Explore my portfolio of projects, which includes a predictive model for employee burnout, an in-depth agricultural analysis dashboard using Power BI, and a full-stack pet adoption web application built with the MERN stack. Each project demonstrates my ability to apply technical knowledge to solve real-world problems.',
    command: 'projects',
  },
    {
    title: 'Skills',
    url: '#',
    displayUrl: 'shayaan.dev/skills',
    description:
      'I have experience with a variety of technologies, including Python, Java, JavaScript, and the MERN stack. I am also proficient in database management with MySQL and MongoDB, and have a strong understanding of web development principles, including HTML, CSS, and modern frameworks.',
    command: 'skills',
  },
  {
    title: 'Contact',
    url: '#',
    displayUrl: 'shayaan.dev/contact',
    description:
      "I'm always open to connecting with new people and exploring opportunities. Feel free to reach out to me through LinkedIn, email, or by phone to discuss potential collaborations or just to say hello. Let's build something amazing together.",
    command: 'contact',
  },
  {
    title: 'Resume',
    url: '#',
    displayUrl: 'shayaan.dev/resume',
    description:
      'My resume provides a detailed overview of my skills, experience, and educational background. It includes comprehensive information about my projects, certifications, and key achievements. Download it to learn more about my qualifications and how I can contribute to your team.',
    command: 'resume',
  },
];

const relatedSearches = [
    { text: 'Drop me a message on', link: 'Gmail', href: 'mailto:khanshayaanmd@gmail.com' },
    { text: 'Check out my', link: 'Github', href: 'https://github.com/mdshayaankhan' },
    { text: 'Reach out to me on', link: 'LinkedIn', href: 'https://www.linkedin.com/in/mdshayaankhan' },
    { text: 'Rank on', link: 'Leetcode', href: '#' },
    { text: 'Get in touch with me on', link: 'Instagram', href: '#' },
    { text: 'View my', link: 'HackerRank', href: '#' },
    { text: 'Ping me on', link: 'Twitter', href: '#' },
]

const tabs = ['All', 'News', 'Videos', 'Images', 'Maps', 'More'];

interface SearchResultsProps {
  query: string;
  onCommandClick: (command: string) => void;
}

const SearchResults = ({ query, onCommandClick }: SearchResultsProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 border-b mb-6 pl-0 sm:pl-4 md:pl-0 lg:pl-40">
        <div className="flex items-center gap-6 -mb-px">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`py-2 text-sm ${
                i === 0
                  ? 'border-b-2 border-primary text-primary font-semibold'
                  : 'text-muted-foreground'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex-1" />
        <div className="hidden sm:flex items-center gap-4 text-sm pb-2">
          <button className="text-muted-foreground hover:text-foreground">
            Settings
          </button>
          <button className="text-muted-foreground hover:text-foreground">
            Tools
          </button>
        </div>
      </div>
      
      <div className="w-full pl-0 sm:pl-4 md:pl-0 lg:pl-40">
        <div className="text-sm text-muted-foreground mb-4">
            About 5 results (0.42 seconds)
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-12">
            <div className="w-full lg:w-[60%]">
                <div className="space-y-8">
                    {searchResults.map((result) => (
                    <div key={result.title}>
                        <button
                        className="group text-left"
                        onClick={() => onCommandClick(result.command)}
                        >
                        <div className="text-sm text-foreground/80">
                            {result.displayUrl}
                        </div>
                        <h3 className="g-title">
                            {result.title}
                        </h3>
                        </button>
                        <p className="g-link mt-1">{result.description}</p>
                    </div>
                    ))}
                </div>
                <div className='mt-16'>
                    <h2 className="text-xl mb-4">Searches related to how to connect with shayaan</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4'>
                        {relatedSearches.map(item => (
                            <a href={item.href} key={item.link} target='_blank' rel='noopener noreferrer' className="text-sm hover:underline">
                                {item.text} <span className="text-blue-700 dark:text-blue-400 font-semibold">{item.link}</span>
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Button variant="ghost" size="icon" disabled>
                            <ChevronLeft/>
                        </Button>
                        <div className='flex items-center gap-2'>
                        <div className="h-6 w-6 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-xs">1</div>
                        {Array.from({length: 9}).map((_, i) => (
                            <div key={i} className="h-6 w-6 rounded-full border-2 border-yellow-500" />
                        ))}
                        </div>
                        <Button variant="ghost" size="icon">
                            <ChevronRight/>
                        </Button>
                    </div>
                    <div className="flex justify-center items-center gap-4 mt-2 text-sm">
                        <Button variant="link" className="text-muted-foreground">Previous</Button>
                        {Array.from({length: 10}).map((_, i) => (
                        <Button variant="link" key={i} className={i === 0 ? 'text-primary font-bold' : 'text-muted-foreground'}>{i + 1}</Button>
                        ))}
                        <Button variant="link" className="text-muted-foreground">Next</Button>
                    </div>
                </div>
                <footer className="mt-8 pt-4 border-t text-sm text-muted-foreground text-center">
                    Bengaluru, India - © Shayaan 2024, All rights reserved.
                </footer>
            </div>

            <aside className="w-full lg:w-[35%] xl:w-96">
                <Card className="rounded-xl overflow-hidden shadow-lg">
                    <div className="flex flex-col">
                    <div>
                        <Image
                        src="/images/portfolio profile 2.jpg"
                        data-ai-hint="professional headshot"
                        alt="MOHAMMED SHAYAAN KHAN"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <CardContent className="p-6">
                        <h3 className="text-2xl font-bold">MOHAMMED SHAYAAN KHAN</h3>
                        <p className="text-sm text-muted-foreground">
                            Computer Science Student at Malla Reddy university
                        </p>
                        <Separator className="my-3" />
                        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                            Hello, I'm Shayaan, a final-year student majoring in Computer
                            Science and Engineering (CSE). I have a deep passion for coding
                            and a strong curiosity for learning new things, especially in the
                            realm of technology and understanding how it all works.
                        </p>
                        <div className="flex justify-start gap-2 mb-4">
                            <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://www.linkedin.com/in/mdshayaankhan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                            <a
                                href="https://github.com/mdshayaankhan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github className="h-5 w-5" />
                            </a>
                            </Button>
                        </div>
                        <div className="flex gap-2">
                            <Button
                            variant="outline"
                            className="w-full md:w-auto"
                            onClick={() => onCommandClick('resume')}
                            >
                            Resume
                            </Button>
                            <Button className="w-full md:w-auto" onClick={() => onCommandClick('contact')}>Connect</Button>
                        </div>
                        </CardContent>
                    </div>
                    </div>
                </Card>
            </aside>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
