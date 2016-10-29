export default class Mesh {

  scale(x = 1) {
    return this.mesh.scale.set(x, x, x)
  }

  position(x = 1, y = 1, z = 1) {
    return this.mesh.position.set(x, y, z)
  }

  rotate(x = 1, y = 1, z = 1) {
    return this.mesh.rotation.set(x, y, z)
  }

  rotateX(rotate) {
    return this.mesh.rotation.x = rotate;
  }

  uniforms() {
    return this.mesh.material.uniforms
  }

  render() {
    return this.mesh
  }
}
