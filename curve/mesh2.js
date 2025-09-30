import * as THREE from 'three';
const arr=[
    new THREE.Vector2( -100, 0 ),
new THREE.Vector2( -50, 50 ),
new THREE.Vector2( 0, 0 ),
new THREE.Vector2( 50, -50 ),
new THREE.Vector2( 100, 0 )
]
//splinecuve线条曲线，用于路径动画，曲线几何体，轨迹绘制
const curve=new THREE.SplineCurve(arr)
//getpoints是从曲线获取点
const pointsArr=curve.getPoints(20)

const geometry=new THREE.BufferGeometry();
geometry.setFromPoints(pointsArr);

const material=new THREE.LineBasicMaterial({
    color:0xff0000,
})
const line=new THREE.Line(geometry,material);
const PointsMaterial=new THREE.PointsMaterial({
    color:0xff0000,
    size:5,
})
const points=new THREE.Points(geometry,PointsMaterial);

const geometry2=new THREE.BufferGeometry();
geometry2.setFromPoints(pointsArr);
const material2=new THREE.LineBasicMaterial({
    color:0x00ff00,
    size:5,
})
const points2=new THREE.Points(geometry2,material2);
const line2=new THREE.Line(geometry2,new THREE.LineBasicMaterial({

}));
line.add(points2,line2);
export default line;
