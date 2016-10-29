
export default new THREE.ShaderPass({
	uniforms: {
		'tDiffuse': { type: 't', value: null },
		'h':        { type: 'f', value: 1.0 / 512.0 }
	},
	vertexShader: require('./horizontalBlur.vert'),
	fragmentShader: require('./horizontalBlur.frag')
});
