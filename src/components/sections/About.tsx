import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, Briefcase, Mail, Send } from 'lucide-react';
import { Separator } from '../ui/separator';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <header className="flex items-center gap-4 mb-4">
          <User className="w-8 h-8 text-primary" />
          <h2 className="text-2xl font-headline">About Me</h2>
        </header>
        <p className="text-foreground/80 leading-relaxed mb-6">
          I'm a passionate and driven Computer Science student with a love for emerging technologies. My goal is to join an innovative organization where I can apply my skills to solve challenging problems and contribute to meaningful projects. I thrive on learning and enjoy working in collaborative environments to build efficient and creative solutions.
        </p>
        <Separator className='my-6' />
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-3"><Briefcase className="w-6 h-6 text-primary" /> Key Skills</h3>
        <div className="flex flex-wrap gap-2">
            <div className="bg-secondary text-secondary-foreground font-medium px-3 py-1 rounded-full text-sm">Python</div>
            <div className="bg-secondary text-secondary-foreground font-medium px-3 py-1 rounded-full text-sm">Java</div>
            <div className="bg-secondary text-secondary-foreground font-medium px-3 py-1 rounded-full text-sm">MERN Stack</div>
            <div className="bg-secondary text-secondary-foreground font-medium px-3 py-1 rounded-full text-sm">JavaScript</div>
            <div className="bg-secondary text-secondary-foreground font-medium px-3 py-1 rounded-full text-sm">MySQL</div>
            <div className="bg-secondary text-secondary-foreground font-medium px-3 py-1 rounded-full text-sm">Power BI</div>
            <div className="bg-secondary text-secondary-foreground font-medium px-3 py-1 rounded-full text-sm">Teamwork</div>
            <div className="bg-secondary text-secondary-foreground font-medium px-3 py-1 rounded-full text-sm">Problem-Solving</div>
        </div>
      </div>
       <aside className="w-full lg:w-80 xl:w-96">
        <Card className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src="https://placehold.co/600x400.png"
            data-ai-hint="professional headshot"
            alt="MOHAMMED SHAYAAN KHAN"
            width={600}
            height={400}
            className="w-full object-cover"
          />
          <CardContent className="p-4 text-center">
            <h3 className="text-2xl font-bold">MOHAMMED SHAYAAN KHAN</h3>
            <p className="text-sm text-muted-foreground mb-4">
              CS Student at Malla Reddy university
            </p>
             <Button className="w-full" asChild>
                <a href="mailto:khanshayaanmd@gmail.com">
                    <Send className="mr-2 h-4 w-4" /> Connect
                </a>
            </Button>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
};

export default AboutSection;
