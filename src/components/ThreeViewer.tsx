import React, { useState, useRef, Suspense, useCallback, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Bounds, Html, useProgress, Grid } from '@react-three/drei';
import * as THREE from 'three';
import { Maximize2, Minimize2, Download, RotateCcw, Ruler, Play, Pause, Camera, Settings } from 'lucide-react';

// Types
type ViewMode = 'solid' | 'wireframe' | 'xray' | 'blueprint';
type BackgroundPreset = 'studio' | 'dark' | 'gradient' | 'factory';
type CameraPreset = 'free' | 'front' | 'side' | 'top' | 'iso';
type QualityLevel = 'low' | 'medium' | 'high';

interface ModelDimensions {
    width: number;
    height: number;
    depth: number;
    unit: string;
}

interface ModelProps {
    modelPath: string;
    viewMode: ViewMode;
    wireframeColor: string;
    isRotating: boolean;
    bladeAnimating: boolean;
    onHoverPart: (partName: string | null) => void;
}

// Loading component
function Loader() {
    const { progress } = useProgress();
    return (
        <Html center>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <div style={{
                    width: '60px', height: '60px',
                    border: '4px solid #45474B', borderTop: '4px solid #F4CE14',
                    borderRadius: '50%', animation: 'spin 1s linear infinite',
                }} />
                <div style={{ color: '#F4CE14', fontSize: '18px', fontWeight: 600 }}>{progress.toFixed(0)}%</div>
                <div style={{ color: '#F5F7F8', fontSize: '14px' }}>3D Model Yükleniyor...</div>
                <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
            </div>
        </Html>
    );
}

// Blade data type
interface BladeData {
    mesh: THREE.Mesh;
    originalPosition: THREE.Vector3;
    boundingCenter: THREE.Vector3;
    index: number;
}

// 3D Model component with blade animation
function Model({ modelPath, viewMode, wireframeColor, isRotating, bladeAnimating, onHoverPart }: ModelProps) {
    const { scene } = useGLTF(modelPath);
    const modelRef = useRef<THREE.Group>(null);
    const bladeDataRef = useRef<BladeData[]>([]);
    const { camera, raycaster, pointer } = useThree();
    const [hoveredMesh, setHoveredMesh] = useState<THREE.Mesh | null>(null);

    // Find blade meshes and store their original positions
    useEffect(() => {
        bladeDataRef.current = [];
        let index = 0;

        scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                const numericName = parseInt(child.name, 10);
                if (numericName === 7 || numericName === 8) {
                    // Store original position and bounding box center
                    const bbox = new THREE.Box3().setFromObject(child);
                    const center = new THREE.Vector3();
                    bbox.getCenter(center);

                    bladeDataRef.current.push({
                        mesh: child,
                        originalPosition: child.position.clone(),
                        boundingCenter: center,
                        index: index++
                    });
                }
            }
        });
        console.log(`Found ${bladeDataRef.current.length} blade meshes for animation`);
    }, [scene]);

    // Apply materials based on view mode
    useEffect(() => {
        scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                if (!child.userData.originalMaterial) {
                    child.userData.originalMaterial = child.material.clone();
                }

                switch (viewMode) {
                    case 'wireframe':
                        child.material = new THREE.MeshBasicMaterial({ color: wireframeColor, wireframe: true });
                        break;
                    case 'xray':
                        child.material = new THREE.MeshBasicMaterial({ color: '#00D4FF', transparent: true, opacity: 0.3, side: THREE.DoubleSide });
                        break;
                    case 'blueprint':
                        child.material = new THREE.MeshBasicMaterial({ color: '#FFFFFF', wireframe: true, wireframeLinewidth: 2 });
                        break;
                    default:
                        child.material = child.userData.originalMaterial.clone();
                }
            }
        });
    }, [scene, viewMode, wireframeColor]);

    // Hover detection
    useFrame(() => {
        if (viewMode !== 'solid') return;
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObject(scene, true);

        if (intersects.length > 0) {
            const mesh = intersects[0].object as THREE.Mesh;
            if (mesh !== hoveredMesh) {
                if (hoveredMesh?.userData.originalMaterial) {
                    hoveredMesh.material = hoveredMesh.userData.originalMaterial.clone();
                }
                setHoveredMesh(mesh);
                mesh.material = new THREE.MeshStandardMaterial({ color: '#F4CE14', emissive: '#F4CE14', emissiveIntensity: 0.3 });
                const meshName = mesh.name || 'Unnamed';
                onHoverPart(meshName);
            }
        } else {
            if (hoveredMesh?.userData.originalMaterial) {
                hoveredMesh.material = hoveredMesh.userData.originalMaterial.clone();
            }
            setHoveredMesh(null);
            onHoverPart(null);
        }
    });

    // Auto-rotation only (blade animation disabled - requires GLB pivot fix)
    useFrame((_, delta) => {
        if (modelRef.current && isRotating) {
            modelRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <group ref={modelRef}>
            <primitive object={scene} scale={0.01} />
        </group>
    );
}

// Camera controller with smooth animation
function CameraController({ preset, controlsRef }: { preset: CameraPreset; controlsRef: React.RefObject<any> }) {
    const { camera } = useThree();

    useEffect(() => {
        const positions: Record<CameraPreset, [number, number, number]> = {
            free: [5, 3, 5],
            front: [0, 0, 8],
            side: [8, 0, 0],
            top: [0, 8, 0.01],
            iso: [5, 5, 5],
        };

        const targetPos = new THREE.Vector3(...positions[preset]);
        const startPos = camera.position.clone();
        let progress = 0;

        const animate = () => {
            progress += 0.05;
            if (progress >= 1) {
                camera.position.copy(targetPos);
                if (controlsRef.current) controlsRef.current.update();
                return;
            }
            camera.position.lerpVectors(startPos, targetPos, progress);
            if (controlsRef.current) controlsRef.current.update();
            requestAnimationFrame(animate);
        };

        if (preset !== 'free') animate();
    }, [preset, camera, controlsRef]);

    return null;
}

// Screenshot functionality
function ScreenshotButton({ canvasRef }: { canvasRef: React.RefObject<HTMLCanvasElement | null> }) {
    const { gl } = useThree();
    useEffect(() => {
        if (canvasRef.current === null) canvasRef.current = gl.domElement;
    }, [gl, canvasRef]);
    return null;
}

interface ThreeViewerProps {
    modelPath: string;
    modelName?: string;
    alt?: string;
    height?: string;
    className?: string;
    defaultViewMode?: ViewMode;
    wireframeColor?: string;
    dimensions?: ModelDimensions;
}

const ThreeViewer: React.FC<ThreeViewerProps> = ({
    modelPath,
    modelName = 'Model',
    alt = '3D Model',
    height = '500px',
    className = '',
    defaultViewMode = 'solid',
    wireframeColor = '#E31E24',
    dimensions,
}) => {
    const [viewMode, setViewMode] = useState<ViewMode>(defaultViewMode);
    const [background, setBackground] = useState<BackgroundPreset>('studio');
    const [cameraPreset, setCameraPreset] = useState<CameraPreset>('free');
    const [quality, setQuality] = useState<QualityLevel>('medium');
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isRotating, setIsRotating] = useState(true);
    const [bladeAnimating, setBladeAnimating] = useState(false);
    const [showDimensions, setShowDimensions] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [hoveredPart, setHoveredPart] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const controlsRef = useRef<any>(null);
    const rotationTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const modelDimensions = dimensions || { width: 2500, height: 1800, depth: 1200, unit: 'mm' };

    // Interaction handlers
    const handleInteractionStart = useCallback(() => {
        setIsRotating(false);
        if (rotationTimeoutRef.current) clearTimeout(rotationTimeoutRef.current);
    }, []);

    const handleInteractionEnd = useCallback(() => {
        if (rotationTimeoutRef.current) clearTimeout(rotationTimeoutRef.current);
        rotationTimeoutRef.current = setTimeout(() => setIsRotating(true), 2000);
    }, []);

    useEffect(() => {
        return () => { if (rotationTimeoutRef.current) clearTimeout(rotationTimeoutRef.current); };
    }, []);

    // Background style
    const getBackgroundStyle = () => {
        if (viewMode === 'blueprint') return { backgroundColor: '#1a237e' };
        switch (background) {
            case 'dark': return { backgroundColor: '#1E1E1E' };
            case 'gradient': return { background: 'linear-gradient(135deg, #45474B 0%, #1E1E1E 100%)' };
            case 'factory': return { backgroundColor: '#2F3032' };
            default: return { backgroundColor: '#F5F7F8' };
        }
    };

    // Quality settings
    const qualitySettings = useMemo(() => ({
        low: { shadows: false, antialias: false, pixelRatio: 1 },
        medium: { shadows: true, antialias: true, pixelRatio: 1.5 },
        high: { shadows: true, antialias: true, pixelRatio: 2 },
    }), []);

    const toggleFullscreen = useCallback(() => {
        if (!containerRef.current) return;
        if (!isFullscreen) containerRef.current.requestFullscreen?.();
        else document.exitFullscreen?.();
        setIsFullscreen(!isFullscreen);
    }, [isFullscreen]);

    useEffect(() => {
        const handler = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener('fullscreenchange', handler);
        return () => document.removeEventListener('fullscreenchange', handler);
    }, []);

    const downloadScreenshot = useCallback(() => {
        if (!canvasRef.current) return;
        const link = document.createElement('a');
        link.download = `${modelName}-3d-model.png`;
        link.href = canvasRef.current.toDataURL('image/png');
        link.click();
    }, [modelName]);

    const resetView = useCallback(() => {
        setViewMode('solid');
        setBackground('studio');
        setCameraPreset('free');
        setIsRotating(true);
        setBladeAnimating(false);
    }, []);

    // Button styles - responsive for mobile
    const btnStyle = (active: boolean, color = '#F4CE14') => ({
        padding: '4px 8px', borderRadius: '6px', border: 'none', cursor: 'pointer',
        fontWeight: 600, fontSize: '11px', backdropFilter: 'blur(8px)',
        backgroundColor: active ? color : 'rgba(69, 71, 75, 0.85)',
        color: active && color === '#F4CE14' ? '#1E1E1E' : '#F5F7F8',
        transition: 'all 0.2s ease', display: 'flex', alignItems: 'center', gap: '2px',
        whiteSpace: 'nowrap' as const,
    });

    const iconBtn = (active = false) => ({
        padding: '6px', borderRadius: '6px', border: 'none', cursor: 'pointer',
        backgroundColor: active ? '#F4CE14' : 'rgba(69, 71, 75, 0.85)',
        color: active ? '#1E1E1E' : '#F5F7F8', transition: 'all 0.2s ease',
        backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
    });

    return (
        <div ref={containerRef} className={`three-viewer-wrapper ${className}`}
            style={{ width: '100%', height: isFullscreen ? '100vh' : height, position: 'relative', borderRadius: isFullscreen ? '0' : '16px', overflow: 'hidden' }}>

            {/* Top Left - View Modes */}
            <div style={{ position: 'absolute', top: '8px', left: '8px', zIndex: 10, display: 'flex', gap: '4px', flexWrap: 'wrap', maxWidth: 'calc(100% - 140px)' }}>
                <button onClick={() => setViewMode('solid')} style={btnStyle(viewMode === 'solid')}>Solid</button>
                <button onClick={() => setViewMode('wireframe')} style={btnStyle(viewMode === 'wireframe', '#E31E24')}>Wire</button>
                <button onClick={() => setViewMode('xray')} style={btnStyle(viewMode === 'xray', '#00D4FF')}>X-Ray</button>
                <button onClick={() => setViewMode('blueprint')} style={btnStyle(viewMode === 'blueprint', '#1a237e')}>BP</button>
            </div>

            {/* Top Right - Actions */}
            <div style={{ position: 'absolute', top: '8px', right: '8px', zIndex: 10, display: 'flex', gap: '4px' }}>
                <button onClick={() => setShowDimensions(!showDimensions)} style={iconBtn(showDimensions)} title="Boyutlar"><Ruler size={14} /></button>
                <button onClick={() => setShowSettings(!showSettings)} style={iconBtn(showSettings)} title="Ayarlar"><Settings size={14} /></button>
                <button onClick={resetView} style={iconBtn()} title="Sıfırla"><RotateCcw size={14} /></button>
                <button onClick={downloadScreenshot} style={iconBtn()} title="İndir"><Download size={14} /></button>
                <button onClick={toggleFullscreen} style={iconBtn()} title="Tam Ekran">{isFullscreen ? <Minimize2 size={14} /> : <Maximize2 size={14} />}</button>
            </div>

            {/* Camera Presets - Second Row */}
            <div style={{ position: 'absolute', top: '40px', left: '8px', zIndex: 10, display: 'flex', gap: '3px', flexWrap: 'wrap', maxWidth: 'calc(100% - 16px)' }}>
                <Camera size={12} style={{ color: 'rgba(255,255,255,0.7)', marginRight: '2px', alignSelf: 'center' }} />
                {(['free', 'front', 'side', 'top', 'iso'] as CameraPreset[]).map(preset => (
                    <button key={preset} onClick={() => setCameraPreset(preset)} style={btnStyle(cameraPreset === preset)}>
                        {preset === 'free' ? 'Srb' : preset === 'front' ? 'Ön' : preset === 'side' ? 'Yan' : preset === 'top' ? 'Üst' : 'İzo'}
                    </button>
                ))}
            </div>

            {/* Settings Panel */}
            {showSettings && (
                <div style={{ position: 'absolute', top: '52px', right: '12px', zIndex: 15, backgroundColor: 'rgba(30,30,30,0.95)', padding: '16px', borderRadius: '12px', backdropFilter: 'blur(8px)', minWidth: '200px' }}>
                    <div style={{ color: '#F4CE14', fontWeight: 700, marginBottom: '12px' }}>⚙️ Ayarlar</div>

                    <div style={{ marginBottom: '12px' }}>
                        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginBottom: '6px' }}>Kalite</div>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            {(['low', 'medium', 'high'] as QualityLevel[]).map(q => (
                                <button key={q} onClick={() => setQuality(q)} style={btnStyle(quality === q)}>
                                    {q === 'low' ? 'Düşük' : q === 'medium' ? 'Orta' : 'Yüksek'}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginBottom: '12px' }}>
                        <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', marginBottom: '6px' }}>Arka Plan</div>
                        <div style={{ display: 'flex', gap: '4px' }}>
                            {(['studio', 'dark', 'gradient', 'factory'] as BackgroundPreset[]).map(bg => (
                                <button key={bg} onClick={() => setBackground(bg)} style={{
                                    ...iconBtn(background === bg),
                                    width: '28px', height: '28px',
                                    background: bg === 'studio' ? '#F5F7F8' : bg === 'dark' ? '#1E1E1E' : bg === 'gradient' ? 'linear-gradient(135deg, #45474B, #1E1E1E)' : '#2F3032',
                                }} title={bg} />
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Dimensions Overlay */}
            {showDimensions && (
                <div style={{ position: 'absolute', top: '52px', right: showSettings ? '230px' : '12px', zIndex: 10, backgroundColor: 'rgba(30,30,30,0.95)', padding: '14px 18px', borderRadius: '10px', backdropFilter: 'blur(8px)', border: '1px solid rgba(244,206,20,0.3)' }}>
                    <div style={{ color: '#F4CE14', fontWeight: 700, fontSize: '13px', marginBottom: '10px' }}>📐 Makine Boyutları</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '12px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Genişlik:</span>
                            <span style={{ color: '#F5F7F8', fontWeight: 600 }}>{modelDimensions.width} {modelDimensions.unit}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Yükseklik:</span>
                            <span style={{ color: '#F5F7F8', fontWeight: 600 }}>{modelDimensions.height} {modelDimensions.unit}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
                            <span style={{ color: 'rgba(255,255,255,0.7)' }}>Derinlik:</span>
                            <span style={{ color: '#F5F7F8', fontWeight: 600 }}>{modelDimensions.depth} {modelDimensions.unit}</span>
                        </div>
                    </div>
                </div>
            )}


            {/* Bottom Bar - Premium Unified Design */}
            <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                display: 'flex',
                gap: '12px',
                alignItems: 'center',
            }}>
                {/* 3D Viewer Label */}
                <div style={{
                    backgroundColor: 'rgba(30, 30, 30, 0.75)',
                    padding: '10px 18px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    height: '40px',
                }}>
                    <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px', fontWeight: 500 }}>3D Görüntüleyici</span>
                </div>

                {/* Rotation Status */}
                <div style={{
                    backgroundColor: 'rgba(30, 30, 30, 0.75)',
                    padding: '10px 16px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    height: '40px',
                }}>
                    <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: isRotating ? '#4CAF50' : '#FF9800',
                        boxShadow: isRotating ? '0 0 8px rgba(76, 175, 80, 0.5)' : '0 0 8px rgba(255, 152, 0, 0.5)',
                    }} />
                    <span style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '12px', fontWeight: 500 }}>{isRotating ? 'Dönüyor' : 'Durdu'}</span>
                </div>

                {/* Model Name */}
                <div style={{
                    backgroundColor: 'rgba(30, 30, 30, 0.75)',
                    padding: '10px 20px',
                    borderRadius: '12px',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(244, 206, 20, 0.2)',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    height: '40px',
                }}>
                    <span style={{ color: '#F4CE14', fontWeight: 600, fontSize: '14px' }}>{modelName}</span>
                    <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px' }}>MT Makina</span>
                </div>
            </div>

            {/* 3D Canvas */}
            <Canvas
                camera={{ position: [3, 2, 3], fov: 45 }}
                gl={{ preserveDrawingBuffer: true, antialias: qualitySettings[quality].antialias }}
                dpr={qualitySettings[quality].pixelRatio}
                shadows={qualitySettings[quality].shadows}
                style={{ width: '100%', height: '100%', ...getBackgroundStyle() }}
                onPointerDown={handleInteractionStart}
                onPointerUp={handleInteractionEnd}
                onWheel={handleInteractionStart}
            >
                <ScreenshotButton canvasRef={canvasRef} />
                <CameraController preset={cameraPreset} controlsRef={controlsRef} />

                <ambientLight intensity={quality === 'high' ? 0.4 : 0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1} castShadow={qualitySettings[quality].shadows} />
                <directionalLight position={[-10, -10, -5]} intensity={0.3} />

                {viewMode === 'solid' && background === 'studio' && <Environment preset="city" />}
                {viewMode === 'blueprint' && <Grid cellSize={0.5} cellThickness={0.5} cellColor="#FFFFFF" sectionSize={2} sectionColor="#FFFFFF" fadeDistance={30} infiniteGrid />}

                <Bounds fit clip observe margin={1.1}>
                    <Suspense fallback={<Loader />}>
                        <Model
                            modelPath={modelPath}
                            viewMode={viewMode}
                            wireframeColor={wireframeColor}
                            isRotating={isRotating}
                            bladeAnimating={bladeAnimating}
                            onHoverPart={setHoveredPart}
                        />
                    </Suspense>
                </Bounds>

                <OrbitControls ref={controlsRef} enablePan enableZoom enableRotate autoRotate={false} minDistance={0.5} maxDistance={100} onStart={handleInteractionStart} onEnd={handleInteractionEnd} />
            </Canvas>

            <span className="sr-only">{alt}</span>
        </div>
    );
};

export default ThreeViewer;

// GLB model paths
export const glbModels: Record<string, string> = {
    'CS-40': '/models/CS-40.glb',
};

function extractModelNumber(modelName: string): number {
    const match = modelName.match(/\d+/);
    return match ? parseInt(match[0], 10) : 100;
}

function calculateDimensions(modelName: string): ModelDimensions {
    const modelNumber = extractModelNumber(modelName);
    const prefix = modelName.split('-')[0].toUpperCase();

    let baseWidth = 2500, baseHeight = 1800, baseDepth = 1200;

    switch (prefix) {
        case 'TSH': baseWidth = 2200; baseHeight = 1600; baseDepth = 1000; break;
        case 'CS': baseWidth = 2500; baseHeight = 1800; baseDepth = 1200; break;
        case 'DS': baseWidth = 2800; baseHeight = 2000; baseDepth = 1400; break;
        case 'RDM': baseWidth = 4000; baseHeight = 2500; baseDepth = 2000; break;
        case 'TSV': baseWidth = 2600; baseHeight = 1700; baseDepth = 1300; break;
        case 'TSM': case 'CSM': baseWidth = 3000; baseHeight = 2200; baseDepth = 1500; break;
    }

    const scaleFactor = 0.5 + (modelNumber / 200);
    return { width: Math.round(baseWidth * scaleFactor), height: Math.round(baseHeight * scaleFactor), depth: Math.round(baseDepth * scaleFactor), unit: 'mm' };
}

export const hasGLBModel = (modelName: string): boolean => modelName in glbModels;
export const getGLBModelPath = (modelName: string): string | null => glbModels[modelName] || null;
export const getGLBModelDimensions = (modelName: string): ModelDimensions | null => modelName ? calculateDimensions(modelName) : null;
