import { cn } from '@/lib/utils';

interface LogoProps {
  small?: boolean;
}

const Logo = ({ small }: LogoProps) => {
  const colors = [
    'text-blue-500',
    'text-red-500',
    'text-yellow-500',
    'text-blue-500',
    'text-green-500',
    'text-red-500',
    'text-yellow-500',
    'text-blue-500',
    'text-green-500',
    'text-red-500',
    'text-yellow-500',
  ];

  const name = small ? 'Searchfolio' : 'Welcome!';
  const sizeClass = small 
    ? 'text-2xl font-sans font-medium tracking-tighter' 
    : 'select-none text-7xl font-sans font-normal tracking-tighter sm:text-8xl md:text-9xl';

  return (
    <h1
      className={cn(sizeClass)}
      aria-label={name}
    >
      {name.split('').map((char, index) => (
        <span
          key={index}
          className={cn(
            'dark:text-primary-foreground/90',
            colors[index % colors.length]
          )}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default Logo;
