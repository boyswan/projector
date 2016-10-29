const OrbitControls = require('three-orbit-controls')(THREE)

class Scene {
  constructor() {
    this.items = [];
    this.renderer = this.renderer();
    this.scene = this.scene();
    this.camera = this.camera();
    this.lighting = this.lighting();
    this.controls = new OrbitControls(this.camera);
    document.body.appendChild(this.renderer.domElement);
  }

  scene() {
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2( 0xffffff, 0.001 );
    this.renderer.setClearColor(scene.fog.color);
    return scene
  }

  renderer() {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      gammaInput: true,
      gammaOutput: true,
      physicallyBasedShading: true,
      maxLights: 10,
    })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    return renderer
  }

  camera() {
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.set(0, 0, 20)
    return camera
  }

  lighting() {
    const lighting = new THREE.DirectionalLight('#ffffff')
    lighting.position.set(1, 1, 1)
    this.scene.add(lighting)
    return lighting
  }

  add(...a) {
    a.forEach(mesh => {
      this.items.push(mesh)
      this.scene.add(mesh.render())
    })
  }

  onWindowResize(){
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  update(props) {
    this.onWindowResize()
    this.items.forEach(item => item.update(props))
    this.renderer.render(this.scene, this.camera)
  }

}

export default new Scene();
