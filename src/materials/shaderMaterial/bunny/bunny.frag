precision highp float;

varying float distFromCenter;
varying vec3 vNormal;

void main () {
  gl_FragColor = vec4(vec3(vNormal), 1.0);
}
