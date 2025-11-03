import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LogoProps {
  className?: string;
  alt?: string;
  style?: React.CSSProperties;
  variant?: 'light' | 'dark'; // light = beyaz yazı (header/footer), dark = siyah yazı (ana sayfa)
}

// Beyaz yazılı logo (Header ve Footer için)
const LOGO_WHITE_URL = 'https://i.ibb.co/JW7NnXXC/Mt-Makina-logo-yaz-lar-beyaz.png';

// Siyah yazılı logo (Ana sayfa beyaz zemin için)
const LOGO_DARK_URL = 'https://i.ibb.co/HLymGDrz/1-Mt-Makina-Logo.png';

// Fallback logo using base64 encoded SVG (MT text in industrial style)
const FALLBACK_LOGO_LIGHT = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIyOCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iI0Y1RjdGOCI+TVQgTWFraW5hPC90ZXh0Pjwvc3ZnPg==';
const FALLBACK_LOGO_DARK = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIyOCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzFFMUUxRSI+TVQgTWFraW5hPC90ZXh0Pjwvc3ZnPg==';

/**
 * Logo component with ImgBB-hosted image and fallback
 * @param className - CSS classes for styling
 * @param alt - Alt text for accessibility
 * @param style - Inline styles
 * @param variant - 'light' for white text (header/footer) or 'dark' for black text (homepage)
 */
export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  alt = 'MT Makina Logo',
  style,
  variant = 'light'
}) => {
  const logoUrl = variant === 'light' ? LOGO_WHITE_URL : LOGO_DARK_URL;
  const fallbackLogo = variant === 'light' ? FALLBACK_LOGO_LIGHT : FALLBACK_LOGO_DARK;

  return (
    <ImageWithFallback
      src={logoUrl}
      fallbackSrc={fallbackLogo}
      alt={alt}
      className={className}
      style={style}
    />
  );
};
