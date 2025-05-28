export interface NavItem {
  label: string;
  href: string;
  dropdown?: NavItem[];
}

export interface ValueCardProps {
  icon: string;
  title: string;
  description: string;
}

export interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface CompanyValue {
  icon: string;
  title: string;
  description: string;
}

// Add these interfaces to the existing file:

export interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export interface ContentSectionProps {
  title: string;
  content: string;
  imageUrl?: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: 'white' | 'gray';
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeatureGridProps {
  title: string;
  features: FeatureItem[];
  columns?: 2 | 3 | 4;
}

export interface PageCTAProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}