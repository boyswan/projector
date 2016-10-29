// #extension GL_OES_standard_derivatives : enable

const vec4 WIRE_COL = vec4(1.0, 1.0, 1.0, 1.0);
const vec3 FILL_COL = vec3(0.5, 0.5, 0.5);

uniform float thickness;
uniform float repeatSpacing;
varying vec3 dist;
varying vec3 edges;
uniform bool useAttenuation;

uniform vec3 colorA;
uniform vec3 colorB;
//
// #pragma glslify: aastep = require('glsl-aastep');
// #pragma glslify: noise = require('glsl-noise/simplex/4d');
// #pragma glslify: srcOver = require('./glsl-src-over');

void main()
{
  float r = length(edges.xyz - 0.5);

  float scale = 2.0 / thickness;
  if (!useAttenuation) {
    scale *= gl_FragCoord.w;
  }

  vec3 computedDist = dist;
  vec3 dist_vec = computedDist * scale;

   // Compute the shortest distance to the edge
  float minDist = min(dist_vec.x, min(dist_vec.y, dist_vec.z));
  float d = exp2(-2.0 * minDist * minDist);

  // d = minDist;

  // float rsp = repeatSpacing;
  // d = mod(d, rsp) - 0.5 * rsp;
  // d = aastep(0.5, exp(-2.0 * d * d));

  gl_FragColor = vec4(mix(colorA, colorB, d), 0.7);
}
