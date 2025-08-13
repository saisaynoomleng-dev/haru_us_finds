import { CTAProps } from '@/lib/types';
import clsx from 'clsx';
import Link from 'next/link';

const CTA = ({ href, children, className }: CTAProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        'text-fs-200 underline underline-offset-2 hover:text-brand-red-400 transition-colors duration-200',
        className,
      )}
    >
      {children}
    </Link>
  );
};

export default CTA;
