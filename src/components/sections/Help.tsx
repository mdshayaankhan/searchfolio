import { HelpCircle, Command as CommandIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const mainCommands = ['about', 'projects', 'contact', 'resume'];
const externalCommands = ['github', 'linkedin'];

interface HelpSectionProps {
  onCommandClick: (command: string) => void;
}

const HelpSection = ({ onCommandClick }: HelpSectionProps) => {
  return (
    <Card className="border-none shadow-none bg-transparent max-w-2xl mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <HelpCircle className="w-8 h-8 text-primary" />
        <CardTitle className="text-2xl font-headline">Welcome to Searchfolio!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-foreground/80 mb-6">
          This is an interactive portfolio. Type one of the commands below into the search bar and press Enter to navigate.
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 text-foreground/90">Main Commands</h3>
            <div className="flex flex-wrap gap-2">
              {mainCommands.map((cmd) => (
                <button key={cmd} onClick={() => onCommandClick(cmd)}>
                  <Badge className="text-md cursor-pointer hover:bg-primary/80 transition-colors">
                    <CommandIcon className="w-3 h-3 mr-1.5" />{cmd}
                  </Badge>
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2 text-foreground/90">External Links</h3>
            <div className="flex flex-wrap gap-2">
              {externalCommands.map((cmd) => (
                 <button key={cmd} onClick={() => onCommandClick(cmd)}>
                  <Badge variant="secondary" className="text-md cursor-pointer hover:bg-accent/80 transition-colors">
                    <CommandIcon className="w-3 h-3 mr-1.5" />{cmd}
                  </Badge>
                </button>
              ))}
            </div>
          </div>
        </div>
         <p className="text-sm text-muted-foreground mt-8">
            You can also try some secret commands like 'hello' or 'coffee'! Press <Badge variant="outline" className="font-code">Esc</Badge> to clear.
        </p>
      </CardContent>
    </Card>
  );
};

export default HelpSection;
