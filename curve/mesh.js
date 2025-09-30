import * as THREE from 'three';
//EllipseCurve 是 二维椭圆曲线
// new THREE.EllipseCurve(
//   aX, aY,       // 椭圆中心坐标
//   xRadius, yRadius, // 椭圆长半径、短半径
//   aStartAngle, aEndAngle, // 起始角度、结束角度（弧度制）
//   aClockwise,   // 是否顺时针
//   aRotation     // 椭圆旋转角度（弧度制）
// )
const arc=new THREE.EllipseCurve(0,0,100,100)
//getPoints(divisions) 会 在曲线上均匀采样指定数量的点，返回一个 Vector2 数组（2D 点，x 和 y）
const pointlist=arc.getPoints(50);

const geometry=new THREE.BufferGeometry();
geometry.setFromPoints(pointlist);


//PointsMaterial例子效果
// const material=new THREE.PointsMaterial({
//     color:0xff0000,
//     size:10,
// })
// const points=new THREE.Points(geometry,material);
// export default points;


const material2=new THREE.LineBasicMaterial({
    color:0xff0000,
    size:10,
})
const line=new THREE.Line(geometry,material2);
export default line;

