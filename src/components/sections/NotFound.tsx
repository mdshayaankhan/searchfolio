import { AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface NotFoundSectionProps {
  invalidCommand: string;
}

const NotFoundSection = ({ invalidCommand }: NotFoundSectionProps) => {
  return (
    <div className="text-center text-foreground/80">
      <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
      <p className="text-lg">
        Command not found: <Badge variant="destructive" className="text-lg font-code">{invalidCommand}</Badge>
      </p>
      <p className="mt-2">
        Type <Badge variant="secondary" className="font-code">help</Badge> to see the list of available commands.
      </p>
    </div>
  );
};

export default NotFoundSection;
