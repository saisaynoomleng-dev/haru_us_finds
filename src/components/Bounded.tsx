import { BoundedProps } from '@/lib/types';
import clsx from 'clsx';
import React from 'react';

const Bounded = ({
  children,
  variant = 'unpadded',
  as: Comp = 'section',
  className,
}: BoundedProps) => {
  return (
    <Comp
      className={clsx(
        'space-y-5 md:space-y-8 min-h-screen',
        variant === 'padded' && 'px-5 py-3 md:px-10 md:py-5',
        className,
      )}
    >
      {children}
    </Comp>
  );
};

export default Bounded;
