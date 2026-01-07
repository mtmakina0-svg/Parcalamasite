declare module 'react-simple-maps' {
    import * as React from 'react';

    export interface ComposableMapProps {
        width?: number;
        height?: number;
        projection?: string;
        projectionConfig?: {
            scale?: number;
            center?: [number, number];
            rotate?: [number, number, number];
        };
        style?: React.CSSProperties;
        children?: React.ReactNode;
    }

    export interface GeographiesProps {
        geography: string | object;
        children: (data: { geographies: Geography[] }) => React.ReactNode;
        parseGeographies?: (geographies: object[]) => object[];
        fill?: string;
        stroke?: string;
        strokeWidth?: number;
    }

    export interface Geography {
        rsmKey: string;
        type: string;
        properties: {
            name: string;
            [key: string]: unknown;
        };
        geometry: object;
    }

    export interface GeographyProps {
        geography: Geography;
        style?: {
            default?: React.CSSProperties;
            hover?: React.CSSProperties;
            pressed?: React.CSSProperties;
        };
        onMouseEnter?: (event: React.MouseEvent) => void;
        onMouseLeave?: (event: React.MouseEvent) => void;
        onClick?: (event: React.MouseEvent) => void;
        fill?: string;
        stroke?: string;
        strokeWidth?: number;
    }

    export interface MarkerProps {
        coordinates: [number, number];
        children?: React.ReactNode;
        style?: {
            default?: React.CSSProperties;
            hover?: React.CSSProperties;
            pressed?: React.CSSProperties;
        };
        onMouseEnter?: (event: React.MouseEvent) => void;
        onMouseLeave?: (event: React.MouseEvent) => void;
        onClick?: (event: React.MouseEvent) => void;
    }

    export const ComposableMap: React.FC<ComposableMapProps>;
    export const Geographies: React.FC<GeographiesProps>;
    export const Geography: React.FC<GeographyProps>;
    export const Marker: React.FC<MarkerProps>;
    export const ZoomableGroup: React.FC<{ center?: [number, number]; zoom?: number; children?: React.ReactNode }>;
    export const Sphere: React.FC<{ id?: string; fill?: string; stroke?: string; strokeWidth?: number }>;
    export const Graticule: React.FC<{ stroke?: string; strokeWidth?: number }>;
    export const Line: React.FC<{ from: [number, number]; to: [number, number]; stroke?: string; strokeWidth?: number }>;
    export const Annotation: React.FC<{ subject: [number, number]; dx?: number; dy?: number; children?: React.ReactNode }>;
}
