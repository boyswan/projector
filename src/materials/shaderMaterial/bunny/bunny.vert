attribute vec3 position;
attribute vec3 normal;

varying float distFromCenter;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float time;

varying vec3 vNormal;

void main () {
  vNormal = normal;
  distFromCenter = length(position.xyz);

  vec3 offset = position;
  float dist = sin(time);
  offset.xyz += normal * dist;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(offset, 1.0);
}
