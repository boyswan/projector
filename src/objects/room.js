import { scene } from 'objects/common/scene';
// import material from 'materials/move';

const WALL_WIDTH = 800;
const WALL_HEIGHT = 800;
export const room = new THREE.Object3D();

const backGeom = new THREE.PlaneGeometry(WALL_WIDTH, WALL_HEIGHT, 32)
const backMaterial = new THREE.MeshPhongMaterial( {color: '#ff0f0d', side: THREE.DoubleSide} )
const backMesh = new THREE.Mesh(backGeom, backMaterial);
backMesh.position.z -= WALL_WIDTH;
room.add(backMesh);


const leftMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(WALL_WIDTH, WALL_HEIGHT, 32),
  new THREE.MeshPhongMaterial({ color: '#fff000', side: THREE.DoubleSide })
);
leftMesh.rotation.y = Math.PI / 2;
leftMesh.position.z -= WALL_WIDTH * 0.5;
leftMesh.position.x -= WALL_WIDTH * 0.5;
room.add(leftMesh);


const rightMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(WALL_WIDTH, WALL_HEIGHT, 32),
  new THREE.MeshPhongMaterial({ color: '#fff000', side: THREE.DoubleSide })
);
rightMesh.rotation.y = Math.PI / 2;
rightMesh.position.z -= WALL_WIDTH * 0.5;
rightMesh.position.x += WALL_WIDTH * 0.5;
room.add(rightMesh);

const bottomMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(WALL_WIDTH, WALL_WIDTH, 32),
  new THREE.MeshPhongMaterial({ color: '#eeeeee', side: THREE.DoubleSide })
);
bottomMesh.rotation.x = Math.PI / 2;
bottomMesh.position.y -= WALL_WIDTH * 0.5;
bottomMesh.position.z -= WALL_WIDTH * 0.5;
room.add(bottomMesh);

const topMesh = new THREE.Mesh(
  new THREE.PlaneGeometry(WALL_WIDTH, WALL_WIDTH, 32),
  new THREE.MeshPhongMaterial({ color: '#eeeeee', side: THREE.DoubleSide })
);
topMesh.rotation.x = Math.PI / 2;
topMesh.position.y += WALL_WIDTH * 0.5;
topMesh.position.z -= WALL_WIDTH * 0.5;
room.add(topMesh);


room.position.z += WALL_WIDTH * 0.5
// scene.add(group)


export default ({ }) => { };
