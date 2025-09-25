import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
const scene=new THREE.Scene();
const axesHelper=new THREE.AxesHelper(200);
scene.add(axesHelper);

const w=window.innerWidth;
const h=window.innerHeight;


const camera=new THREE.PerspectiveCamera(60,w/h,0.1,1000);
camera.position.set(200,200,200);
camera.lookAt(0,0,0);


//(fov--值越大，视野越宽，物理越小, aspect, near, far);
const camera2=new THREE.PerspectiveCamera(20,w/h,100,300);
//视锥体
const helper=new THREE.CameraHelper(camera2);
scene.add(helper);
//添加gui调试
const gui=new GUI();
function onChange(){
    scene.remove(helper);
    helper=new THREE.CameraHelper(camera2);
    scene.add(helper);
}
gui.add(camera2,'fov', [30, 60, 10]).onChange(onChange);
gui.add(camera2, 'aspect', {
 '16/9': 16/9,
 '4/3': 4/3
}).onChange(onChange);
gui.add(camera2,'near',0,300).onChange(onChange);
gui.add(camera2,'far',300,800).onChange(onChange);

const renderer=new THREE.WebGLRenderer();
renderer.setSize(w,h);

function render(){
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}
render();

document.body.append(renderer.domElement);
const controls=new OrbitControls(camera,renderer.domElement);
