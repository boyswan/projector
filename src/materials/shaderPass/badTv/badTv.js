export default () => new THREE.ShaderPass({
  uniforms: {
    'tDiffuse': { type: 't', value: null },
    'amount':  { type: 'f', value: 0.005 },
    'angle':  { type: 'f', value: 0.0 }
  },
  vertexShader: require('./rgbBlur.vert'),
  fragmentShader: require('./rgbBlur.frag')
});
