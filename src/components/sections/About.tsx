import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="flex flex-row items-center gap-4">
        <User className="w-8 h-8 text-primary" />
        <CardTitle className="text-2xl font-headline">Career Objective</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-foreground/80 leading-relaxed">
          I am passionate about exploring emerging technologies and aim to join an innovative organization where I can enhance my knowledge, tackle challenging projects, and contribute meaningfully to organizational success. I am eager to leverage my technical skills, problem-solving abilities, and creative mindset to develop solutions that drive efficiency and innovation.
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
