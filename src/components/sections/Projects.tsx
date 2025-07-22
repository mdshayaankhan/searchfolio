import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, ExternalLink, Briefcase } from 'lucide-react';

const projects = [
  {
    title: 'Secure Client-Server Communication using SSL and Hybrid RSA-AES',
    image: 'https://placehold.co/600x400.png',
    hint: 'server security',
  },
  {
    title: 'College Management System Application -AUMS',
    image: 'https://placehold.co/600x400.png',
    hint: 'college management',
  },
  {
    title: 'Road safety and Accident Prevention Using RF in Speed Limit Zones',
    image: 'https://placehold.co/600x400.png',
    hint: 'road safety',
  },
  {
    title: 'Addressing Rising Crimes Against Women In India Through Data Analysis',
    image: 'https://placehold.co/600x400.png',
    hint: 'data analysis chart',
  },
  {
    title: 'IoT-Enabled Pharmaceutical Inventory Management System',
    image: 'https://placehold.co/600x400.png',
    hint: 'pharmaceutical inventory',
  },
  {
    title: 'Genetic Algorithm for Intelligent Vehicle Routing in Logistics',
    image: 'https://placehold.co/600x400.png',
    hint: 'vehicle routing logistics',
  },
  {
    title: 'Securing Digital Images using Affine Hill Cipher and Transform Method',
    image: 'https://placehold.co/600x400.png',
    hint: 'digital image security',
  },
  {
    title: 'All in Once: Your One-Stop Online Shop E-Commerce website',
    image: 'https://placehold.co/600x400.png',
    hint: 'ecommerce website',
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <header className="flex items-center gap-4 mb-8 px-2">
        <Briefcase className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-headline">My Projects</h2>
      </header>
      <p className="mb-6 text-foreground/80">
        I have worked on projects in various domains including optimization, cybersecurity, IoT, machine learning, and web development. These experiences have equipped me with a diverse skill set, allowing me to tackle complex problems and develop innovative solutions across different fields.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 duration-300 flex flex-col">
             <CardHeader className='p-0'>
               <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-t-lg object-cover w-full aspect-[4/3]"
                data-ai-hint={project.hint}
              />
            </CardHeader>
            <CardContent className="p-4 flex-grow">
              <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
