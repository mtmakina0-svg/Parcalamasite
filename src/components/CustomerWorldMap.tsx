import React from 'react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
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
    { name: 'Dubai', coordinates: [55.3, 25.3] as [number, number], type: 'customer' },
    { name: 'Riyadh', coordinates: [46.7, 24.7] as [number, number], type: 'customer' },
    { name: 'Moscow', coordinates: [37.6, 55.8] as [number, number], type: 'customer' },
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
    const [selectedCountry, setSelectedCountry] = React.useState<string | null>(null);

    const handleCountryClick = (countryName: string) => {
        if (exportCountries.includes(countryName)) {
            setSelectedCountry(selectedCountry === countryName ? null : countryName);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
        >
            {/* Compact Header */}
            <div className="text-center mb-4">
                <h2 className="text-2xl md:text-3xl text-[#45474B] mb-2">
                    {translations.title}
                </h2>
                <p className="text-sm text-[#45474B]/70 max-w-xl mx-auto">
                    {translations.subtitle}
                </p>
            </div>

            {/* Compact Map Container */}
            <div className="bg-gradient-to-br from-[#1E3A5F] to-[#0F2942] rounded-xl overflow-hidden shadow-xl relative">
                {/* Map - Smaller height */}
                <div className="max-h-[350px] overflow-hidden">
                    <ComposableMap
                        projectionConfig={{
                            scale: 220,
                            center: [35, 35],
                        }}
                        style={{ width: '100%', height: '350px' }}
                    >
                        <ZoomableGroup center={[35, 35]} zoom={1}>
                            <Geographies geography={geoUrl}>
                                {({ geographies }) =>
                                    geographies.map((geo: any) => {
                                        const isExportCountry = exportCountries.includes(geo.properties.name);
                                        const isSelected = selectedCountry === geo.properties.name;

                                        return (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                onMouseEnter={() => setHoveredCountry(geo.properties.name)}
                                                onMouseLeave={() => setHoveredCountry(null)}
                                                onClick={() => handleCountryClick(geo.properties.name)}
                                                style={{
                                                    default: {
                                                        fill: isSelected ? '#22c55e' : isExportCountry ? '#F4CE14' : '#3a4f61',
                                                        stroke: '#1E3A5F',
                                                        strokeWidth: 0.3,
                                                        outline: 'none',
                                                        transition: 'all 0.2s',
                                                    },
                                                    hover: {
                                                        fill: isExportCountry ? '#FFD93D' : '#4a6478',
                                                        stroke: '#1E3A5F',
                                                        strokeWidth: 0.5,
                                                        outline: 'none',
                                                        cursor: isExportCountry ? 'pointer' : 'default',
                                                    },
                                                    pressed: {
                                                        fill: isExportCountry ? '#22c55e' : '#3a4f61',
                                                        outline: 'none',
                                                    },
                                                }}
                                            />
                                        );
                                    })
                                }
                            </Geographies>

                            {/* Markers - Clickable */}
                            {markers.map((marker) => (
                                <Marker key={marker.name} coordinates={marker.coordinates}>
                                    <motion.circle
                                        r={marker.type === 'hq' ? 6 : 3}
                                        fill={marker.type === 'hq' ? '#22c55e' : '#fff'}
                                        stroke={marker.type === 'hq' ? '#fff' : '#F4CE14'}
                                        strokeWidth={1.5}
                                        style={{ cursor: 'pointer' }}
                                        whileHover={{ scale: 1.5 }}
                                        onClick={() => setSelectedCountry(marker.name)}
                                    />
                                    {marker.type === 'hq' && (
                                        <circle
                                            r={10}
                                            fill="none"
                                            stroke="#22c55e"
                                            strokeWidth={1}
                                            opacity={0.4}
                                        />
                                    )}
                                </Marker>
                            ))}
                        </ZoomableGroup>
                    </ComposableMap>
                </div>

                {/* Floating Tooltip */}
                {(hoveredCountry || selectedCountry) && exportCountries.includes(hoveredCountry || selectedCountry || '') && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg"
                    >
                        <p className="text-[#45474B] font-medium text-sm">📍 {hoveredCountry || selectedCountry}</p>
                    </motion.div>
                )}

                {/* Compact Legend */}
                <div className="flex flex-wrap items-center justify-center gap-4 py-3 px-4 bg-[#0F2942]/50 text-white/90 text-xs">
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#22c55e] border border-white"></div>
                        <span>{translations.headquarters}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded bg-[#F4CE14]"></div>
                        <span>{translations.customers}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-[#F4CE14] font-bold">50+</span>
                        <span>{translations.countries}</span>
                    </div>
                </div>
            </div>

            {/* Click instruction */}
            <p className="text-center text-xs text-[#45474B]/50 mt-2">
                💡 Ülkelere tıklayarak detay görebilirsiniz
            </p>
        </motion.div>
    );
};
