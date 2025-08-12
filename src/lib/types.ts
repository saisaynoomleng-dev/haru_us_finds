// Bounded
export type BoundedProps = {
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
  variant?: 'padded' | 'unpadded';
};

export type TitleProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'lg' | 'md' | 'sm';
};
