export interface NavItem {
  label: string;
  href: string;
}

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
}