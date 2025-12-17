import React from 'react';

// Google Model Viewer için type declaration
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & {
                    src?: string;
                    alt?: string;
                    poster?: string;
                    loading?: 'auto' | 'lazy' | 'eager';
                    reveal?: 'auto' | 'manual';
                    'auto-rotate'?: boolean;
                    'camera-controls'?: boolean;
                    'touch-action'?: string;
                    'shadow-intensity'?: string;
                    'shadow-softness'?: string;
                    'environment-image'?: string;
                    exposure?: string;
                    'camera-orbit'?: string;
                    'min-camera-orbit'?: string;
                    'max-camera-orbit'?: string;
                    'field-of-view'?: string;
                    ar?: boolean;
                    'ar-modes'?: string;
                    'ar-scale'?: string;
                    style?: React.CSSProperties;
                },
                HTMLElement
            >;
        }
    }
}

interface ModelViewerProps {
    modelPath: string;
    alt?: string;
    poster?: string;
    className?: string;
    height?: string;
    autoRotate?: boolean;
    cameraControls?: boolean;
    ar?: boolean;
    shadowIntensity?: string;
    exposure?: string;
}

/**
 * Google Model Viewer Component
 * Self-hosted GLB 3D model viewer with no external dependencies
 * 
 * @param modelPath - Path to GLB file (e.g., "/models/CS-40.glb")
 * @param alt - Alt text for accessibility
 * @param poster - Poster image while loading
 * @param height - Height of the viewer (default: 500px)
 * @param autoRotate - Auto-rotate the model (default: true)
 * @param cameraControls - Enable camera controls (default: true)
 * @param ar - Enable AR mode (default: true)
 * @param shadowIntensity - Shadow intensity (default: 1)
 * @param exposure - Exposure level (default: 1)
 */
const ModelViewer3D: React.FC<ModelViewerProps> = ({
    modelPath,
    alt = '3D Model',
    poster,
    className = '',
    height = '500px',
    autoRotate = true,
    cameraControls = true,
    ar = true,
    shadowIntensity = '1',
    exposure = '1',
}) => {
    return (
        <div className={`model-viewer-wrapper ${className}`} style={{ width: '100%', height }}>
            <model-viewer
                src={modelPath}
                alt={alt}
                poster={poster}
                loading="eager"
                camera-controls={cameraControls}
                auto-rotate={autoRotate}
                shadow-intensity={shadowIntensity}
                exposure={exposure}
                ar={ar}
                ar-modes="webxr scene-viewer quick-look"
                touch-action="pan-y"
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '16px',
                    backgroundColor: '#1E1E1E',
                }}
            />
        </div>
    );
};

export default ModelViewer3D;

// Model mapping for each product model - GLB file paths
export const glbModels: Record<string, string> = {
    // Çift Şaftlı (Dual Shaft) Models
    'CS-40': '/models/CS-40.glb',
    // Add more models as you add GLB files:
    // 'CS-20': '/models/CS-20.glb',
    // 'CS-60': '/models/CS-60.glb',
    // 'RDM-100': '/models/RDM-100.glb',
};

// Helper function to check if a model has 3D GLB file
export const hasGLBModel = (modelName: string): boolean => {
    return modelName in glbModels;
};

// Helper function to get GLB model path
export const getGLBModelPath = (modelName: string): string | null => {
    return glbModels[modelName] || null;
};
