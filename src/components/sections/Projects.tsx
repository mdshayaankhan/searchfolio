import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink, Briefcase } from 'lucide-react';

const projects = [
  {
    title: 'Project Alpha',
    description: 'A cutting-edge e-commerce platform built with Next.js, featuring real-time inventory and a seamless checkout experience.',
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    hint: 'e-commerce platform'
  },
  {
    title: 'Project Beta',
    description: 'An interactive data visualization dashboard for tracking market trends, powered by D3.js and React.',
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    hint: 'data dashboard'
  },
  {
    title: 'Project Gamma',
    description: 'A collaborative project management tool designed to streamline team workflows with an intuitive drag-and-drop interface.',
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    hint: 'management tool'
  },
   {
    title: 'Project Delta',
    description: 'A social media application for sharing photos and connecting with friends, featuring a robust API and a scalable architecture.',
    image: 'https://placehold.co/600x400.png',
    liveUrl: '#',
    githubUrl: '#',
    hint: 'social media'
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <header className="flex items-center gap-4 mb-8 px-2">
        <Briefcase className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-headline">My Projects</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
             <CardHeader>
               <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-t-lg object-cover w-full aspect-video"
                data-ai-hint={project.hint}
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription className="mt-2">{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="ghost" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Code className="mr-2 h-4 w-4" /> Source
                </a>
              </Button>
              <Button asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
