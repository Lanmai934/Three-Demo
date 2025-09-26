import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import mesh from './mesh3.js';

const scene=new THREE.Scene();
scene.add(mesh);
console.log(mesh);
const pointLight=new THREE.PointLight(0xffffff,10000);
pointLight.position.set(80,80,80);
scene.add(pointLight);

const axeshelper=new THREE.AxesHelper(100);
scene.add(axeshelper);

const w=window.innerWidth;
const h=window.innerHeight;

const camera=new THREE.PerspectiveCamera(60,w/h,100,800);
camera.position.set(200, 200, 200);
camera.lookAt(0,0,0);

const renderer=new THREE.WebGLRenderer();
renderer.setSize(w,h);
document.body.append(renderer.domElement);
function render(){
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
render();
const controls=new OrbitControls(camera,renderer.domElement);
