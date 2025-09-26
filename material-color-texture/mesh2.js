import * as THREE from 'three';
const geometry=new THREE.PlaneGeometry(100, 100);


const material = new THREE.LineDashedMaterial(({
 color: new THREE.Color('orange'),
 transparent: true,
 opacity: 0.5,

}));

const mesh = new THREE.Mesh(geometry, material);

const color=mesh.material.color;
console.log(color);
console.log(mesh);
color.setStyle('pink');
export default mesh;


