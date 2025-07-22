import { cn } from '@/lib/utils';

const Logo = () => {
  const colors = [
    'text-blue-500',
    'text-red-500',
    'text-yellow-500',
    'text-blue-500',
    'text-green-500',
    'text-red-500',
    'text-yellow-500',
    'text-blue-500',
  ];

  const name = 'Welcome!';

  return (
    <h1
      className={cn(
        'select-none text-7xl font-sans font-normal tracking-tighter sm:text-8xl md:text-9xl'
      )}
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

    