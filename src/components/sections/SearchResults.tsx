
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
} from 'lucide-react';

const searchResults = [
  {
    title: 'About Me',
    url: '#',
    displayUrl: 'shayaan.dev/about',
    description:
      "Passionate about exploring emerging technologies and aim to join an innovative organization where I can enhance my knowledge, tackle challenging projects, and contribute meaningfully to organizational success.",
    command: 'about',
  },
  {
    title: 'Projects',
    url: '#',
    displayUrl: 'shayaan.dev/projects',
    description:
      'Explore my projects, including a predictive model for employee burnout, an agricultural analysis dashboard with Power BI, and a full-stack pet adoption web application using the MERN stack.',
    command: 'projects',
  },
  {
    title: 'Contact',
    url: '#',
    displayUrl: 'shayaan.dev/contact',
    description:
      "I'm always open to connecting with new people. Feel free to reach out to me through LinkedIn, email, or phone. Let's build something amazing together.",
    command: 'contact',
  },
  {
    title: 'Resume',
    url: '#',
    displayUrl: 'shayaan.dev/resume',
    description:
      'My resume provides a detailed overview of my skills, experience, and educational background. It includes information about my projects, certifications, and achievements. Download it to learn more.',
    command: 'resume',
  },
];

const tabs = ['All', 'News', 'Videos', 'Images', 'Maps', 'More'];

interface SearchResultsProps {
  query: string;
  onCommandClick: (command: string) => void;
}

const SearchResults = ({ query, onCommandClick }: SearchResultsProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <div className="text-sm text-muted-foreground mb-4">
          About 4 results (0.42 seconds)
        </div>

        <div className="flex items-center gap-6 border-b mb-6">
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
          <div className="flex-1" />
          <div className="flex items-center gap-4 text-sm">
            <button className="text-muted-foreground hover:text-foreground">
              Settings
            </button>
            <button className="text-muted-foreground hover:text-foreground">
              Tools
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {searchResults.map((result) => (
            <div key={result.title}>
              <button
                className="group text-left"
                onClick={() => onCommandClick(result.command)}
              >
                <div className="text-sm text-foreground/80">
                  {result.displayUrl}
                </div>
                <h3 className="text-xl text-blue-700 dark:text-blue-400 group-hover:underline">
                  {result.title}
                </h3>
              </button>
              <p className="text-foreground/90 mt-1">{result.description}</p>
            </div>
          ))}
        </div>
      </div>

      <aside className="w-full lg:w-80 xl:w-96">
        <Card className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/images/profile.jpg"
            data-ai-hint="professional headshot"
            alt="MOHAMMED SHAYAAN KHAN"
            width={600}
            height={400}
            className="w-full object-cover"
          />
          <CardContent className="p-4">
            <h3 className="text-2xl font-bold">MOHAMMED SHAYAAN KHAN</h3>
            <p className="text-sm text-muted-foreground">
              CS Student at Malla Reddy university
            </p>
            <Separator className="my-3" />
            <p className="text-sm text-foreground/80 leading-relaxed">
              Hello, I'm Shayaan, a final-year student majoring in Computer
              Science and Engineering (CSE). I have a deep passion for coding
              and a strong curiosity for learning new things, especially in the
              realm of technology and understanding how it all works.
            </p>
            <div className="flex justify-center gap-2 my-4">
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
                className="w-full"
                onClick={() => onCommandClick('resume')}
              >
                Resume
              </Button>
              <Button className="w-full" onClick={() => onCommandClick('contact')}>Connect</Button>
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
};

export default SearchResults;
