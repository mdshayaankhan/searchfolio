import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react';

const contactLinks = [
  {
    icon: <Github className="h-6 w-6" />,
    label: 'GitHub',
    href: 'https://github.com/mdshayaankhan',
  },
  {
    icon: <Linkedin className="h-6 w-6" />,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mdshayaankhan',
  },
  {
    icon: <Mail className="h-6 w-6" />,
    label: 'Email',
    href: 'mailto:khanshayaanmd@gmail.com',
  },
  {
    icon: <Phone className="h-6 w-6" />,
    label: 'Phone',
    href: 'tel:+919059701978',
  },
];

const ContactSection = () => {
  return (
    <Card className="border-none shadow-none bg-transparent max-w-lg mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Send className="w-8 h-8 text-primary" />
        <CardTitle className="text-2xl font-headline">Get In Touch</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg text-foreground/80 mb-6">
          I'm open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {contactLinks.map((link) => (
            <Button key={link.label} asChild className="flex-1" size="lg">
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.icon}
                <span className="ml-2">{link.label}</span>
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSection;
