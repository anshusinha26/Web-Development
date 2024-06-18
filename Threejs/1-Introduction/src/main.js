import "./styles.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

// import images
import stars from "./images/stars.jpg";
import nebula from "./images/nebula.jpg";

// canvas
const canvas = document.querySelector("canvas.webgl");

// scene
const scene = new THREE.Scene();

// box object
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0xffee32 });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
box.position.y = 1;
box.castShadow = true;
scene.add(box);

// axesHelper
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// plane object
const planeGeometry = new THREE.PlaneGeometry(20, 20);
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xfffffc,
    side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;
scene.add(plane);

// gridHelper
const gridHelper = new THREE.GridHelper(20);
scene.add(gridHelper);

// sphere object
const sphereGeometry = new THREE.SphereGeometry(2, 50, 50);
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x70e000,
    wireframe: false,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(5, 3, 0);
sphere.castShadow = true;
scene.add(sphere);

// gui
const gui = new dat.GUI();

const options = {
    sphereColor: "#ffea00",
    wireframe: false,
    speed: 0.00001,
};

gui.addColor(options, "sphereColor").onChange(function (e) {
    sphere.material.color.set(e);
});

gui.add(options, "wireframe").onChange(function (e) {
    sphere.material.wireframe = e;
});

let step = 0;
gui.add(options, "speed", 0, 0.1);

// add fog to the scene
scene.fog = new THREE.Fog(0xd9ed92, 0, 200);

// textureLoader
const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load(stars);

// // cubeTextureLoader
// const cubeTextureLoader = new THREE.CubeTextureLoader();
// scene.background = cubeTextureLoader.load([
//     nebula,
//     nebula,
//     stars,
//     stars,
//     stars,
//     stars,
// ]);

const box2Geometry = new THREE.BoxGeometry(2, 2, 2);
const box2Material = new THREE.MeshStandardMaterial({
    map: textureLoader.load(nebula),
});
const box2 = new THREE.Mesh(box2Geometry, box2Material);
box2.position.set(0, 5, 0);
scene.add(box2);

// sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

// aspect ratio
const aspectRatio = sizes.width / sizes.height;

// camera
const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
camera.position.set(0, 1, 5);
scene.add(camera);

// ambientLight
const aLight = new THREE.AmbientLight(0x80ffdb);
scene.add(aLight);

// directional light
const dLight = new THREE.DirectionalLight(0xffffff, 0.8);
dLight.position.set(-30, 50, 0);
dLight.castShadow = true;
dLight.shadow.camera.top = 10;
scene.add(dLight);

// directional light helper
const dLightHelper = new THREE.DirectionalLightHelper(dLight, 5);
scene.add(dLightHelper);

// directional light shadow helper
const dLightShadowHelper = new THREE.CameraHelper(dLight.shadow.camera);
scene.add(dLightShadowHelper);

// // spot light
// const sLight = new THREE.SpotLight(0xcaf0f8);
// sLight.position.set(-100, 100, 0);
// sLight.castShadow = true;
// scene.add(sLight);

// // spot light helper
// const sLightHelper = new THREE.SpotLightHelper(sLight);
// scene.add(sLightHelper);

// interact with mouse
const mousePos = new THREE.Vector2();

window.addEventListener("mousemove", function (e) {
    mousePos.x = (e.clientX / window.innerWidth) * 2 - 1;
    mousePos.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

const rayCaster = new THREE.Raycaster();

// get the sphereId
const sphereId = sphere.id;

// set the box2 name
box2.name = "theBox";

// orbit
const orbit = new OrbitControls(camera, canvas);
orbit.enableDamping = true;

// renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// enable shadows
renderer.shadowMap.enabled = true;

// set background color
renderer.setClearColor(0xffffff);

// animate
const animate = (time) => {
    orbit.update();

    // box rotation
    box.rotation.x = time / 1000;
    box.rotation.y = time / 1000;

    // sphere bounce
    step += options.speed;
    sphere.position.y = 10 * Math.abs(Math.sin(step));

    // ray cast
    rayCaster.setFromCamera(mousePos, camera);
    const intersects = rayCaster.intersectObjects(scene.children);
    //console.log(intersects);

    for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.id === sphereId)
            intersects[i].object.material.color.set(0xff0000);

        // if (intersects[i].object.name === "theBox") {
        //     intersects[i].object.rotation.x = time / 1000;
        //     intersects[i].object.rotation.y = time / 1000;
        // }
    }

    // render
    renderer.render(scene, camera);

    window.requestAnimationFrame(animate);
};
renderer.setAnimationLoop(animate);
animate();
