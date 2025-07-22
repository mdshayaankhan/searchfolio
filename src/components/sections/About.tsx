import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';

const AboutSection = () => {
  return (
    <Card className="border-none shadow-none bg-transparent">
      <CardHeader className="flex flex-row items-center gap-4">
        <User className="w-8 h-8 text-primary" />
        <CardTitle className="text-2xl font-headline">About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-foreground/80 leading-relaxed">
          I'm a passionate developer with a love for building creative and intuitive web applications. With a foundation in modern frontend technologies like React and Next.js, I specialize in turning complex problems into elegant, user-friendly solutions. I'm always eager to learn new things and collaborate with like-minded people to create something amazing.
        </p>
      </CardContent>
    </Card>
  );
};

export default AboutSection;
