'use client';

interface SectionBadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
}

export default function SectionBadge({ text, variant = 'primary' }: SectionBadgeProps) {
  const variantStyles = {
    primary: 'bg-blue-100 text-blue-700',
    secondary: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-amber-100 text-amber-700',
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variantStyles[variant]}`}>
      {text}
    </span>
  );
}
