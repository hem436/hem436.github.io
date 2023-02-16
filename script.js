import * as THREE from 'https://cdn.skypack.dev/three';
import { STLLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/STLLoader.js';
console.log(three)
// Create a Three.js scene
const scene = new THREE.Scene();

// Create a Three.js camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a Three.js renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the STL file
const loader = new STLLoader();
loader.load('path/to/file.stl', (geometry) => {
  // Create a Three.js mesh from the geometry
  const material = new THREE.MeshPhongMaterial({ color: 0x808080 });
  const mesh = new THREE.Mesh(geometry, material);

  // Add the mesh to the scene
  scene.add(mesh);

  // Center and scale the mesh
  const box = new THREE.Box3().setFromObject(mesh);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const maxDimension = Math.max(size.x, size.y, size.z);
  const scaleFactor = 1.5 / maxDimension;
  mesh.position.set(-center.x, -center.y, -center.z);
  mesh.scale.set(scaleFactor, scaleFactor, scaleFactor);
});

// Add a light to the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(0, 0, 10);
scene.add(light);

// Update the camera position
camera.position.z = 5;

// Create a render loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();