const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const sourceImage = path.join(publicDir, 'favicon.png');

async function generateFavicons() {
    console.log('📍 Generating favicons from:', sourceImage);

    // Check if source exists
    if (!fs.existsSync(sourceImage)) {
        console.error('❌ Source favicon.png not found!');
        process.exit(1);
    }

    // Get source image info
    const metadata = await sharp(sourceImage).metadata();
    console.log(`📐 Source image: ${metadata.width}x${metadata.height}`);

    // Generate different sizes
    const sizes = [16, 32, 48, 96, 192, 512];

    for (const size of sizes) {
        const outputPath = path.join(publicDir, `favicon-${size}x${size}.png`);
        await sharp(sourceImage)
            .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
            .png()
            .toFile(outputPath);
        console.log(`✅ Created favicon-${size}x${size}.png`);
    }

    // Generate ICO file with multiple sizes (16, 32, 48)
    const icoSizes = [16, 32, 48];
    const icoBuffers = await Promise.all(
        icoSizes.map(size =>
            sharp(sourceImage)
                .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
                .png()
                .toBuffer()
        )
    );

    try {
        const icoBuffer = await toIco(icoBuffers);
        fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
        console.log('✅ Created favicon.ico');
    } catch (err) {
        console.error('❌ Error creating ICO:', err.message);
    }

    console.log('\n✅ Favicon generation complete!');
}

generateFavicons().catch(console.error);
