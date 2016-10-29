uniform vec2 resolution;
uniform float time;
attribute vec4 edge0;
attribute vec4 edge1;
attribute vec4 edge2;
attribute float edgeIndex;

varying vec3 dist;
varying vec3 edges;

uniform float mouse;

#pragma glslify: noise = require('glsl-noise/simplex/3d');

void main() {
  float swizz = edge1.x * 100.;
  vec4 offset = vec4(0.1);
  float anim = sin(time * 0.1);
  float scale = 1.0;
  float n = mouse;

  offset.x += n * noise(vec3(position.yz * scale, anim));
  offset.y += n * noise(vec3(position.xz * scale, anim));
  offset.z += n * noise(vec3(position.xy * scale, anim));
  offset.w = 0.0;

  mat4 pModelMatrix = projectionMatrix * modelViewMatrix;
  gl_Position = pModelMatrix * vec4(position.xyz + offset.xyz, 1.0);

  vec2 p0 = gl_Position.xy / gl_Position.w;
  vec4 v1_ = pModelMatrix * (edge1 + offset);
  vec2 l1 = resolution * (v1_.xy / v1_.w - p0);
  vec4 v2_ = pModelMatrix * (edge2 + offset);
  vec2 l2 = resolution * (v2_.xy / v2_.w - p0);

  float area2D = abs(l1.x * l2.y - l1.y * l2.x);
  float h = area2D / length(l1 - l2);

  if (swizz < 0.1) {
    dist = vec3(h, 0.0, 0.0);
    edges = vec3(1.0, 0.0, 0.0);
  }
  else if (swizz < 1.1) {
    dist = vec3(0.0, h, 0.0);
    edges = vec3(0.0, 1.0, 0.0);
  }
  // else  {
  //   dist = vec3(0.0, 0.0, h);
  //   edges = vec3(0.0, 0.0, 1.0);
  // }

  dist *= gl_Position.x;
}
