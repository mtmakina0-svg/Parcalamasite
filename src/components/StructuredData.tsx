import React, { useEffect } from 'react';

interface StructuredDataProps {
    data: Record<string, unknown>;
    id: string; // Unique key to identify this script tag
}

export const StructuredData: React.FC<StructuredDataProps> = ({ data, id }) => {
    useEffect(() => {
        if (!data) return;

        const key = id;

        // Function to inject or update script
        const updateScript = () => {
            // Remove existing script with this key to avoid duplicates during re-renders
            const existing = document.querySelectorAll(`script[type="application/ld+json"][data-key="${key}"]`);
            existing.forEach(el => el.remove());

            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-key', key);
            script.text = JSON.stringify(data);
            document.head.appendChild(script);
        };

        updateScript();

        // Cleanup on unmount
        return () => {
            const el = document.querySelectorAll(`script[type="application/ld+json"][data-key="${key}"]`);
            el.forEach(e => e.remove());
        };
    }, [data, id]);

    return null;
};
