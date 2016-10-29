
export default new THREE.ShaderPass({
	uniforms: {
    'tDiffuse': { type: 't', value: null },
    'sides':  { type: 'f', value: 6.0 },
    'angle':  { type: 'f', value: 0.0 }
  },
	vertexShader: require('./kalido.vert'),
	fragmentShader: require('./kalido.frag')
});
