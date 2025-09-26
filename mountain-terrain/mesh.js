import * as THREE from 'three';
import { createNoise2D } from "simplex-noise";
const noise2D = createNoise2D();

const geometry=new THREE.PlaneGeometry(3000,3000,100,100);
// const position=geometry.attributes.position;
// for(let i=0;i<position.count;i++){
//     const x=position.getX(i);
//     const y=position.getY(i);


//     //缩放控制粗糙度noise2D(x / 100, y / 100)
//     //noise2D(x/scale, y/scale) 控制“纹理大小”，scale 越大 → 越平滑
//     position.setXYZ(i,x,y,(noise2D(x / 100, y / 300) * 50));

// }

const material=new THREE.MeshBasicMaterial({color: new THREE.Color('orange'),wireframe:true});
const mesh=new THREE.Mesh(geometry,material);
// mesh.rotateX(Math.PI/2)
console.log(mesh);



function updatePosition(){
    const position=geometry.attributes.position;
    for(let i=0;i<position.count;i++){
        const x=position.getX(i);
        const y=position.getY(i);
        const z=noise2D(x/300, y/300)*50;
        // 动态变化 sinNum = sin( 时间 * 速度 + 空间偏移 ) * 振幅
        const sinNum = Math.sin(Date.now() * 0.002 + x * 0.05) * 10;
        position.setXYZ(i,x,y,z+sinNum);
    }
   position.needsUpdate=true;
}
export {updatePosition ,mesh};