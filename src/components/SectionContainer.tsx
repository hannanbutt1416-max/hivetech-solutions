import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
}

/**
 * SectionContainer - Wraps content in 80% width container while keeping background at 100%
 * 
 * Usage:
 * <section className="bg-[#1A1A1A] py-20">
 *   <SectionContainer>
 *     Your content here (will be 80% width, centered)
 *   </SectionContainer>
 * </section>
 */
export function SectionContainer({ children, className = '', fullWidth = false }: SectionContainerProps) {
  if (fullWidth) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`w-full max-w-[80vw] mx-auto px-4 md:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
