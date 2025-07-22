import { cn } from '@/lib/utils';
import Image from 'next/image';

export const WikipediaIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { className?: string }) => (
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png"
    alt="Wikipedia Logo"
    width={50}
    height={50}
    className={cn('w-10 h-auto', className)}
  />
);
