import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import mesh from './mesh4.js';



const scene = new THREE.Scene();
const axesHelper=new THREE.AxesHelper(200);
scene.add(axesHelper);

scene.add(mesh);

const pointLight = new THREE.PointLight(0xffffff, 10000);
pointLight.position.set(80, 80, 80);
scene.add(pointLight);

const w = window.innerWidth;
const h = window.innerHeight;


const camera = new THREE.PerspectiveCamera(60, w / h, 1, 1000);
camera.position.set(450, 250, 100);
camera.lookAt(0, 0, 0);




const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);

function render() {   
    //  mesh.rotateZ(0.003);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

document.body.append(renderer.domElement);
const controls = new OrbitControls(camera, renderer.domElement);
