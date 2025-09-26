import * as THREE from 'three';
//PlaneGeometry(width, height, widthSegments, heightSegments)
// width (100)
// 平面的宽度，单位是 three.js 世界坐标中的长度单位。


// height (200)
// 平面的高度。


// widthSegments (可选，默认 1)
// 沿着宽度方向分成多少段。增加分段数会增加几何体的顶点数，用于更精细的变形或贴图。

// heightSegments (可选，默认 1)
// 沿着高度方向分成多少段。

const geometry=new THREE.PlaneGeometry(100,200,1,1)
const material=new THREE.MeshBasicMaterial({color:new THREE.Color('orange')})
const mesh=new THREE.Mesh(geometry,material)
console.log(mesh);

export default mesh;
