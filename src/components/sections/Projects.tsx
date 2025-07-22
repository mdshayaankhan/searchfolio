import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink, Briefcase } from 'lucide-react';

const projects = [
  {
    title: 'Employee Burnout Analysis',
    description: 'Developed a predictive model using linear regression to analyse factors contributing to employee burnout. Conducted exploratory data analysis, data cleaning, and feature engineering.',
    image: 'https://placehold.co/600x400.png',
    liveUrl: 'https://github.com/mdshayaankhan/Employee-Burnout-Analysis',
    githubUrl: 'https://github.com/mdshayaankhan/Employee-Burnout-Analysis',
    hint: 'data analysis'
  },
  {
    title: 'Power BI Driven Analysis of Indian Agriculture',
    description: 'Created interactive dashboards to analyse 19 years of agricultural data across crops, seasons, and regions. Provided actionable insights for policymakers.',
    image: 'https://placehold.co/600x400.png',
    liveUrl: 'https://github.com/mdshayaankhan/Agricultural-Analysis',
    githubUrl: 'https://github.com/mdshayaankhan/Agricultural-Analysis',
    hint: 'power bi dashboard'
  },
  {
    title: 'Pet Adoption Web Application',
    description: 'Developed a MERN stack web app to connect rescue pets with adopters, featuring a secure user interface and real-time updates.',
    image: 'https://placehold.co/600x400.png',
    liveUrl: 'https://github.com/mdshayaankhan/PetAdoption',
    githubUrl: 'https://github.com/mdshayaankhan/PetAdoption',
    hint: 'web application'
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
