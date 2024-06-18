import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import nebula from "./images/nebula.jpg";

// canvas
const canvas = document.querySelector("canvas.webgl");

// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, 12);
scene.add(camera);

// uniforms
const uniforms = {
    u_time: {
        type: "f",
        value: 0.0,
    },
    u_resolution: {
        type: "v2",
        value: new THREE.Vector2(
            window.innerWidth,
            window.innerHeight
        ).multiplyScalar(window.devicePixelRatio),
    },
    u_mouse: {
        type: "v2",
        value: new THREE.Vector2(0.0, 0.0),
    },
    image: {
        type: "t",
        value: new THREE.TextureLoader().load(nebula),
    },
};

// listen to mouse
window.addEventListener("mousemove", function (e) {
    uniforms.u_mouse.value.set(
        e.screenX / this.window.innerWidth,
        1 - e.screenY / this.window.innerHeight
    );
});

// object
const geometry = new THREE.PlaneGeometry(10, 10, 30, 30);
const material = new THREE.ShaderMaterial({
    vertexShader: document.getElementById("vertexShader").textContent,
    fragmentShader: document.getElementById("fragmentShader").textContent,
    wireframe: false,
    uniforms,
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// orbit
const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;
orbit.update();

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);

// clock
const clock = new THREE.Clock();

// animate
function animate() {
    uniforms.u_time.value = clock.getElapsedTime();
    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

// adjust window sizes
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
