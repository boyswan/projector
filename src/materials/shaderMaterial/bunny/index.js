
export default new THREE.RawShaderMaterial({
  uniforms: {
    time: { type: 'f', value: 0 }
  },
  vertexShader: require('./bunny.vert'),
  fragmentShader: require('./bunny.frag'),
  wireframe: false
});
