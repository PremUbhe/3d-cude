'use client'
import * as THREE from 'three';
import { useEffect, useRef } from 'react'
// addOns
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';


const Test = () => {
  const canvasRef = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();

    const textureLoader = new THREE.TextureLoader();
    const cubeAlbedo = textureLoader.load('textures/damascus-steel_albedo.png');
    const cubeNormal = textureLoader.load('textures/damascus-steel_normal-ogl.png');
    const cubeRoughness = textureLoader.load('textures/damascus-steel_roughness.png');
    const cubeMetalness = textureLoader.load('textures/damascus-steel_metallic.png');
    const cubeAo = textureLoader.load('textures/damascus-steel_ao.png');

    const cubeGeometry = new RoundedBoxGeometry(1, 1, 1, 10, 0.1);

    const cubeMaterialOne = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.8,
      metalness: 0.8,
    });
    cubeMaterialOne.map = cubeAlbedo;
    cubeMaterialOne.normalMap = cubeNormal;
    cubeMaterialOne.roughnessMap = cubeRoughness;
    cubeMaterialOne.metalnessMap = cubeMetalness;
    cubeMaterialOne.aoMap = cubeAo;

    const cubeMaterialTwo = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0.8,
      metalness: 0.8,
    });
    cubeMaterialTwo.map = cubeAlbedo;
    cubeMaterialTwo.normalMap = cubeNormal;
    cubeMaterialTwo.roughnessMap = cubeRoughness;
    cubeMaterialTwo.metalnessMap = cubeMetalness;
    cubeMaterialTwo.aoMap = cubeAo;

    const cubeMeshOne = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    const cubeMeshTwo = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshTwo.position.x = 1;
    const cubeMeshThree = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshThree.position.x = -1;
    const cubeMeshFour = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshFour.position.y = 1;
    const cubeMeshFive = new THREE.Mesh(cubeGeometry, cubeMaterialTwo)
    cubeMeshFive.position.y = -1;
    const cubeMeshSix = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);

    cubeMeshSix.position.set(0, 0, -1);
    const cubeMeshSeven = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshSeven.position.set(0, 0, 1);
    const cubeMeshEight = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshEight.position.set(1, 0, 1);
    const cubeMeshNine = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshNine.position.set(-1, 0, 1);
    const cubeMeshTen = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshTen.position.set(1, 0, -1);
    const cubeMeshEleven = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshEleven.position.set(-1, 0, -1);

    const cubeMeshTwelve = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshTwelve.position.set(0, 1, 1);
    const cubeMeshThirteen = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshThirteen.position.set(0, -1, 1);
    const cubeMeshFourteen = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshFourteen.position.set(0, 1, -1);
    const cubeMeshFifteen = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshFifteen.position.set(0, -1, -1);

    const cubeMeshSixteen = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshSixteen.position.set(1, 1, 0);
    const cubeMeshSeventeen = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshSeventeen.position.set(-1, 1, 0);
    const cubeMeshEighteen = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshEighteen.position.set(1, -1, 0);
    const cubeMeshNineteen = new THREE.Mesh(cubeGeometry, cubeMaterialOne);
    cubeMeshNineteen.position.set(-1, -1, 0);

    const cubeMeshTwenty = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshTwenty.position.set(1, 1, 1);
    const cubeMeshTwentyOne = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshTwentyOne.position.set(-1, 1, 1);
    const cubeMeshTwentyTwo = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshTwentyTwo.position.set(1, -1, 1);
    const cubeMeshTwentyThree = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshTwentyThree.position.set(-1, -1, 1);
    const cubeMeshTwentyFour = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshTwentyFour.position.set(1, 1, -1);
    const cubeMeshTwentyFive = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshTwentyFive.position.set(-1, 1, -1);
    const cubeMeshTwentySix = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshTwentySix.position.set(1, -1, -1);
    const cubeMeshTwentySeven = new THREE.Mesh(cubeGeometry, cubeMaterialTwo);
    cubeMeshTwentySeven.position.set(-1, -1, -1);

    const group = new THREE.Group();
    group.add(cubeMeshOne, cubeMeshTwo, cubeMeshThree, cubeMeshFour, cubeMeshFive, cubeMeshSix,
      cubeMeshSeven, cubeMeshEight, cubeMeshNine, cubeMeshTen, cubeMeshEleven, cubeMeshTwelve,
      cubeMeshThirteen, cubeMeshFourteen, cubeMeshFifteen, cubeMeshSixteen, cubeMeshSeventeen,
      cubeMeshEighteen, cubeMeshNineteen, cubeMeshTwenty, cubeMeshTwentyOne, cubeMeshTwentyTwo,
      cubeMeshTwentyThree, cubeMeshTwentyFour, cubeMeshTwentyFive, cubeMeshTwentySix, cubeMeshTwentySeven);
    // scene.add(group);

    const cubeContainer = new THREE.Group();
    cubeContainer.add(group);
    scene.add(cubeContainer);

    const light = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(light);

    const pointLightOne = new THREE.PointLight(0xffffff, 5);
    pointLightOne.position.set(3, 3, 3);
    pointLightOne.shadow.radius = 5;
    scene.add(pointLightOne);

    const pointLightTwo = new THREE.PointLight(0xffffff, 5);
    pointLightTwo.position.set(-3, -3, -3);
    pointLightTwo.shadow.radius = 5;
    scene.add(pointLightTwo);

    const pointLightThree = new THREE.PointLight(0xffffff, 5);
    pointLightThree.position.set(3, -3, -3);
    pointLightThree.shadow.radius = 5;
    scene.add(pointLightThree);

    const pointLightFour = new THREE.PointLight(0xffffff, 5);
    pointLightFour.position.set(-3, 3, -3);
    pointLightFour.shadow.radius = 5;
    scene.add(pointLightFour);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const maxPixelRatio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(maxPixelRatio);

    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3;

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    })

    const clock = new THREE.Clock();
    let previousTime = 0;

    // Rubik's cube animation variables
    let animationProgress = 0;
    const animationDuration = 2;
    let currentLayer = 0;
    const layers = [
      { axis: 'x', position: -1 },
      { axis: 'x', position: 0 },
      { axis: 'x', position: 1 },
      { axis: 'y', position: -1 },
      { axis: 'y', position: 0 },
      { axis: 'y', position: 1 },
    ];

    // Create layer pivot group
    const layerPivot = new THREE.Group();
    scene.add(layerPivot);

    // Initialize first layer
    const setupLayer = (layerIndex: number) => {
      const layer = layers[layerIndex];
      const threshold = 0.1;

      // Clear pivot and reset position/rotation
      while (layerPivot.children.length > 0) {
        const cube = layerPivot.children[0];
        layerPivot.remove(cube);
        group.add(cube);
      }

      // Position pivot at the layer's position
      layerPivot.position.set(0, 0, 0);
      if (layer.axis === 'x') {
        layerPivot.position.x = layer.position;
      } else if (layer.axis === 'y') {
        layerPivot.position.y = layer.position;
      } else if (layer.axis === 'z') {
        layerPivot.position.z = layer.position;
      }
      layerPivot.rotation.set(0, 0, 0);

      // Find and move cubes to pivot
      const cubesToMove: THREE.Mesh[] = [];
      group.children.forEach(cube => {
        if (layer.axis === 'x' && Math.abs(cube.position.x - layer.position) < threshold) {
          cubesToMove.push(cube as THREE.Mesh);
        } else if (layer.axis === 'y' && Math.abs(cube.position.y - layer.position) < threshold) {
          cubesToMove.push(cube as THREE.Mesh);
        } else if (layer.axis === 'z' && Math.abs(cube.position.z - layer.position) < threshold) {
          cubesToMove.push(cube as THREE.Mesh);
        }
      });

      cubesToMove.forEach(cube => {
        const worldPos = cube.position.clone();
        group.remove(cube);
        layerPivot.add(cube);
        // Convert to local position relative to pivot
        cube.position.copy(worldPos).sub(layerPivot.position);
      });
    };

    setupLayer(0);

    const renderLoop = () => {
      const currentTime = clock.getElapsedTime();
      const delta = currentTime - previousTime;
      previousTime = currentTime;

      animationProgress += delta;

      // Check if animation complete
      if (animationProgress >= animationDuration) {
        // Move cubes back to group
        while (layerPivot.children.length > 0) {
          const cube = layerPivot.children[0];

          // Get world position
          const worldPos = new THREE.Vector3();
          cube.getWorldPosition(worldPos);

          layerPivot.remove(cube);
          group.add(cube);

          // Round position to grid
          cube.position.set(
            Math.round(worldPos.x),
            Math.round(worldPos.y),
            Math.round(worldPos.z)
          );
          cube.rotation.set(0, 0, 0);
        }

        layerPivot.rotation.set(0, 0, 0);

        // Next layer
        animationProgress = 0;
        currentLayer = (currentLayer + 1) % layers.length;
        setupLayer(currentLayer);
      }

      // Rotate layer pivot
      const layer = layers[currentLayer];
      const rotationAngle = (animationProgress / animationDuration) * Math.PI / 2;

      layerPivot.rotation.set(0, 0, 0);
      if (layer.axis === 'x') {
        layerPivot.rotation.x = rotationAngle;
      } else if (layer.axis === 'y') {
        layerPivot.rotation.y = rotationAngle;
      } else if (layer.axis === 'z') {
        layerPivot.rotation.z = rotationAngle;
      }


      // cubeContainer.rotation.y += THREE.MathUtils.degToRad(1) * delta * 20;
      // cubeContainer.rotation.x += THREE.MathUtils.degToRad(1) * delta * 20;

      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(renderLoop);
    }

    renderLoop();

  }, []);


  return (
    <canvas ref={canvasRef} className="threejs">

    </canvas>
  );
};

export default Test;