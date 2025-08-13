// Bounded
export type BoundedProps = {
  className?: string;
  children?: React.ReactNode;
  as?: React.ElementType;
  variant?: 'padded' | 'unpadded';
};

// Title
export type TitleProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  size?: 'lg' | 'md' | 'sm';
};

// CTA
export type CTAProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

// Previous Form state
export type PrevFormStateProps = {
  status: string;
  message: string;
  field?: string;
};
