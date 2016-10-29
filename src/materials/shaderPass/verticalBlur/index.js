
export default new THREE.ShaderPass({
	uniforms: {
		'tDiffuse': { type: 't', value: null },
		'v': { type: 'f', value: 1.0 / 512.0 }
	},
	vertexShader: require('./verticalBlur.vert'),
	fragmentShader: require('./verticalBlur.frag')
});
