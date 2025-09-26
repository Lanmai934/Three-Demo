import * as THREE from 'three';
//PlaneGeometry 的第三、四个参数就是宽和高的分段数,1乘以3（代表拼接的三角形个数，越多，越精细）
const geometry=new THREE.PlaneGeometry(100,100,1,3);

const material=new THREE.MeshBasicMaterial({color: new THREE.Color('orange'),wireframe:true});


const mesh=new THREE.Mesh(geometry,material);
export default mesh;
