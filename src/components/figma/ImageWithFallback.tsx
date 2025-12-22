import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  /** 
   * Set to 'high' for LCP (above-the-fold) images, 'low' for below-the-fold.
   * Default is 'auto'.
   */
  fetchPriority?: 'high' | 'low' | 'auto';
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(props.src)
  const [didError, setDidError] = useState(false)

  const handleError = () => {
    if (props.fallbackSrc && currentSrc !== props.fallbackSrc) {
      setCurrentSrc(props.fallbackSrc)
    } else {
      setDidError(true)
    }
  }

  const { src, fallbackSrc, alt, style, className, loading = 'lazy', fetchPriority = 'auto', ...rest } = props

  // Update currentSrc when src prop changes
  React.useEffect(() => {
    setCurrentSrc(src)
    setDidError(false)
  }, [src])

  return didError ? (
    <div
      className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
      style={style}
    >
      <div className="flex items-center justify-center w-full h-full">
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </div>
    </div>
  ) : (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
      {...rest}
      onError={handleError}
    />
  )
}

