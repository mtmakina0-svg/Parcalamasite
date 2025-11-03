import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LogoProps {
  className?: string;
  alt?: string;
  style?: React.CSSProperties;
}

// Logo hosted on GitHub
const LOGO_URL = 'https://raw.githubusercontent.com/mtmakina0/parcalamasite/main/public/logo/mt-logo.png';

// Fallback logo using base64 encoded SVG (MT text in industrial style)
const FALLBACK_LOGO = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjQwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMjAiIGhlaWdodD0iNDAiIGZpbGw9IiMxRTFFMUUiLz48dGV4dCB4PSI2MCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiNGNENFMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1UPC90ZXh0Pjwvc3ZnPg==';

/**
 * Logo component with GitHub-hosted image and fallback
 * @param className - CSS classes for styling
 * @param alt - Alt text for accessibility
 * @param style - Inline styles
 */
export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  alt = 'MT Makina Logo',
  style 
}) => {
  return (
    <ImageWithFallback
      src={LOGO_URL}
      fallbackSrc={FALLBACK_LOGO}
      alt={alt}
      className={className}
      style={style}
    />
  );
};
