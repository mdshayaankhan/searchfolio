import { cn } from '@/lib/utils';

const Logo = () => {
  const colors = [
    'text-blue-500',
    'text-red-500',
    'text-yellow-500',
    'text-blue-500',
    'text-green-500',
    'text-red-500',
  ];

  const name = 'Searchfolio';

  return (
    <h1
      className={cn(
        'select-none text-5xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl'
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
