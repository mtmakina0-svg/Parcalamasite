import React from 'react';

interface SketchfabViewerProps {
    modelId: string;
    title?: string;
    className?: string;
    height?: string;
    autostart?: boolean;
    ui_theme?: 'dark' | 'light';
    ui_stop?: boolean;
}

/**
 * Sketchfab 3D Model Viewer Component
 * Embeds a Sketchfab model with full interactivity (rotate, zoom, pan)
 * 
 * @param modelId - Sketchfab model ID (from URL)
 * @param title - Alt text for iframe
 * @param className - Custom CSS classes
 * @param height - Height of the viewer (default: 500px)
 * @param autostart - Auto-start the 3D viewer (default: true)
 * @param ui_theme - Dark or light theme (default: dark)
 * @param ui_stop - Hide stop button (default: true)
 */
const SketchfabViewer: React.FC<SketchfabViewerProps> = ({
    modelId,
    title = '3D Model Viewer',
    className = '',
    height = '500px',
    autostart = true,
    ui_theme = 'dark',
    ui_stop = true,
}) => {
    // Build Sketchfab embed URL with parameters
    const embedUrl = `https://sketchfab.com/models/${modelId}/embed?autostart=${autostart ? 1 : 0}&ui_theme=${ui_theme}&ui_stop=${ui_stop ? 0 : 1}&transparent=0&ui_infos=0&ui_watermark_link=0&ui_watermark=0`;

    return (
        <div className={`sketchfab-embed-wrapper ${className}`} style={{ width: '100%', height }}>
            <iframe
                title={title}
                src={embedUrl}
                frameBorder="0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowFullScreen
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: '16px',
                }}
            />
        </div>
    );
};

export default SketchfabViewer;

// Model ID mapping for each product model
export const sketchfabModels: Record<string, string> = {
    // Çift Şaftlı (Dual Shaft) Models
    'CS-40': 'e8e52e27a7964ea4af5af011615ecc32',
    // Add more models as you upload them to Sketchfab:
    // 'CS-20': 'sketchfab-model-id-here',
    // 'CS-60': 'sketchfab-model-id-here',
    // 'CS-80': 'sketchfab-model-id-here',
    // 'CS-100': 'sketchfab-model-id-here',
    // 'RDM-100': 'sketchfab-model-id-here',
};

// Helper function to check if a model has 3D viewer
export const has3DModel = (modelName: string): boolean => {
    return modelName in sketchfabModels;
};

// Helper function to get Sketchfab model ID
export const getSketchfabModelId = (modelName: string): string | null => {
    return sketchfabModels[modelName] || null;
};
