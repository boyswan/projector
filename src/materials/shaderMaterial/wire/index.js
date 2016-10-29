
export default new THREE.ShaderMaterial({
  uniforms: {
    resolution: { type: 'v2', value: new THREE.Vector2(1, 1) },
    time: { type: 'f', value: 0 },
    thickness: { type: 'f', value: 1 },
    repeatSpacing: { type: 'f', value: 7 },
    colorA: { type: 'c', value: new THREE.Color('#3c42ff') },
    colorB: { type: 'c', value: new THREE.Color('#ff2424') },
    useAttenuation: { type: 'i', value: true },
    mouse: { type: 'f', value: 0.1 }
  },
  transparent: true,
  depthTest: false,
  depthWrite: false,
  side: THREE.FrontSide,
  extensions: {
    derivatives: true
  },
  wireframe: true,
  vertexShader: require('./wire.vert'),
  fragmentShader: require('./wire.frag')
});
