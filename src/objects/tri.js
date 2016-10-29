import { scene } from 'objects/common/scene';
// import material from 'materials/wire';

const geometry = new THREE.Geometry();
const material = new THREE.MeshNormalMaterial({ wireframe: true, side: THREE.DoubleSide })

geometry.vertices.push(new THREE.Vector3( 0.0, 1.0, 0.0));
geometry.vertices.push(new THREE.Vector3(-1.0, -1.0, 0.0));
geometry.vertices.push(new THREE.Vector3( 1.0, -1.0, 0.0));

geometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
geometry.computeFaceNormals();


let mesh;
let group = new THREE.Object3D();
group.name = 'tri';

for ( var i = 1; i <= 200; i ++ ) {
  mesh = new THREE.Mesh( geometry, material );
  mesh.geometry.translate( i * 0.001, 0, 0.1 );
  mesh.rotation.y =  33 * i;
  mesh.rotation.z =  33 * i;
  mesh.rotation.x =  33 * i;
  group.add(mesh);
}

// scene.add(group);

export default ({
  lowPulse,
  highPulse,
  pulseValue,
  mouseY,
  audio: { high }
}) => {
  // group.scale.x = mouseY * 0.01;
  // group.scale.y = mouseY * 0.01;
  // group.rotation.x = pulseValue * 0.01;
  // 
  // scene.getObjectByName('tri').children.forEach((obj, i) => {
  //   obj.rotation.y = (lowPulse * i * 0.001 * high) * 0.1
  //   obj.rotation.x = (lowPulse * i * 0.001 * high) * 0.1
  // });
};
