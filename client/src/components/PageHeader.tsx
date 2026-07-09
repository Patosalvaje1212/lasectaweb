import { type ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string | ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageOpacity?: string;
  bgClass?: string;
  gradientClass?: string;
  maxWidthClass?: string;
}

export const PageHeader = ({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  imageOpacity = 'opacity-80',
  bgClass = 'bg-background',
  gradientClass = 'from-background',
  maxWidthClass = 'max-w-5xl'
}: PageHeaderProps) => {
  return (
    <div className={`relative h-[35vh] w-full border-b border-outline-ghost ${bgClass} flex justify-center overflow-hidden`}>
      <div className={`absolute inset-0 bg-gradient-to-t ${gradientClass} via-transparent to-transparent z-10 pointer-events-none`}></div>
      <div className={`absolute inset-y-0 left-0 w-16 bg-gradient-to-r ${gradientClass} to-transparent z-10 pointer-events-none`}></div>
      <div className={`absolute inset-y-0 right-0 w-16 bg-gradient-to-l ${gradientClass} to-transparent z-10 pointer-events-none`}></div>

      <img
        src={imageSrc}
        alt={imageAlt}
        className={`w-full h-full object-cover object-center grayscale-[0.5] ${imageOpacity}`}
      />

      <div className={`absolute bottom-10 left-0 right-0 w-full ${maxWidthClass} mx-auto px-6 md:px-8 z-20`}>
        <h2 className="text-2xl md:text-3xl font-display text-on-surface drop-shadow-lg tracking-normal">
          {title}
        </h2>
        {subtitle && (
          <div className="text-on-surface-muted font-body text-sm md:text-base italic mt-1.5 max-w-2xl drop-shadow">
            {subtitle}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
