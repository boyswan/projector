import Mesh from 'objects/common/mesh'
import material from 'materials/shaderMaterial/move'
import { createBufferGeom } from 'helpers/utils'

class Shards extends Mesh {

  constructor() {
    super()

    const tri = 1000 * 3 * 3;
    const colors = new Uint8Array(tri);
    const vertices = new Float32Array(tri);

    for ( let i = 0; i < tri; i += 1 ) vertices[i] = Math.random() - 0.5;
    for ( let i = 0; i < tri; i += 9) colors[i] = 155;

    this.mesh = new THREE.Mesh(createBufferGeom({
      position: [vertices, 3],
      color: [colors, 3, true]
    }), material)

  }

  update({ tick, lowPulse }) {
    this.rotate(-tick * 0.01, tick * 0.01)
    this.scale(lowPulse * 0.001, lowPulse * 0.001)
    this.uniforms().mouse.value.set(lowPulse, lowPulse)
    this.uniforms().time.value = tick * 0.1;
  }
}

export default new Shards();
