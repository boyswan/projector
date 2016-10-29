import Mesh from 'objects/common/mesh'
import material from 'materials/shaderMaterial/wire'
import { App } from 'app'
import { loadJson } from 'helpers/utils'


export default class Man extends Mesh {

  constructor() {
    super()

    loadJson('base', geometry => {
      // this.geometry = getWireframe(vecToArr(geo))
      this.geometry = geometry;

      const mat = new THREE.MeshLambertMaterial( { color: '#000fff', wireframe: false, shading: THREE.SmoothShading } )

      this.mesh = new THREE.Mesh(this.geometry, material);
      this.mesh.translation = this.geometry.center();
      App.scene.add(this.mesh)
    })


  }

  update({
    interval,
    pulseValue,
    leap: {
      translateHand: { x, y, z }
    }
  }) {
    this.rotate(y, x, 0 )
    // this.uniforms().mouse.value = y
  }
}
