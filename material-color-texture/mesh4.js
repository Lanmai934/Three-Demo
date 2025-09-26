import * as THREE from 'three';
// TextureLoader 是 Three.js 的纹理加载器，用来加载图片并生成纹理 (THREE.Texture)，然后可以贴到材质（Material）上。

// 纹理可以是 颜色贴图、法线贴图、环境贴图、透明贴图 等。

// 支持 异步加载，加载完成后自动回调。

// loader.load(
//   url,         // 纹理图片路径
//   onLoad,      // 加载完成回调
//   onProgress,  // 加载进度回调
//   onError      // 加载错误回调
// )

const loader=new THREE.TextureLoader();
const texture=loader.load('./asssts/zhuantou.png');
texture.wrapS=THREE.RepeatWrapping;
texture.wrapT=THREE.RepeatWrapping;
texture.repeat.set(3,3);
texture.colorSpace=THREE.SRGBColorSpace;

const geometry=new THREE.PlaneGeometry(100, 100, 100);


const material = new THREE.MeshBasicMaterial(({
 map:texture,//颜色贴图
 aoMap:texture,
}));

const mesh = new THREE.Mesh(geometry, material);

export default mesh;


