import React from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { motion } from 'motion/react';

// World map topology
const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Countries with MT Makina customers/exports
const exportCountries = [
    'Turkey', 'Germany', 'France', 'Italy', 'Spain', 'United Kingdom', 'Netherlands',
    'Belgium', 'Poland', 'Czech Republic', 'Austria', 'Switzerland', 'Sweden', 'Norway',
    'Finland', 'Denmark', 'Greece', 'Portugal', 'Romania', 'Bulgaria', 'Hungary', 'Croatia',
    'Russia', 'Ukraine', 'Kazakhstan', 'Uzbekistan', 'Azerbaijan', 'Georgia',
    'Saudi Arabia', 'United Arab Emirates', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Jordan', 'Iraq', 'Iran',
    'Egypt', 'Morocco', 'Algeria', 'Tunisia', 'Libya', 'Sudan', 'Ethiopia', 'Kenya', 'Nigeria', 'South Africa',
    'India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Thailand', 'Vietnam', 'Indonesia', 'Malaysia',
    'Australia', 'New Zealand'
];

// Major customer location markers
const markers = [
    { name: 'İstanbul', coordinates: [29.0, 41.0] as [number, number], type: 'hq' },
    { name: 'Berlin', coordinates: [13.4, 52.5] as [number, number], type: 'customer' },
    { name: 'Paris', coordinates: [2.3, 48.9] as [number, number], type: 'customer' },
    { name: 'London', coordinates: [-0.1, 51.5] as [number, number], type: 'customer' },
    { name: 'Dubai', coordinates: [55.3, 25.3] as [number, number], type: 'customer' },
    { name: 'Riyadh', coordinates: [46.7, 24.7] as [number, number], type: 'customer' },
    { name: 'Moscow', coordinates: [37.6, 55.8] as [number, number], type: 'customer' },
    { name: 'Cairo', coordinates: [31.2, 30.0] as [number, number], type: 'customer' },
    { name: 'Mumbai', coordinates: [72.9, 19.1] as [number, number], type: 'customer' },
];

interface CustomerWorldMapProps {
    translations: {
        title: string;
        subtitle: string;
        countries: string;
        headquarters: string;
        customers: string;
    };
}

export const CustomerWorldMap: React.FC<CustomerWorldMapProps> = ({ translations }) => {
    const [hoveredCountry, setHoveredCountry] = React.useState<string | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
        >
            {/* Header */}
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl text-[#45474B] mb-4">
                    {translations.title}
                </h2>
                <p className="text-lg text-[#45474B]/70 max-w-2xl mx-auto">
                    {translations.subtitle}
                </p>
            </div>

            {/* Map Container */}
            <div className="bg-gradient-to-br from-[#1E3A5F] to-[#0F2942] rounded-2xl overflow-hidden shadow-2xl p-4 md:p-8">
                <ComposableMap
                    projectionConfig={{
                        scale: 147,
                        center: [20, 20],
                    }}
                    style={{ width: '100%', height: 'auto' }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const isExportCountry = exportCountries.includes(geo.properties.name);
                                const isHovered = hoveredCountry === geo.properties.name;

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        onMouseEnter={() => setHoveredCountry(geo.properties.name)}
                                        onMouseLeave={() => setHoveredCountry(null)}
                                        style={{
                                            default: {
                                                fill: isExportCountry ? '#F4CE14' : '#3a4f61',
                                                stroke: '#1E3A5F',
                                                strokeWidth: 0.5,
                                                outline: 'none',
                                                transition: 'fill 0.3s',
                                            },
                                            hover: {
                                                fill: isExportCountry ? '#FFD93D' : '#4a6478',
                                                stroke: '#1E3A5F',
                                                strokeWidth: 0.5,
                                                outline: 'none',
                                                cursor: isExportCountry ? 'pointer' : 'default',
                                            },
                                            pressed: {
                                                fill: isExportCountry ? '#E6B800' : '#3a4f61',
                                                stroke: '#1E3A5F',
                                                strokeWidth: 0.5,
                                                outline: 'none',
                                            },
                                        }}
                                    />
                                );
                            })
                        }
                    </Geographies>

                    {/* Markers */}
                    {markers.map((marker) => (
                        <Marker key={marker.name} coordinates={marker.coordinates}>
                            <circle
                                r={marker.type === 'hq' ? 8 : 4}
                                fill={marker.type === 'hq' ? '#22c55e' : '#F4CE14'}
                                stroke="#fff"
                                strokeWidth={2}
                                style={{ cursor: 'pointer' }}
                            />
                            {marker.type === 'hq' && (
                                <circle
                                    r={12}
                                    fill="none"
                                    stroke="#22c55e"
                                    strokeWidth={2}
                                    opacity={0.5}
                                    className="animate-ping"
                                />
                            )}
                        </Marker>
                    ))}
                </ComposableMap>

                {/* Hovered Country Tooltip */}
                {hoveredCountry && exportCountries.includes(hoveredCountry) && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                        <p className="text-[#45474B] font-medium">{hoveredCountry}</p>
                    </div>
                )}

                {/* Legend */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#22c55e] border-2 border-white"></div>
                        <span>{translations.headquarters}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded bg-[#F4CE14]"></div>
                        <span>{translations.customers}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#F4CE14] font-bold text-lg">50+</span>
                        <span>{translations.countries}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
