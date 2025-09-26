import * as THREE from 'three';

const geometry=new THREE.BufferGeometry();
const vertice=new Float32Array([
    0, 0, 0,
    100, 0, 0,
    0, 100, 0,
    100, 100, 0
]);
const attribute=new THREE.BufferAttribute(vertice,3);
geometry.attributes.position=attribute;

const indexs=new Uint16Array([
    0, 1, 2, 2, 3, 1
]);
geometry.index=new THREE.BufferAttribute(indexs,1);
// side:THREE.DoubleSide  摄影机看双面
const material=new THREE.MeshBasicMaterial({color: new THREE.Color('orange'),side:THREE.DoubleSide});


const mesh=new THREE.Mesh(geometry,material);
export default mesh;
