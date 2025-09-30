import * as THREE from 'three';
const pointsArr=[
new THREE.Vector2(0, 0),
 new THREE.Vector2(50, 50),
 new THREE.Vector2(20, 80),
new THREE.Vector2(0, 150)
]
// 生成旋转几何体
//按路径选择成几何体
// points	Vector2 数组，二维轮廓点（沿 Y 轴的截面轮廓）
// segments	切分段数，越大越平滑，默认 12
// phiStart	开始旋转角度（弧度），默认 0
// phiLength	旋转角度长度（弧度），默认 2π（完整旋转）
const geometry=new THREE.LatheGeometry(pointsArr);
// 材质
// color	颜色，默认 0xffffff（白色）
// side	渲染面，默认 THREE.FrontSide（仅正面渲染）
// THREE.FrontSide	仅正面渲染
// THREE.BackSide	仅反面渲染
// THREE.DoubleSide	双面渲染
const material=new THREE.MeshBasicMaterial({
    color:new THREE.Color('red'),
    side:THREE.DoubleSide,
})
const mesh=new THREE.Mesh(geometry,material);




const geometry3=new THREE.BufferGeometry();
geometry3.setFromPoints(pointsArr);
const material3=new THREE.PointsMaterial({
    color:0x0000ff,
    size:5,
})
const points3=new THREE.Points(geometry3,material3);
const line2=new THREE.Line(geometry3,new THREE.LineBasicMaterial({
}));
mesh.add(line2,points3);

export default mesh;
