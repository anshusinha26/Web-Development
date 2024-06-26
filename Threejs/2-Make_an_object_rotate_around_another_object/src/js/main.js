import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import starsTexture from "../images/stars.jpg";
import sunTexture from "../images/sun.jpg";
import mercuryTexture from "../images/mercury.jpg";
import venusTexture from "../images/venus.jpg";
import earthTexture from "../images/earth.jpg";
import marsTexture from "../images/mars.jpg";
import jupiterTexture from "../images/jupiter.jpg";
import saturnTexture from "../images/saturn.jpg";
import saturnRingTexture from "../images/saturn ring.png";
import uranusTexture from "../images/uranus.jpg";
import uranusRingTexture from "../images/uranus ring.png";
import neptuneTexture from "../images/neptune.jpg";
import plutoTexture from "../images/pluto.jpg";

// canvas
const canvas = document.querySelector("canvas.webgl");

// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(-90, 140, 140);
scene.add(camera);

// ambient light
const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

// cube texture loader
const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
]);

// texture loader
const textureLoader = new THREE.TextureLoader();

// sun
const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunTexture),
});
const sun = new THREE.Mesh(sunGeo, sunMat);
scene.add(sun);

// create planets
function createPlanets(size, texture, position, ring) {
    const geo = new THREE.SphereGeometry(size, 30, 30);
    const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture),
    });
    const mesh = new THREE.Mesh(geo, mat);
    const obj = new THREE.Object3D();
    obj.add(mesh);
    if (ring) {
        const ringGeo = new THREE.RingGeometry(
            ring.innerRadius,
            ring.outerRadius,
            32
        );
        const ringMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(ring.texture),
            side: THREE.DoubleSide,
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;
    }
    scene.add(obj);
    mesh.position.x = position;
    return { mesh, obj };
}

const mercury = createPlanets(3.2, mercuryTexture, 28);
const venus = createPlanets(5.8, venusTexture, 44);
const earth = createPlanets(6, earthTexture, 62);
const mars = createPlanets(4, marsTexture, 78);
const jupiter = createPlanets(12, jupiterTexture, 100);
const saturn = createPlanets(10, saturnTexture, 138, {
    innerRadius: 10,
    outerRadius: 20,
    texture: saturnRingTexture,
});
const uranus = createPlanets(7, uranusTexture, 176, {
    innerRadius: 7,
    outerRadius: 12,
    texture: uranusRingTexture,
});
const neptune = createPlanets(7, neptuneTexture, 200);
const pluto = createPlanets(2.8, plutoTexture, 216);

// point light
const pointLight = new THREE.PointLight(0xffffff, 5000, 300);
scene.add(pointLight);

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// orbit
const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.update();

// animate
function animate() {
    //Self-rotation
    sun.rotateY(0.004);
    mercury.mesh.rotateY(0.004);
    venus.mesh.rotateY(0.002);
    earth.mesh.rotateY(0.02);
    mars.mesh.rotateY(0.018);
    jupiter.mesh.rotateY(0.04);
    saturn.mesh.rotateY(0.038);
    uranus.mesh.rotateY(0.03);
    neptune.mesh.rotateY(0.032);
    pluto.mesh.rotateY(0.008);

    //Around-sun-rotation
    mercury.obj.rotateY(0.04);
    venus.obj.rotateY(0.015);
    earth.obj.rotateY(0.01);
    mars.obj.rotateY(0.008);
    jupiter.obj.rotateY(0.002);
    saturn.obj.rotateY(0.0009);
    uranus.obj.rotateY(0.0004);
    neptune.obj.rotateY(0.0001);
    pluto.obj.rotateY(0.00007);

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

// adjust window sizes
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
