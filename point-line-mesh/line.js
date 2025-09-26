import * as THREE from 'three';

const geometry=new THREE.BufferGeometry();
const vertice=new Float32Array([
    0, 0, 0,
    100, 0, 0,
    0, 100, 0,
    0, 0, 100,
    100, 100, 0
]);
const attribute=new THREE.BufferAttribute(vertice,3);
geometry.attributes.position=attribute;

const material=new THREE.LineBasicMaterial({color: new THREE.Color('orange'),size:10});

// 线
//const line=new THREE.Line(geometry,material);
// 线循环
//const line=new THREE.LineLoop(geometry,material);
//每两个点一条线段
const line=new THREE.LineSegments(geometry,material);
export default line;
