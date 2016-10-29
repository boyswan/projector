uniform sampler2D tDiffuse;
uniform float amount;
uniform float angle;

varying vec2 vUv;

void main() {

  vec2 offset = amount * vec2( cos(angle), sin(angle));
  vec4 cr = texture2D(tDiffuse, vUv + offset);
  vec4 cga = texture2D(tDiffuse, vUv);
  vec4 cb = texture2D(tDiffuse, vUv - offset);
  gl_FragColor = vec4(cr.r, cga.g, cb.b, cga.a);

}
