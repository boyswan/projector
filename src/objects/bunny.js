import Mesh from 'objects/common/mesh'
import createGeom from 'helpers/createGeom';
import material from 'materials/shaderMaterial/bunny';
import { TweenMax, TweenLite } from 'gsap';
import bunnyMesh from 'bunny';


class Bunny extends Mesh {
  constructor() {
    super()

    this.material = material;
    this.geometry = createGeom(bunnyMesh, { flat: true });

    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.scale.x = 20;
    this.mesh.scale.y = 20;
    this.mesh.scale.z = 20;
  }

  tween() {
    const tw = { x: 0 }
    TweenMax.to(tw, 2, {x: 1000, repeat: -1, yoyo: true, ease: TweenMax.Elastic.easeInOutCubic })
    return tw.x;
  }

  update({ audio: { high }}) {
    this.material.uniforms.time.value = this.tween() * 0.001 * high;
  }
}


export default new Bunny();
