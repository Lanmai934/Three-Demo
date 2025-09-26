import * as THREE from 'three';
//PlaneGeometry 的第三、四个参数就是宽和高的分段数,1乘以3（代表拼接的三角形个数，越多，越精细）


// new THREE.CylinderGeometry(
//   radiusTop,      // 顶部半径
//   radiusBottom,   // 底部半径
//   height,         // 高度
//   radialSegments, // 圆周分段数
//   heightSegments, // 高度分段数
//   openEnded       // 是否开口（没有顶盖和底盖）
// )
const geometry=new THREE.CylinderGeometry(50,50,80,30,30);

const material=new THREE.MeshBasicMaterial({color: new THREE.Color('orange'),wireframe:true});


const mesh=new THREE.Mesh(geometry,material);
export default mesh;
