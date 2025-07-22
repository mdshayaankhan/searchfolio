import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

const ResumeSection = () => {
  return (
    <Card className="border-none shadow-none bg-transparent max-w-lg mx-auto text-center">
      <CardHeader>
        <div className="flex justify-center items-center gap-4">
          <FileText className="w-8 h-8 text-primary" />
          <CardTitle className="text-2xl font-headline">My Resume</CardTitle>
        </div>
        <CardDescription className="pt-2">
          Click the button below to download a PDF version of my resume.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild size="lg">
          <a href="/resume.pdf" download="resume.pdf">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ResumeSection;
