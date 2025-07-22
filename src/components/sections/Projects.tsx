import { Briefcase, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'Employee Burnout Analysis',
    subtitle: 'AICTE Internship Project',
    date: 'Dec 2024',
    description:
      'Developed a predictive model using linear regression to analyse factors contributing to employee burnout. Conducted exploratory data analysis, data cleaning, and feature engineering. Achieved an R² score of 0.85 after hyperparameter tuning and reduced model error by 20%.',
    technologies: [
      'Python',
      'Google Colab',
      'Pandas',
      'Scikit-learn',
      'GridSearchCV',
    ],
    repoUrl: 'https://github.com/mdshayaankhan/Employee-Burnout-Analysis',
  },
  {
    title: 'Power BI Driven Analysis of Indian Agriculture',
    subtitle: 'AICTE Internship Project',
    date: 'Nov 2024',
    description:
      'Created interactive dashboards to analyse 19 years of agricultural data across crops, seasons, and regions. Provided actionable insights for policymakers, identified underperforming crops and regions, and presented findings to stakeholders.',
    technologies: ['Power BI', 'Excel'],
    repoUrl: 'https://github.com/mdshayaankhan/Agricultural-Analysis',
  },
  {
    title: 'Pet Adoption Web Application',
    subtitle: 'Academic Project',
    date: 'July 2023',
    description:
      'Developed a MERN stack web app to connect rescue pets with adopters, featuring a secure user interface and real-time updates. Implemented a user-friendly interface, resulting in a 40% increase in adoption inquiries within three months.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    repoUrl: 'https://github.com/mdshayaankhan/PetAdoption',
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <header className="flex items-center gap-4 mb-8 px-2">
        <Briefcase className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-headline">My Projects</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="flex flex-col bg-card hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {project.subtitle} - {project.date}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-foreground/80 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2" /> View on GitHub
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
