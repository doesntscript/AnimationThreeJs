

// Scene Mesh Camera Renderer

// Scene
const scene = new THREE.Scene();

// Mesh

const geometry = new THREE.BoxGeometry(1, 1, 1); 
const material = new THREE.MeshBasicMaterial({color: "pink"});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera 

const aspect = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const camera = new THREE.PerspectiveCamera( 75, aspect.width / aspect.height);
camera.position.z = 3;

scene.add(camera);

// Renderer
const canvas = document.querySelector(".draw"); // Select the canvas
const renderer = new THREE.WebGLRenderer({ canvas }); // add WebGL Renderer
renderer.setSize( aspect.width, aspect.height); // Renderer Size

// Clock Class
const clock = new THREE.Clock();

// Animation 
const animate = () => {
    // GetElapsedTime
    const elapsedTime = clock.getElapsedTime();

    // Update Rotation On X Axis
    mesh.rotation.y = elapsedTime * Math.PI * 0.20;

    // Renderer
    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
};
animate();