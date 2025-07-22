import { Briefcase } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <div>
      <header className="flex items-center gap-4 mb-8 px-2">
        <Briefcase className="w-8 h-8 text-primary" />
        <h2 className="text-2xl font-headline">My Projects</h2>
      </header>
      <div className="text-center text-foreground/80">
        <p>This section is currently empty.</p>
      </div>
    </div>
  );
};

export default ProjectsSection;
