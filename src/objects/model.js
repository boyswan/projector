import { scene } from 'objects/common/scene';
import createGeom from 'helpers/createGeom';
import material from 'materials/shaderMaterial/wire';
import { TimelineMax, TweenMax, TweenLite } from 'gsap';
import bunnyMesh from 'bunny';

let geometry;
export let mesh;
const loadJson = (name, cb) => new THREE.JSONLoader().load(`/assets/models/${name}.js`, x => cb(x))

export const model = model => {
  loadJson(model, geometry => {
    mesh = new THREE.Mesh(geometry, material);
    mesh.translation = geometry.center();
    scene.add(mesh)
  })
}

export default ({ audio: { high } }) => {
  // material.uniforms.time.value = tw.x * 0.001;
  // console.log(tw.x.toFixed(0))

  // material.position.z = -test
  material.uniforms.mouse.value = high * 3

};
