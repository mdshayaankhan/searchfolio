
import { cn } from '@/lib/utils';
import Image from 'next/image';

export const ColorfulLensIcon = ({
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & {className?: string}) => (
  <Image
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Google_Lens_Icon.svg/1200px-Google_Lens_Icon.svg.png"
    alt="Google Lens Icon"
    width={24}
    height={24}
    className={cn('w-6 h-6', className)}
    {...props}
  />
);
