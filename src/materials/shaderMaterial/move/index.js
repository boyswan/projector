// import THREE from 'three';

export default new THREE.RawShaderMaterial({
	uniforms: {
    time: { type: 'f', value: 1.0 },
		audio: { type: 'f', value: 1.0 },
    mouse: { type: 'vec2', value: new THREE.Vector2(0, 0) }
  },
	vertexShader: require('./move.vert'),
	fragmentShader: require('./move.frag'),
	side: THREE.DoubleSide,
	transparent: true,
	// wireframe: true,
	// wireframeLinewidth: 5
});
