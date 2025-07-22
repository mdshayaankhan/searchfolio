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
    title: 'About Me!',
    url: 'https://en.wikipedia.org/wiki/P_Praneeth_Reddy',
    displayUrl: 'https://en.wikipedia.org/wiki/P_Praneeth_Reddy',
    description:
      "I'm a Computer Science student with a passion for learning new technologies and solving challenging problems. When I'm not coding, you can find me exploring the latest trends in tech, contributing to open source, or playing with my cat...",
    command: 'about',
  },
  {
    title: 'Projects',
    url: 'https://en.wikipedia.org/wiki/Projects',
    displayUrl: 'https://en.wikipedia.org/wiki/Projects',
    description:
      'I have worked on various projects in web development, networking, IoT, databases, machine learning, and AI. These include a real-time weather app using React and Node.js, a housing price prediction model with Python, and smart home IoT solutions...',
    command: 'projects',
  },
  {
    title: 'Contact',
    url: 'https://en.wikipedia.org/wiki/Contact',
    displayUrl: 'https://en.wikipedia.org/wiki/Contact',
    description:
      "I'm always open to connecting with new people. Feel free to reach out to me through any of the platforms below. Whether you have a question, a project idea, or just want to say hi, I'd love to hear from you.",
    command: 'contact',
  },
  {
    title: 'Resume',
    url: 'https://en.wikipedia.org/wiki/Resume',
    displayUrl: 'https://en.wikipedia.org/wiki/Resume',
    description:
      'My resume provides a detailed overview of my skills, experience, and educational background. It includes information about my projects, publications, and certifications. Download it to learn more about my qualifications.',
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
          About 6,969,000 results (0.32 seconds)
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

        <div className="space-y-8">
          {searchResults.map((result) => (
            <div key={result.title}>
              <button
                className="group"
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
            src="https://placehold.co/600x400.png"
            data-ai-hint="professional headshot"
            alt="P Praneeth Reddy"
            width={600}
            height={400}
            className="w-full object-cover"
          />
          <CardContent className="p-4">
            <h3 className="text-2xl font-bold">P Praneeth Reddy</h3>
            <p className="text-sm text-muted-foreground">
              CS Student at Amrita Vishwa Vidyapeetham
            </p>
            <Separator className="my-3" />
            <p className="text-sm text-foreground/80 leading-relaxed">
              Hello, I'm Praneeth, a final-year student majoring in Computer
              Science and Engineering (CSE). I have a deep passion for coding
              and a strong curiosity for learning new things, especially in the
              realm of technology and understanding how it all works.
            </p>
            <div className="flex justify-center gap-2 my-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/company/firebase"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/Firebase"
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
