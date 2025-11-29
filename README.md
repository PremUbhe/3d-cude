# 3D Rubik's Cube Animation

An interactive 3D Rubik's Cube visualization built with Next.js, React, and Three.js. This project features an animated Rubik's Cube with realistic materials, dynamic lighting, and smooth layer rotations.

![Three.js](https://img.shields.io/badge/Three.js-0.181.2-black?style=flat-square&logo=three.js)
![Next.js](https://img.shields.io/badge/Next.js-16.0.5-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)

## ✨ Features

- **3D Rubik's Cube**: A fully rendered 3x3x3 Rubik's Cube with 27 individual cubes
- **Realistic Materials**: Damascus steel textures with PBR materials (albedo, normal, roughness, metalness, and ambient occlusion maps)
- **Animated Layer Rotations**: Automatic layer-by-layer animations that rotate each layer 90° in sequence
- **Interactive Camera Controls**: Orbit controls for panning, zooming, and rotating the view
- **Dynamic Lighting**: Multiple point lights positioned around the cube for realistic illumination
- **Responsive Design**: Automatically adjusts to window resizing

## 🚀 Getting Started

### Prerequisites

- Node.js (v20 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd 3d-cude
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the animated Rubik's Cube.

## 🛠️ Technology Stack

- **[Next.js 16.0.5](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://react.dev/)** - UI library
- **[Three.js 0.181.2](https://threejs.org/)** - 3D graphics library
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework

## 📦 Project Structure

```
3d-cude/
├── app/
│   ├── page.tsx           # Main 3D Rubik's Cube component
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── favicon.ico        # App icon
├── public/
│   └── textures/          # PBR texture maps for cube materials
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.ts         # Next.js configuration
└── README.md             # Project documentation
```

## 🎨 How It Works

### Cube Construction

The Rubik's Cube is built using Three.js with 27 individual cube meshes positioned in a 3x3x3 grid. Each cube uses:

- **RoundedBoxGeometry**: Creates cubes with smooth, rounded edges
- **MeshStandardMaterial**: PBR materials with physical properties
- **Texture Maps**: Damascus steel textures for realistic appearance

### Animation System

The animation system rotates one layer at a time through these steps:

1. **Layer Selection**: Cycles through X, Y, and Z axis layers at positions -1, 0, and 1
2. **Pivot Setup**: Creates a pivot group at the layer's position and moves cubes to it
3. **Rotation**: Smoothly rotates the pivot 90° over 2 seconds
4. **Reset**: Returns cubes to the main group with updated positions

### Camera & Lighting

- **Perspective Camera**: 75° field of view positioned at z=5
- **Orbit Controls**: Enables interactive camera manipulation with damping
- **Ambient Light**: Low-intensity global illumination (0.2 intensity)
- **4 Point Lights**: Positioned at corners (±3, ±3, ±3) for dynamic shadows

## 🎮 Controls

- **Left Mouse Drag**: Rotate the camera around the cube
- **Right Mouse Drag** / **Two Finger Drag**: Pan the view
- **Scroll Wheel**: Zoom in/out

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on http://localhost:3000 |
| `npm run build` | Build optimized production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |

## 🔧 Configuration

### Adjusting Animation Speed

Edit the `animationDuration` variable in `app/page.tsx`:

```typescript
const animationDuration = 2; // Duration in seconds for each 90° rotation
```

### Customizing Materials

Modify the material properties in `app/page.tsx`:

```typescript
const cubeMaterial = new THREE.MeshStandardMaterial({
  color: 0x000000,      // Base color
  roughness: 0.8,       // Surface roughness (0-1)
  metalness: 0.8,       // Metallic property (0-1)
});
```

## 🎯 Future Enhancements

- [ ] User-controlled layer rotations via keyboard/mouse
- [ ] Scramble and solve functionality
- [ ] Color-coded cube faces (traditional Rubik's Cube colors)
- [ ] UI controls for animation speed and camera reset
- [ ] Mobile touch gesture support

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Textures from [ambientCG](https://ambientcg.com/) or similar PBR texture sources
- Built with [Three.js](https://threejs.org/) by Ricardo Cabello (mrdoob)
- Scaffolded with [create-next-app](https://nextjs.org/docs/app/api-reference/cli/create-next-app)

---

**Made with ❤️ using Next.js and Three.js**
