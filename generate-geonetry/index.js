import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import mesh from './mesh.js';
const scene = new THREE.Scene();
{
    scene.add(mesh);



    //添加GUI
    const gui = new GUI();
    //调节网格的颜色，位置
    const meahFolder = gui.addFolder("立方体")
    meahFolder.addColor(mesh.material, 'color')
    meahFolder.add(mesh.position, 'x').step(10)
    meahFolder.add(mesh.position, 'y').step(10)
    meahFolder.add(mesh.position, 'z').step(10)


    const pointLight = new THREE.PointLight(0xffffff, 10000);
    pointLight.position.set(80, 80, 80);
    scene.add(pointLight);


    //调节点光源的颜色，强度
    const lightFolder = gui.addFolder('灯光')
    lightFolder.add(pointLight, 'intensity').name('点光源强度').step(100)
    lightFolder.add(pointLight.position, 'x').name('点光源x轴').step(10)
    lightFolder.add(pointLight.position, 'y').name('点光源y轴').step(10)
    lightFolder.add(pointLight.position, 'z').name('点光源z轴').step(10)


    const otherFolder = gui.addFolder('其他控件')
    const obj = {
        aaa: '天吞吞吐吐',
        bbb: false,
        ccc: 0,
        ddd: '111',
        logic: function () {
            alert('我是逻辑')
        }
    }
    otherFolder.add(obj, 'aaa')
    otherFolder.add(obj, 'bbb')
    otherFolder.add(obj, 'ccc').min(0).max(100).step(10)
    otherFolder.add(obj, 'logic').name('逻辑')

    otherFolder.add(obj,'aaa').onChange((value)=>{
        console.log(value)
    })

}
{
    const pointLight = new THREE.PointLight(0xffffff, 10000);
    pointLight.position.set(80, 80, 80);
    scene.add(pointLight);

}
{
    const axesHelper = new THREE.AxesHelper(200);
    scene.add(axesHelper);
}
{
    const w = window.innerWidth;
    const h = window.innerHeight;

    const camera = new THREE.PerspectiveCamera(60, w / h, 1, 10000);
    camera.position.set(90, 200, 1175);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(w, h);

    renderer.render(scene, camera);



    document.body.append(renderer.domElement);

    function render() {
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    }
    render();
    //    鼠标轨迹 监听鼠标的 pointer、contextmenu、wheel,内部修改相机参数
    const controls = new OrbitControls(camera, renderer.domElement);



}