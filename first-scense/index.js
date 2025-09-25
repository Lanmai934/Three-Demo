import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const scene=new THREE.Scene();
{
    //几何体
    const geometry=new THREE.BoxGeometry(100,100,100);
    //材质
    const material=new THREE.MeshBasicMaterial(({color: new THREE.Color('orange')}));
    //网格（几何体 + 材质）
    const mesh=new THREE.Mesh(geometry,material);
    mesh.position.set(0, 0, 0);
    scene.add(mesh);
}
{
    const pointLight=new THREE.PointLight(0xffffff,10000);
    pointLight.position.set(80,80,80);
    scene.add(pointLight);

}
{
    const axesHelper=new THREE.AxesHelper(200);
    scene.add(axesHelper);
}
{
    const w=window.innerWidth;
    const h=window.innerHeight;
   
    const camera=new THREE.PerspectiveCamera(60,w/h,0.1,1000);
    camera.position.set(200, 200, 200);
   camera.lookAt(0,0,0);

   const renderer=new THREE.WebGLRenderer();
   renderer.setSize(w,h);
  
   renderer.render(scene,camera);

  

   document.body.append(renderer.domElement);
   
    function render(){
    renderer.render(scene,camera);
    requestAnimationFrame(render);
   }
   render();
//    鼠标轨迹 监听鼠标的 pointer、contextmenu、wheel,内部修改相机参数
   const controls=new OrbitControls(camera,renderer.domElement);
  
}