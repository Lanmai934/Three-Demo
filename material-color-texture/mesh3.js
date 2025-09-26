import * as THREE from 'three';
const loader=new THREE.TextureLoader();
const texture=loader.load('./asssts/diqiu.png');

const geometry=new THREE.SphereGeometry(50, 100, 100);


const material = new THREE.LineDashedMaterial(({
 map:texture,//颜色贴图
 aoMap:texture,
}));

const mesh = new THREE.Mesh(geometry, material);

export default mesh;


