import { Bot, Coffee, Hand, Sandwich, ShieldAlert } from 'lucide-react';

interface EasterEggSectionProps {
  command: string;
}

const getEasterEgg = (command: string) => {
  switch (command) {
    case 'hello':
    case 'hello there':
      return {
        icon: <Hand className="w-12 h-12 text-yellow-500" />,
        message: command === 'hello there' ? 'General Kenobi!' : 'Hello to you too!',
      };
    case 'coffee':
      return {
        icon: <Coffee className="w-12 h-12 text-amber-800" />,
        message: 'One cup of virtual coffee, coming right up! ☕',
      };
    case 'make me a sandwich':
      return {
        icon: <Sandwich className="w-12 h-12 text-orange-500" />,
        message: "What? Make it yourself.",
      };
    case 'sudo':
        return {
          icon: <ShieldAlert className="w-12 h-12 text-red-500" />,
          message: "User is not in the sudoers file. This incident will be reported.",
        };
    default:
      return {
        icon: <Bot className="w-12 h-12 text-primary" />,
        message: "You've found a secret! ✨",
      };
  }
};

const EasterEggSection = ({ command }: EasterEggSectionProps) => {
  const { icon, message } = getEasterEgg(command);
  return (
    <div className="text-center text-foreground/80 flex flex-col items-center gap-4">
      {icon}
      <p className="text-xl font-medium">{message}</p>
    </div>
  );
};

export default EasterEggSection;
